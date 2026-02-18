import type { VercelRequest, VercelResponse } from "@vercel/node";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  topic?: string;
  message: string;
}

// HTML escape to prevent XSS in email notifications
function escapeHtml(str: string): string {
  const htmlEntities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return str.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

// In-memory rate limiting (resets on cold start, sufficient for Vercel)
const rateLimitMap = new Map<string, { count: number; windowStart: number }>();
const MAX_SUBMISSIONS_PER_HOUR = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.windowStart > oneHour) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return false;
  }

  entry.count++;
  return entry.count > MAX_SUBMISSIONS_PER_HOUR;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    // Rate limiting
    const clientIp =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
      "unknown";
    if (isRateLimited(clientIp)) {
      res.status(429).json({
        error: "Too many submissions. Please try again later.",
      });
      return;
    }

    const body: ContactFormData = req.body;

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.message) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    // Input length limits
    if (
      body.firstName.length > 100 ||
      body.lastName.length > 100 ||
      body.email.length > 255 ||
      body.message.length > 5000 ||
      (body.company && body.company.length > 200) ||
      (body.topic && body.topic.length > 100)
    ) {
      res.status(400).json({ error: "Input exceeds maximum allowed length" });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      res.status(400).json({ error: "Invalid email address" });
      return;
    }

    // Send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.CONTACT_TO_EMAIL || "israel@findable.me";

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      res.status(500).json({ error: "Email service is not configured" });
      return;
    }

    const safeFirst = escapeHtml(body.firstName.trim());
    const safeLast = escapeHtml(body.lastName.trim());
    const safeEmail = escapeHtml(body.email.trim());
    const safeCompany = body.company ? escapeHtml(body.company.trim()) : null;
    const safeTopic = body.topic ? escapeHtml(body.topic.trim()) : null;
    const safeMessage = escapeHtml(body.message.trim()).replace(
      /\n/g,
      "<br>"
    );

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: body.email.trim(),
        subject: `[Findable.me] New Contact: ${safeFirst} ${safeLast}${safeCompany ? ` (${safeCompany})` : ""}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; padding: 0; }
              .header { background: linear-gradient(135deg, #22d3ee 0%, #6366f1 100%); color: white; padding: 30px; text-align: center; }
              .header h1 { margin: 0; font-size: 22px; }
              .header p { margin: 8px 0 0 0; opacity: 0.9; font-size: 14px; }
              .content { background: #f9fafb; padding: 30px; }
              .field { background: white; padding: 15px 20px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #22d3ee; }
              .label { color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
              .value { color: #111827; font-size: 16px; font-weight: 500; }
              .message-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border: 1px solid #e5e7eb; }
              .footer { text-align: center; padding: 20px; color: #9ca3af; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
                <p>findable.me</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${safeFirst} ${safeLast}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
                </div>
                ${safeCompany ? `<div class="field"><div class="label">Company</div><div class="value">${safeCompany}</div></div>` : ""}
                ${safeTopic ? `<div class="field"><div class="label">Topic</div><div class="value">${safeTopic}</div></div>` : ""}
                <div class="message-box">
                  <div class="label">Message</div>
                  <p style="margin: 8px 0 0 0; color: #374151;">${safeMessage}</p>
                </div>
              </div>
              <div class="footer">
                Sent from the contact form on findable.me
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Resend API error:", emailResponse.status, errorData);
      res.status(500).json({ error: "Failed to send email. Please try again." });
      return;
    }

    const emailResult = await emailResponse.json();
    console.log("Email sent successfully:", emailResult.id);

    // Trigger n8n webhook if configured
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (n8nWebhookUrl) {
      try {
        await fetch(n8nWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "findable-me-contact",
            firstName: body.firstName.trim(),
            lastName: body.lastName.trim(),
            email: body.email.trim(),
            company: body.company?.trim() || null,
            topic: body.topic?.trim() || null,
            message: body.message.trim(),
            timestamp: new Date().toISOString(),
          }),
        });
        console.log("n8n webhook triggered");
      } catch (n8nError) {
        // Don't fail the request if n8n webhook fails
        console.error("n8n webhook failed:", n8nError);
      }
    }

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error: unknown) {
    console.error("Contact form error:", error);
    const message =
      error instanceof Error ? error.message : "Internal server error";
    res.status(500).json({ error: message });
  }
}
