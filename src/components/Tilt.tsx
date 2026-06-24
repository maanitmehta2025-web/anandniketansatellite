import { useRef, type ReactNode } from "react";

/**
 * Wraps a card in a subtle 3D tilt that tracks the cursor, emphasising the
 * depth of the glass. The element rotates toward the pointer and lifts
 * slightly; it springs back on leave. Disabled for reduced-motion users.
 */
export default function Tilt({
  children,
  className = "",
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees on each axis. */
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || reduced) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(
      2
    )}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-6px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`transition-transform duration-300 ease-out [transform-style:preserve-3d] ${className}`}
    >
      {children}
    </div>
  );
}
