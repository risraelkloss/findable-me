import { VercelRequest, VercelResponse } from "@vercel/node";

const BACKEND_PASSWORD = process.env.FINDABLE_ADMIN_PASSWORD || "changeme";
const JWT_SECRET = process.env.FINDABLE_JWT_SECRET || "your-secret-key";

// Simple JWT-like token creation (for production, use a real JWT library)
function createToken(email: string): string {
  const timestamp = Date.now();
  const data = `${email}:${timestamp}`;
  return Buffer.from(data).toString("base64");
}

export default function handler(
  req: VercelRequest,
  res: VercelResponse
): void {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { email, password } = req.body;

  // Validate email
  if (email !== "israel@findable.me") {
    res
      .status(401)
      .json({
        message: "Invalid email. Only israel@findable.me can access admin panel.",
      });
    return;
  }

  // Validate password
  if (password !== BACKEND_PASSWORD) {
    res.status(401).json({ message: "Invalid password" });
    return;
  }

  // Create token
  const token = createToken(email);

  res.status(200).json({
    token,
    email,
    message: "Login successful",
  });
}
