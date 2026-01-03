export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  // Get real client IP (Vercel-aware)
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress ||
    "unknown";

  const WEBHOOK_URL = "PUT_YOUR_WEBHOOK_URL_HERE";

  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `User IP: ${ip}`
      })
    });
  } catch (e) {
    // fail silently
  }

  res.status(204).end();
}
