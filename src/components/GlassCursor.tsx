import { useEffect, useRef } from "react";

/**
 * A refracting glass-ball cursor. The ball is a fixed circle whose
 * `backdrop-filter` runs an SVG displacement filter — two chained
 * feDisplacementMap passes driven by horizontal/vertical gradient maps —
 * so the page content behind it bends outward like a real lens.
 *
 * Only mounts on fine pointers (mouse/trackpad); hidden for touch and for
 * users who prefer reduced motion. Follows the pointer with a slight spring
 * lag and swells over interactive elements.
 */

// Displacement maps. R encodes horizontal offset, G vertical, B is pinned to
// 128 (= "no move") so each pass only displaces one axis.
const MAP_X =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>` +
      `<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='0'>` +
      `<stop offset='0' stop-color='rgb(0,0,128)'/>` +
      `<stop offset='1' stop-color='rgb(255,0,128)'/>` +
      `</linearGradient></defs>` +
      `<rect width='100' height='100' fill='url(#g)'/></svg>`
  );

const MAP_Y =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>` +
      `<defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'>` +
      `<stop offset='0' stop-color='rgb(0,0,128)'/>` +
      `<stop offset='1' stop-color='rgb(0,255,128)'/>` +
      `</linearGradient></defs>` +
      `<rect width='100' height='100' fill='url(#g)'/></svg>`
  );

const INTERACTIVE = "a,button,[role=button],input,textarea,select,label,.cursor-grow";

export default function GlassCursor() {
  const ball = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    document.documentElement.classList.add("glass-cursor-on");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...pos };
    let down = false;
    let over = false;
    let raf = 0;
    let alive = true;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = e.target as HTMLElement | null;
      over = !!el?.closest?.(INTERACTIVE);
    };
    const onDown = () => (down = true);
    const onUp = () => (down = false);

    const tick = () => {
      if (!alive) return;
      pos.x += (target.x - pos.x) * 0.22;
      pos.y += (target.y - pos.y) * 0.22;
      const b = ball.current;
      if (b) {
        const scale = (down ? 0.82 : 1) * (over ? 1.65 : 1);
        b.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    raf = requestAnimationFrame(tick);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.classList.remove("glass-cursor-on");
    };
  }, []);

  return (
    <>
      <svg className="glass-cursor-defs" aria-hidden>
        <filter
          id="glass-cursor-filter"
          x="-25%"
          y="-25%"
          width="150%"
          height="150%"
          colorInterpolationFilters="sRGB"
        >
          <feImage
            href={MAP_X}
            result="mapx"
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          />
          <feImage
            href={MAP_Y}
            result="mapy"
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="mapx"
            scale="26"
            xChannelSelector="R"
            yChannelSelector="B"
            result="dx"
          />
          <feDisplacementMap
            in="dx"
            in2="mapy"
            scale="26"
            xChannelSelector="B"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <div ref={ball} className="glass-cursor" aria-hidden />
    </>
  );
}
