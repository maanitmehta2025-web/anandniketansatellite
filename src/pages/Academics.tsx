import { GraduationCap, Lightbulb, BookOpen } from "lucide-react";
import PageHero from "../components/PageHero";
import { Section, SectionHeading, Card } from "../components/ui";
import { academics, methodology } from "../data/content";
import { img, elementImg } from "../data/images";

export default function Academics() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Where Learning Becomes Exciting"
        subtitle="A dynamic, integrated curriculum that grows with your child — from the first wonder-filled years of primary school to focused, future-ready higher-secondary streams."
        image={img.banners[2]}
      />

      {/* Stages */}
      <Section>
        <SectionHeading
          eyebrow="The journey"
          title="Curriculum at every stage"
          subtitle="Our ICSE and ISC programmes are designed to deepen understanding, not just deliver content."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {academics.map((a) => (
            <Card key={a.title}>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <GraduationCap size={24} />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand-green">
                {a.grades}
              </p>
              <h3 className="mt-1 text-xl font-bold text-brand-ink">
                {a.title}
              </h3>
              <p className="mt-2 text-brand-ink/70">{a.blurb}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Methodology */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Methodology"
              title="A conversation, not a fixed track"
              subtitle="Our teaching isn't a rigid path to a fixed destination — it's a living dialogue that adapts to how children genuinely learn."
            />
            <div className="mt-8 space-y-5">
              {methodology.map((m) => (
                <div key={m.stage} className="glass-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                    {m.stage} · {m.grades}
                  </p>
                  <p className="mt-2 text-brand-ink/75">{m.blurb}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card overflow-hidden p-2">
            <img
              src={elementImg.vaayu}
              alt="Students learning at Anand Niketan"
              className="h-96 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Innovative teaching */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-brand-blue text-white">
            <Lightbulb size={28} />
            <h3 className="mt-4 text-2xl font-bold">Innovative teaching</h3>
            <p className="mt-3 text-white/85">
              Lessons are rooted in real-life contexts, encouraging students to
              build skills and follow their interests while developing
              responsibility and critical thinking — often a little beyond their
              comfort zone, where real growth happens.
            </p>
          </Card>
          <Card className="bg-brand-green text-brand-ink">
            <BookOpen size={28} />
            <h3 className="mt-4 text-2xl font-bold">Learning beyond books</h3>
            <p className="mt-3 text-brand-ink/80">
              Sport, art, debate and theatre sit alongside academics — because a
              complete education shapes the whole child, not just an exam score.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
