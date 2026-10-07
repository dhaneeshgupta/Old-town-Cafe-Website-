import { NavLink } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import logo from "../assets/images/logo.png";
import signboard from "../assets/images/signboard.jpg";

// NOTE: Hero currently uses the clean logo on a themed background, since the
// video-frame photos were too blurry to use directly. Once real high-res cafe
// photos arrive, we can switch this back to <HeroCarousel /> with autoSlide
// enabled — component still exists at src/components/HeroCarousel.jsx, ready to go.

const highlights = [
  {
    icon: "🤠",
    title: "Wild West Vibes",
    desc: "Step into a saloon-inspired rooftop straight out of the frontier — rope, leather, and lantern light.",
  },
  {
    icon: "☕",
    title: "Handcrafted Brews",
    desc: "Freshly ground coffee, slow brews, and signature shakes made the way the West likes it — bold.",
  },
  {
    icon: "🌆",
    title: "Skyline Rooftop",
    desc: "Open-air seating with a city view, perfect for golden hour hangouts and starlit dinners.",
  },
];

const testimonials = [
  {
    name: "Aniket V.",
    text: "Ambiance and taste both are top notch. The rooftop vibe at sunset is unmatched in Jabalpur.",
  },
  {
    name: "Priya S.",
    text: "Loved the western theme — feels like a movie set! Coffee and snacks were great too.",
  },
  {
    name: "Rohit M.",
    text: "Perfect spot for evening hangouts. Great lighting, comfy seating, and friendly staff.",
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] w-full bg-(--color-night) wood-texture overflow-hidden">
        {/* Decorative glow background */}
        <div className="absolute inset-0 bg-gradient-to-b from-(--color-wood-dark) via-(--color-night) to-(--color-night-light)" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-(--color-mustard)/10 rounded-full blur-3xl" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <img
            src={logo}
            alt="Old Town Cafe By The Nagendra Logo"
            className="w-56 sm:w-72 md:w-80 mb-6 drop-shadow-2xl animate-fade-slide bg-(--color-cream) rounded-2xl p-4"
          />
          <p className="text-(--color-parchment) text-lg sm:text-xl mt-2 max-w-xl animate-fade-slide">
            Saddle up for the best brews and bites this side of Jabalpur.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8 animate-fade-slide">
            <NavLink
              to="/menu"
              className="bg-(--color-mustard) hover:bg-(--color-amber) text-(--color-wood-dark) font-semibold uppercase tracking-wide px-8 py-3 rounded-full shadow-lg transition-colors duration-200"
            >
              View Menu
            </NavLink>
            <NavLink
              to="/contact"
              className="border-2 border-(--color-cream) text-(--color-cream) hover:bg-(--color-cream) hover:text-(--color-wood-dark) font-semibold uppercase tracking-wide px-8 py-3 rounded-full transition-colors duration-200"
            >
              Find Us
            </NavLink>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-(--color-cream)/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* WELCOME / ABOUT STRIP */}
      <section className="bg-(--color-cream) py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading eyebrow="Welcome To" title="Old Town Cafe" />
            <p className="text-(--color-wood)/90 leading-relaxed mb-4">
              Old Town Cafe By The Nagendra brings the spirit of the Wild West
              to a rooftop perch in Jabalpur. Think rustic wood, warm lantern
              glow, rope-lined railings, and a skyline view that turns golden
              at dusk.
            </p>
            <p className="text-(--color-wood)/90 leading-relaxed mb-6">
              Whether you're here for a quiet coffee, a hearty meal, or an
              evening hangout with friends, our saloon-style hospitality
              promises good food and an even better vibe.
            </p>
            <NavLink
              to="/about"
              className="inline-block bg-(--color-saddle) hover:bg-(--color-wood) text-(--color-cream) font-semibold uppercase text-sm tracking-wide px-6 py-3 rounded-full transition-colors"
            >
              Our Story
            </NavLink>
          </div>
          <div className="relative">
            <img
              src={signboard}
              alt="Old Town Cafe signboard"
              className="rounded-lg shadow-2xl w-full h-[420px] object-cover badge-border-img"
            />
            <div className="absolute -bottom-4 -right-4 bg-(--color-mustard) text-(--color-wood-dark) font-(family-name:--font-display) text-lg px-5 py-3 rounded-lg shadow-lg rotate-3">
              Est. in the heart of Jabalpur
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-(--color-wood-dark) wood-texture py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Why Visit" title="The Saloon Experience" light />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-(--color-night)/40 border border-(--color-mustard)/30 rounded-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-(family-name:--font-display) text-(--color-mustard-light) text-2xl mb-3">
                  {item.title}
                </h3>
                <p className="text-(--color-parchment)/80 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-(--color-parchment) py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="What Folks Say" title="Tales From The Town" />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-(--color-cream) rounded-xl p-8 shadow-md border-l-4 border-(--color-mustard)"
              >
                <p className="text-(--color-wood)/90 italic leading-relaxed mb-4">
                  "{t.text}"
                </p>
                <p className="font-(family-name:--font-display) text-(--color-saddle)">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-(--color-saddle) py-16 px-6 text-center">
        <h2 className="font-(family-name:--font-display) text-(--color-cream) text-3xl sm:text-4xl mb-4">
          Ready To Ride In?
        </h2>
        <p className="text-(--color-parchment)/90 mb-8 max-w-xl mx-auto">
          Round up your posse and head to the rooftop for an evening you won't forget.
        </p>
        <NavLink
          to="/contact"
          className="inline-block bg-(--color-mustard) hover:bg-(--color-amber) text-(--color-wood-dark) font-semibold uppercase tracking-wide px-8 py-3 rounded-full shadow-lg transition-colors"
        >
          Get Directions
        </NavLink>
      </section>
    </div>
  );
}
