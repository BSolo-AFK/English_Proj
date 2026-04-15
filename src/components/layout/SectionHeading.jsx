export default function SectionHeading({ eyebrow, title, text, dark = false }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p
        className={`mb-2 text-sm uppercase tracking-[0.25em] ${
          dark ? "text-emerald-300/80" : "text-emerald-700"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-semibold leading-tight md:text-4xl ${
          dark ? "text-stone-50" : "text-stone-900"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-3 text-base leading-7 md:text-lg ${
          dark ? "text-stone-300" : "text-stone-600"
        }`}
      >
        {text}
      </p>
    </div>
  );
}