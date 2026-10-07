import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import signboard from "../assets/images/signboard.jpg";
import logo from "../assets/images/logo.png";

// NOTE: Gallery is light on photos right now — the only sharp image available
// is the entrance signboard shot. Once real high-res Instagram/cafe photos
// arrive, add them here the same way `signboard` is added below.
const galleryImages = [
  { src: signboard, alt: "Old Town Cafe entrance signboard" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="pt-20">
      <section className="bg-(--color-wood-dark) wood-texture py-20 px-6 text-center">
        <p className="text-(--color-mustard-light) uppercase tracking-[0.3em] text-sm mb-3">
          A Peek Inside
        </p>
        <h1 className="font-(family-name:--font-display) text-(--color-cream) text-4xl sm:text-5xl">
          Gallery
        </h1>
      </section>

      <section className="bg-(--color-cream) py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Snapshots" title="Moments At The Saloon" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(img)}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-(--color-mustard)"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-(--color-wood-dark)/0 group-hover:bg-(--color-wood-dark)/30 transition-colors duration-300" />
              </button>
            ))}

            {/* Coming soon placeholder cards */}
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={`placeholder-${n}`}
                className="aspect-square rounded-lg bg-(--color-parchment) border-2 border-dashed border-(--color-mustard)/40 flex flex-col items-center justify-center gap-2 p-4"
              >
                <img src={logo} alt="" className="w-10 h-10 object-contain opacity-50" />
                <span className="text-(--color-wood)/50 text-xs text-center uppercase tracking-wide">
                  More Photos Coming Soon
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-(--color-wood)/60 text-sm mt-8">
            * Full gallery to be updated with the cafe's official high-resolution photos.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-(--color-night)/90 z-[100] flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-(--color-cream) text-3xl hover:text-(--color-mustard-light)"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-h-[85vh] max-w-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
