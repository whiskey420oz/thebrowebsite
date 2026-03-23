type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <div className="text-xs font-semibold tracking-widest text-[#60A5FA] uppercase">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-white/70 leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}

