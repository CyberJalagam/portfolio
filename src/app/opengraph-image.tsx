import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The link-preview card. Rendered at build time, so it stays in sync
 * with `content/site.ts` without anyone having to open a design tool.
 */
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0b0b0c",
        padding: "72px 80px",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 22,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#8e8e88",
        }}
      >
        <span>{site.name}</span>
        <span>{site.location}</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontSize: 132,
            fontWeight: 700,
            letterSpacing: -5,
            lineHeight: 1,
            color: "#f2efe8",
          }}
        >
          SOFTWARE
        </span>
        <span
          style={{
            fontSize: 132,
            fontWeight: 700,
            letterSpacing: -5,
            lineHeight: 1,
            color: "#4a4a47",
          }}
        >
          ENGINEER
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          fontSize: 24,
          color: "#8e8e88",
        }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: 99,
            background: "#c8ff4d",
          }}
        />
        <span>Backend · Build automation · Linux</span>
        <span style={{ color: "#3a3a38" }}>/</span>
        <span>@{site.github}</span>
      </div>
    </div>,
    size,
  );
}
