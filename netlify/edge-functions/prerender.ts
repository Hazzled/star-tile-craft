// Edge function: return HTML snapshots for crawlers, SPA for humans
const BOT_UA = /(googlebot|bingbot|baiduspider|duckduckbot|yandex|twitterbot|facebookexternalhit|linkedinbot|slackbot|embedly|quora|pinterest|vkshare|whatsapp|telegrambot|discordbot)/i;
const PRERENDER_URL = "https://service.prerender.io";

export default async (req: Request) => {
  const ua = req.headers.get("user-agent") || "";
  const url = new URL(req.url);

  // Let static assets pass straight through
  if (/\.(js|css|png|jpe?g|webp|svg|ico|mp4|pdf|woff2?)$/i.test(url.pathname)) {
    return fetch(req);
  }

  if (BOT_UA.test(ua)) {
    // Ask Prerender for a snapshot of THIS page
    const target = `${PRERENDER_URL}/${url.origin}${url.pathname}${url.search}`;
    const res = await fetch(target, {
      headers: {
        "User-Agent": ua,
        "X-Prerender-Token": Deno.env.get("PRERENDER_TOKEN") ?? "",
      },
    });
    // If snapshot works, return it; otherwise fall back to normal response
    if (res.ok) return res;
  }

  // Humans and any fallback: serve the SPA as-is
  return fetch(req);
};
