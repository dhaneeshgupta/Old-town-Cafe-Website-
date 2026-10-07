import { useState, useEffect, useCallback } from "react";

export default function HeroCarousel({ images, interval = 4000, autoSlide = true }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!autoSlide || images.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval, autoSlide, images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-(--color-night)/70 via-(--color-night)/30 to-(--color-night)/80" />

      {/* Dot indicators - only shown when there are multiple images and sliding is relevant */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === current
                  ? "w-8 bg-(--color-mustard)"
                  : "w-2.5 bg-(--color-cream)/50 hover:bg-(--color-cream)/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
