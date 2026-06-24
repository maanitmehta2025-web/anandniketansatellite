import { Link } from "react-router-dom";
import { MapPin, Palette } from "lucide-react";
import PageHero from "../components/PageHero";
import { Section, SectionHeading, Card } from "../components/ui";
import { facilities } from "../data/content";
import { img, facilityImg } from "../data/images";

export default function CampusLife() {
  return (
    <>
      <PageHero
        eyebrow="Campus Life"
        title="Where Every Minute is a Learner's Delight"
        subtitle="Spread across four floors, our campus is built for curiosity — warm spaces, vibrant studios and room to explore, create and play."
        image={img.banners[3]}
      />

      {/* Facilities */}
      <Section>
        <SectionHeading
          eyebrow="Facilities"
          title="Spaces that inspire"
          subtitle="Every corner of the campus is designed to support learning, expression and wellbeing."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <Card key={f.key} className="group overflow-hidden p-0">
              <div className="overflow-hidden">
                <img
                  src={facilityImg[f.key]}
                  alt={f.name}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-ink">{f.name}</h3>
                <p className="mt-2 text-sm text-brand-ink/65">{f.blurb}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Excursions + Ants Studio */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <MapPin size={24} />
            </span>
            <h3 className="mt-5 text-xl font-bold text-brand-ink">
              Educational excursions
            </h3>
            <p className="mt-2 text-brand-ink/70">
              With eight field trips every year, learning regularly steps
              outside the classroom — connecting lessons to the real world and
              building independence along the way.
            </p>
          </Card>
          <Card>
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-green/20 text-brand-green">
              <Palette size={24} />
            </span>
            <h3 className="mt-5 text-xl font-bold text-brand-ink">
              Ants Studio
            </h3>
            <p className="mt-2 text-brand-ink/70">
              Our creative hub where art, design and imagination come together —
              giving students the space and freedom to make, tinker and bring
              ideas to life.
            </p>
          </Card>
        </div>
        <div className="mt-10 text-center">
          <Link to="/gallery" className="btn-blue">
            See the gallery
          </Link>
        </div>
      </Section>
    </>
  );
}
