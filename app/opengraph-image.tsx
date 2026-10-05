import { ImageResponse } from "next/og";

export const alt = "Santos Villada, desarrollo web e IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#101210", color: "#f1f2ea", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "70px 80px", fontFamily: "sans-serif" }}>
      <div style={{ color: "#d9f95a", fontSize: 28, display: "flex", flexDirection: "row" }}>Santos Villada<span style={{ color: "#f1f2ea" }}>.</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ color: "#d9f95a", fontSize: 22 }}>DESARROLLO WEB + IA</div>
        <div style={{ fontSize: 72, lineHeight: 1.05, letterSpacing: -3 }}>Construyo soluciones digitales para problemas reales.</div>
      </div>
      <div style={{ color: "#9b9e95", fontSize: 24 }}>Websites · Web apps · Automatizaciones · Productos digitales</div>
    </div>,
    { ...size },
  );
}
