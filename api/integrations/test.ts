import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // Verify admin token
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const { integration, apiKey } = req.body;

  if (!integration || !apiKey) {
    res.status(400).json({ error: "Missing integration or apiKey" });
    return;
  }

  try {
    switch (integration) {
      case "resend": {
        // Test Resend API by fetching domains list
        const response = await fetch("https://api.resend.com/domains", {
          headers: { Authorization: `Bearer ${apiKey}` },
        });

        if (response.ok) {
          const data = await response.json();
          res.status(200).json({
            success: true,
            message: `Resend connected. ${data.data?.length || 0} domain(s) found.`,
          });
        } else {
          const errorData = await response.text();
          res.status(200).json({
            success: false,
            message: `Resend error (${response.status}): Invalid API key or insufficient permissions.`,
          });
        }
        break;
      }

      case "streak": {
        // Test Streak CRM API by fetching user info
        const authString = Buffer.from(`${apiKey}:`).toString("base64");
        const response = await fetch("https://api.streak.com/api/v1/users/me", {
          headers: { Authorization: `Basic ${authString}` },
        });

        if (response.ok) {
          const data = await response.json();
          res.status(200).json({
            success: true,
            message: `Streak connected. Logged in as ${data.displayName || data.email || "user"}.`,
          });
        } else {
          res.status(200).json({
            success: false,
            message: `Streak error (${response.status}): Invalid API key.`,
          });
        }
        break;
      }

      case "n8n": {
        // Test n8n by checking the webhook URL is reachable
        // n8n doesn't have a standard auth test — we'll do a lightweight GET
        try {
          const testUrl = apiKey.startsWith("http")
            ? apiKey
            : `https://${apiKey}`;

          const response = await fetch(testUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              test: true,
              source: "findable-me-admin",
              timestamp: new Date().toISOString(),
            }),
          });

          // n8n webhooks typically return 200 even for test pings
          if (response.ok || response.status === 404) {
            res.status(200).json({
              success: response.ok,
              message: response.ok
                ? "n8n webhook is reachable and responded."
                : "n8n webhook URL was reachable but returned 404. Check your workflow is active.",
            });
          } else {
            res.status(200).json({
              success: false,
              message: `n8n webhook returned ${response.status}. Check the URL and ensure the workflow is active.`,
            });
          }
        } catch (fetchErr) {
          res.status(200).json({
            success: false,
            message: "Could not reach n8n webhook URL. Check the URL is correct.",
          });
        }
        break;
      }

      default:
        res.status(400).json({ error: `Unknown integration: ${integration}` });
    }
  } catch (error: unknown) {
    console.error(`Integration test error for ${integration}:`, error);
    const message =
      error instanceof Error ? error.message : "Test failed unexpectedly";
    res.status(500).json({ success: false, message });
  }
}
