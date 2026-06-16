import Link from "next/link";
import Image from "next/image";
import homeBackdrop from "@/assets/images/about/main.png";
import storyImage from "@/assets/images/about/Story.png";
import innovationIcon from "@/assets/icons/about/Innovation.png";
import collaborationIcon from "@/assets/icons/about/collaboration.png";

const highlights = [
  {
    title: "Premium private suites",
    description: "Quiet work zones built for focus, client calls, and deep work.",
    icon: innovationIcon,
  },
  {
    title: "Flexible memberships",
    description: "Day passes, dedicated desks, and managed offices that scale with you.",
    icon: collaborationIcon,
  },
];

export default function Home() {
  return (
    <div className="bg-[#f2f2ef]">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={homeBackdrop}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-[#f2f2ef] opacity-95" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-col justify-center px-4 pb-20 pt-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/75">
              Kodesk
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Inspiring coworking spaces for modern businesses.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Flexible work environments, polished meeting rooms, and a premium
              hospitality experience designed for founders, teams, and growing
              companies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-full bg-[#24316d] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1d2757]"
              >
                Explore About
              </Link>
              <a
                href="#highlights"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View Highlights
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="highlights"
        className="mx-auto w-full max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(10,16,40,0.06)]"
            >
              <Image src={item.icon} alt="" className="h-12 w-12" />
              <h2 className="mt-5 text-xl font-medium text-slate-900">
                {item.title}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-[#141f49] p-8 text-white shadow-[0_20px_60px_rgba(13,18,39,0.16)]">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                Shared spaces
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                A calm, elevated workspace for teams that want more than a desk.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
                From thoughtful interiors to efficient layouts, every detail is
                designed to help teams arrive, focus, and leave with momentum.
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
              <Image src={storyImage} alt="Elegant conference room" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
