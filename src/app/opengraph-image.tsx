import { ImageResponse } from "next/og";

export const alt = "Shourya Bhardwaj — builder and engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ background: "#0d0e0d", color: "#efefeb", width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "72px 82px", fontFamily: "sans-serif", justifyContent: "space-between" }}><div style={{ color: "#b9c8ac", fontSize: 22, letterSpacing: 4, display: "flex" }}>SHOURYA BHARDWAJ</div><div style={{ fontSize: 68, lineHeight: 1.08, letterSpacing: -3, maxWidth: 1000, display: "flex" }}>Ambitious technical systems. From idea to working prototype.</div><div style={{ borderTop: "1px solid #444a3e", paddingTop: 24, color: "#aaada6", fontSize: 20, display: "flex" }}>AI agents · Systems engineering · Biologically inspired simulation</div></div>,size);
}
