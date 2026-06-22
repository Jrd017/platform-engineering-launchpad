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
  { kind: "diamond", size: 58, top: "16%", delay: "-14s", duration: "36s", float: "-52px" },
  { kind: "frame", size: 102, top: "28%", delay: "-8s", duration: "34s", float: "58px" },
  { kind: "cube", size: 68, top: "42%", delay: "-21s", duration: "32s", float: "-40px" },
  { kind: "diamond", size: 92, top: "56%", delay: "-2s", duration: "38s", float: "50px" },
  { kind: "frame", size: 64, top: "68%", delay: "-17s", duration: "31s", float: "-46px" },
  { kind: "cube", size: 110, top: "80%", delay: "-10s", duration: "40s", float: "64px" },
  { kind: "frame", size: 124, top: "12%", delay: "-24s", duration: "44s", float: "-70px" },
  { kind: "diamond", size: 74, top: "88%", delay: "-29s", duration: "37s", float: "54px" }
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
