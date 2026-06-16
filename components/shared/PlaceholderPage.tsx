import Link from "next/link";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PlaceholderPageProps) {
  return (
    <section className="bg-[#f2f2ef] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#5d63d1]">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={primaryHref}
            className="rounded-full bg-[#24316d] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1d2757]"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
