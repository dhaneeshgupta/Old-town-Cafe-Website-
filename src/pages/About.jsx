import SectionHeading from "../components/SectionHeading";
import signboard from "../assets/images/signboard.jpg";
import logo from "../assets/images/logo.png";

export default function About() {
  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="bg-(--color-wood-dark) wood-texture py-20 px-6 text-center">
        <p className="text-(--color-mustard-light) uppercase tracking-[0.3em] text-sm mb-3">
          Our Story
        </p>
        <h1 className="font-(family-name:--font-display) text-(--color-cream) text-4xl sm:text-5xl">
          About Old Town Cafe
        </h1>
      </section>

      {/* Story */}
      <section className="bg-(--color-cream) py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
          <img
            src={signboard}
            alt="Old Town Cafe entrance signboard"
            className="rounded-lg shadow-xl w-full h-[380px] object-cover"
          />
          <div>
            <SectionHeading eyebrow="How It Started" title="A Frontier Tale" />
            <p className="text-(--color-wood)/90 leading-relaxed mb-4">
              Old Town Cafe By The Nagendra was born from a simple idea —
              bring the rugged charm of the Wild West to a rooftop in
              Jabalpur. From the crossed-revolver emblem to the rope-lined
              railings, every detail nods to frontier-town nostalgia.
            </p>
            <p className="text-(--color-wood)/90 leading-relaxed">
              What started as a passion project has become a favorite hangout
              spot for coffee lovers, foodies, and anyone chasing a golden-hour
              view with character.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 bg-(--color-wood-dark) wood-texture rounded-lg shadow-xl w-full h-[380px] flex items-center justify-center">
            <img
              src={logo}
              alt="Old Town Cafe Logo"
              className="w-48 bg-(--color-cream) rounded-xl p-3"
            />
          </div>
          <div className="md:order-1">
            <SectionHeading eyebrow="The Vibe" title="Saloon Meets Skyline" />
            <p className="text-(--color-wood)/90 leading-relaxed mb-4">
              Draped canopies, warm lantern light, and palms swaying against
              the city skyline — our rooftop is designed for long evenings
              and good conversation. As dusk turns to night, the whole space
              glows amber, just like the old western towns of legend.
            </p>
            <p className="text-(--color-wood)/90 leading-relaxed">
              Inside, cozy booth seating and rustic decor keep the frontier
              spirit alive, rain or shine.
            </p>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="bg-(--color-parchment) py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="What We Stand For" title="Our Promise" />
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { title: "Quality First", desc: "Fresh ingredients, carefully brewed coffee, every single time." },
              { title: "Warm Hospitality", desc: "Every guest is treated like family at the saloon." },
              { title: "Unforgettable Vibe", desc: "A theme and view you won't find anywhere else in town." },
            ].map((v) => (
              <div key={v.title} className="bg-(--color-cream) rounded-xl p-8 shadow-md">
                <h3 className="font-(family-name:--font-display) text-(--color-saddle) text-2xl mb-3">
                  {v.title}
                </h3>
                <p className="text-(--color-wood)/80 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing banner */}
      <section className="relative h-[320px] w-full bg-(--color-night) wood-texture flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-(--color-wood-dark) via-(--color-night) to-(--color-night-light)" />
        <h2 className="relative z-10 font-(family-name:--font-display) text-(--color-cream) text-3xl sm:text-4xl max-w-2xl text-center px-6">
          Come for the coffee, stay for the story.
        </h2>
      </section>
    </div>
  );
}
