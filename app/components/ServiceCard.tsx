import type React from "react";

export default function ServiceCard({
  title,
  icon,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20">
      <div className="flex items-start gap-4">
        <div className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#061A33] border border-white/10 text-[#60A5FA]">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {description ? (
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

