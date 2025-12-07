import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Abduvokhid Akhmedov - Software Engineering Leader";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          position: "relative",
        }}
      >
        {/* Grid pattern layer */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.7) 40%, black 55%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.7) 40%, black 55%)",
          }}
        />
        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 24,
            letterSpacing: "-0.02em",
          }}
        >
          Abduvokhid Akhmedov
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#a1a1aa",
            marginBottom: 40,
          }}
        >
          Software Engineering Leader
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: 16,
          }}
        >
          {["FinTech", "Payments", "Anti-fraud", "BNPL", "Cybersecurity"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "12px 24px",
                backgroundColor: "#27272a",
                borderRadius: 9999,
                color: "#d4d4d8",
                fontSize: 20,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
