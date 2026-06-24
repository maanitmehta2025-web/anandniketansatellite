import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ShieldCheck, Users, Compass } from "lucide-react";
import { Section, SectionHeading, Card } from "../components/ui";
import Reveal from "../components/Reveal";
import Tilt from "../components/Tilt";
import ParticleText from "../components/ParticleText";
import { stats, elements, school, results } from "../data/content";
import { img, elementPic } from "../data/images";

export default function Home() {
  return (
    <>
      {/* ---- Hero: massive type over the Aurora mesh ---- */}
      <section className="relative">
        <div className="wrap flex flex-col items-center py-24 text-center sm:py-32">
          <Reveal variant="scale">
            <span className="glass glass-sheen inline-flex items-center gap-2 overflow-hidden rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
              <Sparkles size={14} /> Satellite Campus · Ahmedabad
            </span>
          </Reveal>

          <div className="mt-7 w-full max-w-4xl">
            <ParticleText
              text="Where Ambition Finds Direction"
              className="block w-full cursor-none"
            />
          </div>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-ink/70 sm:text-lg">
              Global teaching meets Indian values. We nurture confident, curious
              and self-motivated learners — ready for the world and rooted in who
              they are.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/admissions"
                className="btn-blue group transition-transform hover:scale-105 active:scale-95"
              >
                Apply for Admission
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/about"
                className="btn-ghost transition-transform hover:scale-105 active:scale-95"
              >
                Discover the School
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Stats: one liquid-glass strip ---- */}
      <Section className="pt-0">
        <Reveal>
          <div className="glass-card grid grid-cols-2 gap-y-8 p-8 sm:grid-cols-3 sm:p-10 lg:grid-cols-6">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 70}
                variant="scale"
                className="group text-center"
              >
                <div className="text-3xl font-black text-brand-blue transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
                  {s.value}
                </div>
                <div className="mx-auto mt-1 max-w-[14ch] text-xs leading-snug text-brand-ink/60">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ---- Bento grid: asymmetric glass feature cards ---- */}
      <Section className="pt-0">
        <SectionHeading
          center
          eyebrow="Our philosophy"
          title="Where Elements Meet Education"
          subtitle="Four elements shape the spirit of Anand Niketan — each a promise about how your child will learn and grow."
        />

        <div className="mt-12 grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-5 lg:grid-cols-4">
          {/* Feature hero tile — spans 2x2 */}
          <Reveal className="col-span-2 row-span-2" variant="scale">
            <Tilt className="h-full">
              <div className="glass-card glass-sheen flex h-full flex-col justify-between overflow-hidden p-8">
                <Compass className="h-9 w-9 text-brand-blue" />
                <div className="mt-8">
                  <h3 className="text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                    A school built around the child
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-ink/70">
                    Inspired by Sri Aurobindo, Gijubhai Badheka and J.
                    Krishnamurti, our student-centred approach balances academics
                    with sport, art, debate and theatre — so every learner grows
                    in full.
                  </p>
                  <Link
                    to="/about"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-all hover:gap-3"
                  >
                    More about us <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Tilt>
          </Reveal>

          {/* Four element tiles */}
          {elements.map((e, i) => (
            <Reveal key={e.key} delay={i * 110} variant="scale">
              <Tilt className="h-full">
                <div className="glass-card group flex h-full flex-col items-center p-5 text-center">
                  <img
                    src={elementPic[e.key]}
                    alt={`${e.name} (${e.meaning})`}
                    className="aspect-[3/2] w-full max-w-[180px] object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <h3 className="mt-3 text-base font-bold text-brand-ink">
                    {e.name}{" "}
                    <span className="text-sm font-medium text-brand-blue">
                      · {e.meaning}
                    </span>
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-brand-ink/65">
                    {e.blurb}
                  </p>
                </div>
              </Tilt>
            </Reveal>
          ))}

          {/* Two wide highlight tiles */}
          <Reveal className="col-span-2" delay={120}>
            <Tilt className="h-full">
              <div className="glass-card flex h-full items-center gap-4 p-6">
                <Users className="h-9 w-9 shrink-0 text-brand-green" />
                <div>
                  <h3 className="text-lg font-bold text-brand-ink">
                    1 : 12 teacher–student ratio
                  </h3>
                  <p className="mt-1 text-sm text-brand-ink/65">
                    Small groups, real attention — every child is seen, heard and
                    challenged.
                  </p>
                </div>
              </div>
            </Tilt>
          </Reveal>

          <Reveal className="col-span-2" delay={200}>
            <Tilt className="h-full">
              <div className="glass-card flex h-full items-center gap-4 p-6">
                <ShieldCheck className="h-9 w-9 shrink-0 text-brand-blue" />
                <div>
                  <h3 className="text-lg font-bold text-brand-ink">
                    24×7 secure campus
                  </h3>
                  <p className="mt-1 text-sm text-brand-ink/65">
                    Round-the-clock CCTV and an on-campus medical cell keep
                    learning safe.
                  </p>
                </div>
              </div>
            </Tilt>
          </Reveal>
        </div>
      </Section>

      {/* ---- Results ---- */}
      <Section className="pt-0">
        <SectionHeading
          center
          eyebrow="Results 2026"
          title="Excellence, year after year"
          subtitle="Our students continue to shine in the ICSE and ISC examinations."
        />
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          {results.map((r, i) => (
            <Reveal key={r.key} delay={i * 140} variant="blur" className="group">
              <Tilt>
                <Card className="overflow-hidden p-0">
                  <div className="overflow-hidden rounded-t-3xl">
                    <img
                      src={r.key === "isc" ? img.resultIsc : img.resultIcse}
                      alt={r.label}
                      className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                      {r.grade}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-brand-ink">
                      {r.label}
                    </h3>
                  </div>
                </Card>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- CTA: one big glass panel ---- */}
      <Section className="pt-0">
        <Reveal>
          <div className="glass-card glass-sheen overflow-hidden p-10 text-center sm:p-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-black tracking-tight text-brand-ink sm:text-4xl">
              Give your child a place to grow with purpose
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-ink/70">
              Admissions are open. Visit our Satellite campus and see learning
              come alive.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/admissions"
                className="btn-blue transition-transform hover:scale-105 active:scale-95"
              >
                Start your enquiry
              </Link>
              <a
                href={school.phoneHref}
                className="btn-ghost transition-transform hover:scale-105 active:scale-95"
              >
                Call {school.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
