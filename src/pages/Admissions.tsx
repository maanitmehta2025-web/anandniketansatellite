import { Briefcase, Mail, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import { Section, SectionHeading, Card } from "../components/ui";
import { admissionSteps, school } from "../data/content";
import { img } from "../data/images";

export default function Admissions() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Join the Anand Niketan family"
        subtitle="We'd love to welcome your child. Here's how admission works — simple, warm and built around getting to know your family."
        image={img.banners[0]}
      />

      {/* Steps */}
      <Section>
        <SectionHeading
          center
          eyebrow="The process"
          title="Four simple steps"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {admissionSteps.map((s) => (
            <Card key={s.step} className="relative">
              <span className="text-4xl font-extrabold text-brand-blue/15">
                {s.step}
              </span>
              <h3 className="mt-2 text-lg font-bold text-brand-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-brand-ink/65">{s.blurb}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Enquiry CTA */}
      <Section>
        <div className="grid items-center gap-10 rounded-3xl bg-brand-blue p-8 text-white shadow-glass sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Ready to take the first step?</h2>
            <p className="mt-3 text-white/85">
              Reach out and our admissions team will guide you through seat
              availability, documents and a campus visit.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a href={`mailto:${school.email}`} className="btn-green">
              <Mail size={16} /> Email us
            </a>
            <a href={school.phoneHref} className="btn-outline">
              <Phone size={16} /> {school.phone}
            </a>
          </div>
        </div>
      </Section>

      {/* Careers */}
      <Section>
        <Card className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-green/20 text-brand-green">
            <Briefcase size={26} />
          </span>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-brand-ink">
              Careers at Anand Niketan
            </h3>
            <p className="mt-2 text-brand-ink/70">
              We're always looking for passionate educators who believe in
              student-centred learning. Share your CV at{" "}
              <a
                href={`mailto:${school.email}`}
                className="font-semibold text-brand-blue"
              >
                {school.email}
              </a>
              .
            </p>
          </div>
        </Card>
      </Section>
    </>
  );
}
