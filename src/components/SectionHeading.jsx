export default function SectionHeading({ eyebrow, title, light = false }) {
  return (
    <div className="text-center mb-12">
      {eyebrow && (
        <p
          className={`uppercase tracking-[0.25em] text-sm font-semibold mb-2 ${
            light ? "text-(--color-mustard-light)" : "text-(--color-mustard)"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-(family-name:--font-display) text-3xl sm:text-4xl md:text-5xl star-divider ${
          light ? "text-(--color-cream)" : "text-(--color-wood-dark)"
        }`}
      >
        {title}
      </h2>
      <div className="rope-divider w-32 mx-auto mt-4" />
    </div>
  );
}
