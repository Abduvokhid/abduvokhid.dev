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
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        {/* Logo/Initials */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 120,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.05em",
            }}
          >
            AV
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 20,
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
          {["FinTech", "BNPL", "Payments", "Cybersecurity"].map((tag) => (
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
