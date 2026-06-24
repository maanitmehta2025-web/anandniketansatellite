import { Check, Quote } from "lucide-react";
import PageHero from "../components/PageHero";
import { Section, SectionHeading, Card } from "../components/ui";
import { aims, figures } from "../data/content";
import { img, elementImg } from "../data/images";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A place to grow individuality"
        subtitle="Founded to help young learners flourish in a cognitive, socially aware setting — Anand Niketan has become a name synonymous with educational excellence in Ahmedabad."
        image={img.banners[1]}
      />

      {/* Vision */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="glass-card overflow-hidden p-2">
            <img
              src={elementImg.prithvi}
              alt="Anand Niketan campus life"
              className="h-80 w-full rounded-2xl object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our vision"
              title="Individuality, for the good of society"
            />
            <p className="mt-4 text-lg italic text-brand-ink/75">
              “To create a place where every individual can develop their
              individuality in a socially responsible way — for the benefit of
              society.”
            </p>
            <p className="mt-4 text-brand-ink/70">
              We draw on the wisdom of educational thinkers Sri Aurobindo,
              Gijubhai Badheka and J. Krishnamurti, blending global teaching
              approaches with traditional Indian values. Having completed its
              first decade in 2015, the school continues to set the standard for
              student-centred education.
            </p>
          </div>
        </div>
      </Section>

      {/* Aims */}
      <Section>
        <SectionHeading
          eyebrow="What we set out to do"
          title="Our aims"
          subtitle="Everything we do is anchored to a clear set of commitments to each learner."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {aims.map((a) => (
            <div
              key={a}
              className="glass-card flex items-start gap-3 p-5"
            >
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-green/20 text-brand-green">
                <Check size={16} />
              </span>
              <p className="text-brand-ink/80">{a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Philosophy */}
      <Section>
        <SectionHeading
          eyebrow="Our roots"
          title="Wisdom that guides us"
          subtitle="Three educational visionaries shape how we think about childhood, learning and growth."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {figures.map((f) => (
            <Card key={f.name}>
              <Quote className="text-brand-blue" size={28} />
              <p className="mt-4 italic text-brand-ink/75">{f.quote}</p>
              <p className="mt-5 font-semibold text-brand-ink">— {f.name}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
