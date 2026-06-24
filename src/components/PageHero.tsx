import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
};

export default function PageHero({ eyebrow, title, subtitle, image }: Props) {
  return (
    <section className="relative">
      <div className="wrap py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            {eyebrow && (
              <Reveal variant="scale">
                <span className="glass inline-block rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
                  {eyebrow}
                </span>
              </Reveal>
            )}
            <Reveal delay={80}>
              <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-brand-ink sm:text-6xl">
                {title}
              </h1>
            </Reveal>
            {subtitle && (
              <Reveal delay={150}>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-ink/70 sm:text-lg">
                  {subtitle}
                </p>
              </Reveal>
            )}
          </div>

          <Reveal variant="right" delay={120}>
            <div className="glass-card overflow-hidden p-2">
              <img
                src={image}
                alt=""
                aria-hidden
                className="h-56 w-full rounded-2xl object-cover sm:h-72"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
