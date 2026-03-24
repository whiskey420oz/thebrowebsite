type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  const wrap =
    align === "center"
      ? "mx-auto max-w-2xl text-center"
      : "max-w-2xl text-left";

  return (
    <div className={wrap}>
      {eyebrow ? (
        <div
          className={
            align === "center"
              ? "mx-auto flex max-w-max items-center justify-center gap-3"
              : "inline-flex items-center gap-3"
          }
        >
          {align === "left" ? (
            <span
              className="h-px w-10 shrink-0 bg-gradient-to-r from-sky-400 to-transparent"
              aria-hidden
            />
          ) : null}
          <div className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-sky-400/95">
            {eyebrow}
          </div>
          {align === "center" ? (
            <span
              className="hidden h-px w-10 shrink-0 bg-gradient-to-l from-sky-400 to-transparent sm:block"
              aria-hidden
            />
          ) : null}
        </div>
      ) : null}
      <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
