import type { CSSProperties } from "react";

type GeometryItem = {
  kind: "cube" | "diamond" | "frame";
  size: number;
  top: string;
  delay: string;
  duration: string;
  float: string;
};

const geometryItems: GeometryItem[] = [
  { kind: "cube", size: 42, top: "9%", delay: "-4s", duration: "28s", float: "28px" },
  { kind: "diamond", size: 28, top: "18%", delay: "-14s", duration: "34s", float: "-36px" },
  { kind: "frame", size: 54, top: "31%", delay: "-8s", duration: "32s", float: "42px" },
  { kind: "cube", size: 34, top: "44%", delay: "-21s", duration: "30s", float: "-26px" },
  { kind: "diamond", size: 46, top: "57%", delay: "-2s", duration: "36s", float: "34px" },
  { kind: "frame", size: 32, top: "69%", delay: "-17s", duration: "29s", float: "-32px" },
  { kind: "cube", size: 50, top: "82%", delay: "-10s", duration: "38s", float: "46px" }
];

export function FloatingGeometry() {
  return (
    <div className="floating-geometry" aria-hidden="true">
      {geometryItems.map((item, index) => (
        <span
          key={`${item.kind}-${index}`}
          className={`geo-shape geo-${item.kind}`}
          style={
            {
              "--geo-size": `${item.size}px`,
              "--geo-top": item.top,
              "--geo-delay": item.delay,
              "--geo-duration": item.duration,
              "--geo-float": item.float,
              "--geo-float-end": item.float.startsWith("-") ? item.float.slice(1) : `-${item.float}`
            } as CSSProperties
          }
        >
          {item.kind === "cube" ? (
            <>
              <span className="geo-cube-face geo-cube-face-front" />
              <span className="geo-cube-face geo-cube-face-top" />
              <span className="geo-cube-face geo-cube-face-side" />
            </>
          ) : null}
        </span>
      ))}
    </div>
  );
}
