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
  { kind: "cube", size: 86, top: "7%", delay: "-4s", duration: "30s", float: "42px" },
  { kind: "frame", size: 102, top: "28%", delay: "-8s", duration: "34s", float: "58px" },
  { kind: "diamond", size: 92, top: "56%", delay: "-2s", duration: "38s", float: "50px" },
  { kind: "cube", size: 110, top: "80%", delay: "-10s", duration: "40s", float: "64px" },
  { kind: "frame", size: 124, top: "12%", delay: "-24s", duration: "44s", float: "-70px" }
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
