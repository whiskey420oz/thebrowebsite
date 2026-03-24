import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(145deg, #020617 0%, #0f172a 40%, #1e40af 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              boxShadow: "0 0 40px rgba(37, 99, 235, 0.35)",
            }}
          >
            {/* Laptop mark — fits 56×56 (ImageResponse: simple geometry, no SVG import) */}
            <div
              style={{
                width: 26,
                height: 17,
                border: "2.5px solid white",
                borderRadius: 4,
                borderBottomLeftRadius: 1,
                borderBottomRightRadius: 1,
                background: "linear-gradient(145deg, #0f172a 0%, #1e293b 100%)",
                boxSizing: "border-box",
              }}
            />
            <div
              style={{
                width: 34,
                height: 6,
                background: "linear-gradient(180deg, #f1f5f9 0%, #cbd5e1 100%)",
                borderRadius: 3,
              }}
            />
            <div
              style={{
                width: 11,
                height: 2,
                background: "rgba(15, 23, 42, 0.4)",
                borderRadius: 1,
              }}
            />
          </div>
          <div style={{ color: "#94a3b8", fontSize: 20, fontWeight: 600 }}>Laptops & service</div>
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          {site.name}
        </div>
        <div style={{ marginTop: 22, fontSize: 26, color: "#7dd3fc", maxWidth: 820, lineHeight: 1.35 }}>
          {site.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
