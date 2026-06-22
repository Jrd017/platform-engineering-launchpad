import type { ReactNode } from "react";
import { clsx } from "clsx";

export function SectionPanel({
  title,
  description,
  children,
  className
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={clsx("floating-card glass-panel rounded-lg p-5", className)}>
      {title || description ? (
        <div className="mb-5">
          {title ? <h2 className="text-lg font-semibold text-white">{title}</h2> : null}
          {description ? <p className="mt-1 text-sm leading-6 text-slate-300">{description}</p> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
