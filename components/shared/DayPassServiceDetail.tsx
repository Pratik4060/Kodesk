import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import communityImage from "@/assets/images/about/Community.png";
import dayPassImage from "@/assets/images/Services/DayPass.png";
import { services } from "@/data/services";

const benefits = [
  "Full access to shared workspace for one day",
  "High-speed Wi-Fi and power access at every seat",
  "Complimentary tea, coffee, and pantry service",
  "Access to printing and scanning services",
  "Common area and lounge access throughout the day",
  "No membership or registration required",
];

const audience = [
  "Out-of-town business travellers",
  "Professionals evaluating a long-term membership",
  "Remote workers needing an occasional office day",
  "Students and researchers needing a focused space",
  "Entrepreneurs attending meetings nearby",
];

const inclusions = [
  {
    title: "Walk-In Available",
    copy: "No advance booking required - subject to seat availability",
  },
  {
    title: "Full Amenity Access",
    copy: "Use everything from the printer to the terrace lounge",
  },
  {
    title: "Discounted Meeting Rooms",
    copy: "Day-pass holders get 20% off meeting room bookings",
  },
  {
    title: "Complimentary Beverages",
    copy: "Unlimited tea, coffee, and filtered water all day",
  },
  {
    title: "Guest Wi-Fi",
    copy: "Fast and secure internet on the day-pass guest network",
  },
  {
    title: "Pay at Reception",
    copy: "Simple cash, card, or UPI payment at the front desk",
  },
];

const otherServices = ["event-space", "podcast-studio", "private-cabin"] as const;

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-[0.98rem] leading-7 text-slate-700">
      <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full border border-[#f3bc8b] bg-[#fff5ea]" />
      <span>{children}</span>
    </li>
  );
}

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

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        d="M12 5v14M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DayPassServiceDetail() {
  return (
    <div className="bg-[#f5f3ee]">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={dayPassImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_34%,rgba(79,119,255,0.48),transparent_34%),radial-gradient(circle_at_86%_34%,rgba(255,161,63,0.34),transparent_26%),linear-gradient(90deg,rgba(16,27,74,0.62)_0%,rgba(56,94,212,0.18)_42%,rgba(255,145,41,0.46)_100%)]" />
          <div className="absolute inset-0 bg-black/6" />
        </div>

        <div className="relative mx-auto min-h-[560px] max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:min-h-[680px] lg:px-8 lg:pt-32">

          <div className="mt-10 max-w-2xl text-white sm:mt-12">
            <p className="text-sm font-medium text-white/88">Kodesk Service</p>
            <h1 className="mt-3 text-5xl font-semibold tracking-[-0.05em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] sm:text-6xl lg:text-[4.6rem]">
              Day Pass
            </h1>
            <p className="mt-6 max-w-xl text-[0.98rem] leading-8 text-white/84 sm:text-[1.05rem]">
              One-day access to the full Kodesk workspace, perfect for
              occasional visits, client days, or a focused change of scenery.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-[0.8rem] border border-white/35 bg-[#152153]/80 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_24px_rgba(10,16,40,0.18)] transition hover:bg-[#152153]"
            >
              Get Started - Book a Tour
            </Link>
          </div>

          <Link
            href="/contact"
            aria-label="Book a Tour"
            className="absolute bottom-8 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/45 bg-[#17306f] text-white shadow-[0_12px_28px_rgba(9,14,35,0.28)] transition hover:scale-105 hover:bg-[#2142a0] sm:bottom-9 sm:right-8 sm:h-14 sm:w-14"
          >
            <PlusIcon />
          </Link>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <article>
              <p className="text-sm font-medium text-slate-500">Service Overview</p>
              <h2 className="mt-8 text-2xl font-medium tracking-tight text-slate-900 sm:text-[1.7rem]">
                What is Day Pass?
              </h2>
              <p className="mt-5 max-w-2xl text-[0.98rem] leading-8 text-slate-700">
                The Kodesk Day Pass is the easiest way to experience the
                workspace without a commitment. Walk in on any working day,
                pick a seat, and enjoy the full range of amenities for a
                productive day outside your home or hotel.
              </p>

              <div className="mt-9">
                <h3 className="text-lg font-medium text-slate-900">Key Benefits</h3>
                <ul className="mt-5 space-y-4">
                  {benefits.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </div>
            </article>

            <aside className="lg:pt-8">
              <div className="overflow-hidden rounded-[1.75rem] bg-[linear-gradient(160deg,#8d5cc6_0%,#5c65d8_46%,#ff8b22_100%)] p-6 text-white shadow-[0_20px_50px_rgba(52,62,145,0.22)] sm:p-7">
                <h3 className="text-[1.15rem] font-medium">Who Is This For ?</h3>
                <ul className="mt-6 space-y-4 text-[0.96rem] leading-7 text-white/88">
                  {audience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-[0.75rem] border border-white/25 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
                >
                  Enquire Now
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#e8e8e5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-medium text-[#2e53f4]">What&apos;s Included</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-900 sm:text-[2.1rem]">
            Features & Inclusions
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {inclusions.map((item) => (
              <article
                key={item.title}
                className="rounded-[1rem] border border-white/70 bg-white px-5 py-8 text-slate-900 shadow-[0_12px_30px_rgba(10,16,40,0.05)]"
              >
                <h3 className="text-[1rem] font-medium tracking-tight">{item.title}</h3>
                <div className="mx-auto mt-3 h-px w-32 bg-[linear-gradient(90deg,transparent,rgba(45,83,244,0.62),transparent)]" />
                <p className="mx-auto mt-5 max-w-[18ch] text-sm leading-7 text-slate-500">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={communityImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          
        </div>

        <div className="relative px-4 py-14 text-center text-white sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-2xl font-light tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)] sm:text-[2.15rem]">
            Ready to Experience Day Pass?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white sm:text-base">
            Schedule a free tour and see the space for yourself. Our team is
            ready to help you get set up.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-[0.6rem] bg-[#18265c] px-8 py-3 text-sm font-medium text-white shadow-[0_10px_18px_rgba(12,18,42,0.22)] transition hover:bg-[#111c48]"
            >
              Book a Tour
            </Link>
            <Link
              href="/pricing"
              className="rounded-[0.6rem] border border-white/70 bg-white px-8 py-3 text-sm font-medium text-[#18265c] shadow-[0_10px_18px_rgba(12,18,42,0.14)] transition hover:bg-white/92"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-medium text-[#2e53f4]">Explore More</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-900 sm:text-[2.05rem]">
              Other Services You May Like
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {otherServices.map((slug) => {
              const service = services.find((item) => item.slug === slug);

              if (!service) {
                return null;
              }

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative overflow-visible rounded-[1.65rem]"
                >
                  <div className="relative aspect-[1.42/1] overflow-hidden ">
                    <Image
                      src={service.galleryImage}
                      alt={service.label}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-0 transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center">
                      <h3 className="mx-auto max-w-[14ch] text-[1.05rem] font-medium tracking-tight text-[#152153] drop-shadow-[0_1px_1px_rgba(255,255,255,0.75)]">
                        {service.label}
                      </h3>
                    </div>
                    <span className="absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#2453f5] text-white  transition group-hover:scale-105">
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>


        </div>
      </section>
    </div>
  );
}
