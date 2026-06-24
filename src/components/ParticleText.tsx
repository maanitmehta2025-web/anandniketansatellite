import { useEffect, useRef } from "react";

/**
 * Particle ("sand") text. The heading is rasterised to an offscreen canvas,
 * its opaque pixels sampled into thousands of particles that assemble into the
 * words. The cursor repels nearby grains; each springs back to its home, so
 * the text scatters and re-forms as the pointer sweeps through it.
 *
 * Particles are tinted blue→green across the width. Reduced-motion users get
 * the text drawn solid with no interaction.
 */

const BLUE = [0, 137, 205];
const GREEN = [166, 206, 57];

type P = { hx: number; hy: number; x: number; y: number; vx: number; vy: number; s: number; c: string };

export default function ParticleText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };
    let particles: P[] = [];
    let cssW = 0;
    let cssH = 0;
    let raf = 0;
    let alive = true;

    const color = (ratio: number) => {
      const r = Math.round(BLUE[0] + (GREEN[0] - BLUE[0]) * ratio);
      const g = Math.round(BLUE[1] + (GREEN[1] - BLUE[1]) * ratio);
      const b = Math.round(BLUE[2] + (GREEN[2] - BLUE[2]) * ratio);
      return `rgb(${r},${g},${b})`;
    };

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cssW = parent.clientWidth;
      const small = cssW < 640;
      const fontSize = small
        ? Math.min(cssW / 7, 52)
        : Math.min(cssW / 11, 104);
      const font = `900 ${fontSize}px Inter, sans-serif`;

      // Wrap words to fit the width.
      ctx.font = font;
      const maxW = cssW * 0.96;
      const lines: string[] = [];
      let cur = "";
      for (const w of text.split(" ")) {
        const t = cur ? `${cur} ${w}` : w;
        if (ctx.measureText(t).width > maxW && cur) {
          lines.push(cur);
          cur = w;
        } else cur = t;
      }
      if (cur) lines.push(cur);

      const lineH = fontSize * 1.04;
      cssH = Math.ceil(lineH * lines.length + fontSize * 0.4);

      // Size the visible canvas (drawn in CSS px via the dpr transform).
      canvas.width = Math.ceil(cssW * dpr);
      canvas.height = Math.ceil(cssH * dpr);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;

      // Rasterise the text to an offscreen canvas and sample it.
      const off = document.createElement("canvas");
      off.width = canvas.width;
      off.height = canvas.height;
      const octx = off.getContext("2d");
      if (!octx) return;
      octx.scale(dpr, dpr);
      octx.fillStyle = "#000";
      octx.font = font;
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      lines.forEach((ln, i) => {
        octx.fillText(ln, cssW / 2, fontSize * 0.5 + i * lineH + fontSize * 0.2);
      });

      const data = octx.getImageData(0, 0, off.width, off.height).data;
      const gap = Math.max(2, Math.round((fontSize * dpr) / 24));
      const dot = Math.max(1.4, gap / dpr - 0.4);
      const next: P[] = [];
      for (let y = 0; y < off.height; y += gap) {
        for (let x = 0; x < off.width; x += gap) {
          if (data[(y * off.width + x) * 4 + 3] > 128) {
            const hx = x / dpr;
            const hy = y / dpr;
            next.push({
              hx,
              hy,
              // start scattered so the text assembles on first paint
              x: reduced ? hx : Math.random() * cssW,
              y: reduced ? hy : Math.random() * cssH,
              vx: 0,
              vy: 0,
              s: dot,
              c: color(hx / cssW),
            });
          }
        }
      }
      particles = next;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (reduced) {
        ctx.clearRect(0, 0, cssW, cssH);
        for (const p of particles) {
          ctx.fillStyle = p.c;
          ctx.fillRect(p.hx, p.hy, p.s, p.s);
        }
      }
    };

    const tick = () => {
      if (!alive) return;
      ctx.clearRect(0, 0, cssW, cssH);
      const R = 80;
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < R * R) {
          const d = Math.sqrt(d2) || 0.001;
          const f = (R - d) / R;
          p.vx += (dx / d) * f * 4.2;
          p.vy += (dy / d) * f * 4.2;
        }
        p.vx += (p.hx - p.x) * 0.028;
        p.vy += (p.hy - p.y) * 0.028;
        p.vx *= 0.85;
        p.vy *= 0.85;
        p.x += p.vx;
        p.y += p.vy;
        ctx.fillStyle = p.c;
        ctx.fillRect(p.x, p.y, p.s, p.s);
      }
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    let ro: ResizeObserver | null = null;
    const start = () => {
      build();
      if (reduced) return;
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerout", onLeave);
      ro = new ResizeObserver(() => build());
      ro.observe(parent);
      raf = requestAnimationFrame(tick);
    };

    // Wait for Inter so measureText/rasterise use the right glyphs.
    if (document.fonts?.ready) document.fonts.ready.then(start);
    else start();

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onLeave);
      ro?.disconnect();
    };
  }, [text]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
