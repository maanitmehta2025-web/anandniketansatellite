import PageHero from "../components/PageHero";
import { Section, SectionHeading, Card } from "../components/ui";
import { studentBoard } from "../data/content";
import { img } from "../data/images";

export default function StudentBoard() {
  return (
    <>
      <PageHero
        eyebrow="Student Board"
        title="Everything students need to thrive"
        subtitle="Clear expectations, fair assessment and the everyday rituals that make school life run smoothly and joyfully."
        image={img.banners[1]}
      />

      <Section>
        <SectionHeading
          eyebrow="Student handbook"
          title="Life at school, at a glance"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studentBoard.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-bold text-brand-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-ink/65">{item.blurb}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="glass-card overflow-hidden p-2">
            <img
              src={img.resultIcse}
              alt="ICSE results 2026"
              className="h-80 w-full rounded-2xl object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Achievements"
              title="Celebrating every success"
              subtitle="From board results to the sports field and the stage, we recognise effort and excellence in all its forms — because every child's growth deserves to be seen."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
