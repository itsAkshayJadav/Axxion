const DEFAULT_SITE_URL = "https://axxionstudio.com";

function normalizeSiteUrl(value?: string) {
  const trimmedValue = value?.trim();

  if (!trimmedValue) {
    return DEFAULT_SITE_URL;
  }

  const urlWithProtocol = /^https?:\/\//i.test(trimmedValue) ? trimmedValue : `https://${trimmedValue}`;

  try {
    return new URL(urlWithProtocol).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteConfig = {
  name: "Axxion",
  title: "Axxion | AI-Native Engineering for Startups and MSMEs",
  description:
    "Axxion helps startups and MSMEs launch websites, products, internal tools, and AI automations faster with AI-native engineers and human-reviewed quality.",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL),
  locale: "en_AU",
  language: "en-AU",
  location: "Perth, Australia",
  keywords: [
    "AI-native software delivery",
    "startup MVP development",
    "web app development",
    "AI automation agency",
    "internal tools development",
    "Perth software engineering",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
