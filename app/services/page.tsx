import Image from "next/image";
import Link from "next/link";
import { services, servicesOverview } from "@/data/services";

const ctaImage = services.find((service) => service.slug === "managed-office")
  ?.image;

const showcaseOrder = [
  { slug: "coworking-space", title: "Coworking Space" },
  { slug: "managed-office", title: "Managed Office" },
  { slug: "flexible-seating", title: "Flexible Seating" },
  { slug: "dedicated-desk", title: "Dedicated Desk" },
  { slug: "meeting-room", title: "Meeting Room / Conference Room" },
  { slug: "event-space", title: "Event Space" },
  { slug: "virtual-office", title: "Virtual Office" },
  { slug: "podcast-studio", title: "Podcast Studio" },
  { slug: "day-pass", title: "Day Pass" },
  { slug: "private-cabin", title: "Private Cabin" },
] as const;

type ShowcaseCard = (typeof services)[number] & { title: string };

const showcaseCards = showcaseOrder.reduce<ShowcaseCard[]>((acc, entry) => {
  const service = services.find((item) => item.slug === entry.slug);

  if (!service) {
    return acc;
  }

  acc.push({
    ...service,
    title: entry.title,
  });

  return acc;
}, []);

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M7 17L17 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <section className="bg-[#faf7f1] px-3 pb-0 pt-0 sm:px-4">
      <div className="w-full ">
        <div className="overflow-hidden ">
          <div className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[630px]">
            <Image
              src={servicesOverview.image}
              alt="Kodesk services hero"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.24),_transparent_34%),linear-gradient(180deg,rgba(16,21,36,0.26),rgba(16,21,36,0.38))]" />

            <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
              <div className="max-w-4xl">
                <p className="text-xs font-medium text-white/82 sm:text-sm">
                  Kodesk Service
                </p>
                <h1 className="mt-3 text-[2.55rem] font-light tracking-[-0.03em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.28)] sm:text-[3.4rem] lg:text-[4.15rem]">
                  Premium Workspace Services
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-[0.95rem] leading-7 text-white/86 drop-shadow-[0_1px_1px_rgba(0,0,0,0.24)] sm:text-[1rem]">
                  Everything your business needs, from flexible desks to fully
                  managed private offices and beyond.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              aria-label="Book a Tour"
              className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/45 bg-[#18306f] text-white shadow-[0_12px_26px_rgba(16,24,40,0.22)] transition hover:scale-105 hover:bg-[#203a85] sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
            >
              <span className="sr-only">Book a Tour</span>
              <span className="text-2xl leading-none">+</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center sm:mt-16">
          <p className="text-[0.95rem] font-medium tracking-[0.01em] text-[#111a3d] sm:text-[1.05rem]">
            Our Services
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-8 text-slate-600 sm:text-base">
            Ten carefully crafted workspace options from drop-in day passes to
            fully managed offices designed to grow with your business.
          </p>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="mx-auto flex w-fit flex-col items-center gap-2">
            <p className="text-sm text-slate-500">Choose the Right Workspace for You</p>
            <div className="h-px w-56 bg-[linear-gradient(90deg,transparent,rgba(17,26,61,0.35),rgba(255,138,36,0.55),transparent)]" />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {showcaseCards.map((service, index) => {
              const bubbleClass =
                index % 3 === 0
                  ? "bg-[#ff8a24]"
                  : index % 3 === 1
                    ? "bg-[#1f2d62]"
                    : "bg-[#ff8a24]";

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  aria-label={service.title}
                  className="group relative overflow-visible rounded-[1.55rem]"
                >
                  <div className="relative aspect-[1.53/1] overflow-hidden rounded-[1.55rem] bg-transparent">
                    <Image
                      src={service.galleryImage}
                      alt={service.label}
                      fill
                      className="object-contain p-0 transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center">
                      <h3 className="mx-auto max-w-[16ch] text-[1rem] font-medium leading-tight text-[#17234f] drop-shadow-[0_1px_1px_rgba(255,255,255,0.72)] sm:text-[1.08rem]">
                        {service.title}
                      </h3>
                    </div>
                    <span
                      className={`absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-[0_10px_18px_rgba(15,23,42,0.18)] transition group-hover:scale-105 ${bubbleClass} sm:bottom-2 sm:right-2`}
                    >
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <section className="mt-20 sm:mt-24">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={ctaImage ?? servicesOverview.image}
              alt=""
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0f1a43]/50" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,26,67,0.05),rgba(15,26,67,0.35))]" />
          </div>

          <div className="relative px-6 py-14 text-center text-white sm:px-10 sm:py-20">
            <h2 className="text-2xl font-light tracking-tight sm:text-[2.15rem]">
              Discover a Workspace That Fits Your Business
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/84 sm:text-base">
              Book a free tour and our workspace consultants will help you find
              the perfect solution for your team.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-[0.6rem] bg-[#1f2d62] px-8 py-3 text-sm font-medium text-white shadow-[0_10px_18px_rgba(12,18,42,0.2)] transition hover:bg-[#172554]"
              >
                Book a Tour
              </Link>
              <Link
                href="/pricing"
                className="rounded-[0.6rem] border border-white/60 bg-white px-8 py-3 text-sm font-medium text-[#1f2d62] shadow-[0_10px_18px_rgba(12,18,42,0.12)] transition hover:bg-white/90"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
