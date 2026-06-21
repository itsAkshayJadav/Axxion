import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const alt = "Axxion AI-native engineering for startups and MSMEs";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function Image() {
  const siteHost = new URL(siteConfig.url).hostname.replace(/^www\./, "");

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "radial-gradient(circle at 20% 10%, rgba(103,232,249,0.32), transparent 28%), linear-gradient(135deg, #020617 0%, #07111f 48%, #0b1727 100%)",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, Helvetica, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "70px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            fontSize: 44,
            fontWeight: 800,
            gap: 18,
            letterSpacing: 4,
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "#67e8f9",
              borderRadius: 18,
              color: "#020617",
              display: "flex",
              height: 58,
              justifyContent: "center",
              width: 58,
            }}
          >
            A
          </div>
          AXXION
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26, maxWidth: 920 }}>
          <div
            style={{
              color: "#a5f3fc",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            AI-native software delivery
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 0.98 }}>
            Websites, web apps, and AI-powered software built with startup speed.
          </div>
          <div style={{ color: "#cbd5e1", fontSize: 30, lineHeight: 1.35, maxWidth: 860 }}>
            {siteConfig.description}
          </div>
        </div>

        <div style={{ color: "#67e8f9", display: "flex", fontSize: 26, fontWeight: 700, justifyContent: "space-between" }}>
          <span>{siteConfig.location}</span>
          <span>{siteHost}</span>
        </div>
      </div>
    ),
    size
  );
}
