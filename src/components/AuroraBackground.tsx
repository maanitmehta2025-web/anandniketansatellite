/**
 * Fixed, full-viewport ambient mesh. A white base canvas with a few highly
 * dispersed, low-opacity blue/green blobs that slowly morph and drift —
 * the soft light source behind every liquid-glass surface. Purely decorative
 * and non-interactive; sits beneath all content.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white"
    >
      <div className="absolute -left-[10%] top-[-8%] h-[55vw] w-[55vw] rounded-full bg-brand-blue/15 blur-[120px] animate-drift-1" />
      <div className="absolute right-[-12%] top-[18%] h-[50vw] w-[50vw] rounded-full bg-brand-green/15 blur-[120px] animate-drift-2 [animation-delay:-6s]" />
      <div className="absolute bottom-[-15%] left-[20%] h-[48vw] w-[48vw] rounded-full bg-brand-blue/10 blur-[130px] animate-drift-3 [animation-delay:-12s]" />
      <div className="absolute bottom-[5%] right-[8%] h-[34vw] w-[34vw] rounded-full bg-brand-green/10 blur-[110px] animate-drift-1 [animation-delay:-9s]" />
    </div>
  );
}
