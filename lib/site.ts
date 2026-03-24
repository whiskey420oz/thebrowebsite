/**
 * Business & URLs — edit here before launch (single source of truth).
 */
/** Facebook profile / Page ID (from your profile URL). */
const facebookProfileId = "61553747002284";

export const site = {
  name: "The Bro Laptop Store",
  description: "Quality Laptops. Affordable Prices. Trusted Service.",
  phoneDisplay: "0948 829 6124",
  /** E.164 without leading zero (PH mobile) */
  phoneTel: "+639488296124",
  facebookUrl: `https://www.facebook.com/profile.php?id=${facebookProfileId}`,
  /** Facebook Messenger for this profile (same account as the Page) */
  messengerUrl: `https://m.me/${facebookProfileId}`,
  /** SMS to the store number (optional — use in UI where you want plain text) */
  smsUrl: "sms:+639488296124?body=Hi%20The%20Bro%20Laptop%20Store%20%E2%80%94%20",
  /** Area shown on the embedded map */
  mapsQuery: "Pasig City, Metro Manila, Philippines",
  /** For SEO / structured data */
  addressLocality: "Pasig City",
  addressRegion: "Metro Manila",
  addressCountry: "PH",
} as const;

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export function getMapsEmbedUrl(): string {
  const q = encodeURIComponent(site.mapsQuery);
  return `https://www.google.com/maps?q=${q}&output=embed`;
}
