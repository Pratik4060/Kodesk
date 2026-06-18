import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/images/about/main.png";
import storyImage from "@/assets/images/about/Story.png";
import communityImage from "@/assets/images/about/Community.png";
import growthOneImage from "@/assets/images/about/Growth1.png";
import growthTwoImage from "@/assets/images/about/Growth2.png";
import rajeshImage from "@/assets/images/about/Rajesh.png";
import vikramImage from "@/assets/images/about/Vikram.png";
import missionIcon from "@/assets/icons/about/mission.png";
import visionIcon from "@/assets/icons/about/Vision.png";
import innovationIcon from "@/assets/icons/about/Innovation.png";
import collaborationIcon from "@/assets/icons/about/collaboration.png";
import flexibilityIcon from "@/assets/icons/about/flexiblity.png";
import excellenceIcon from "@/assets/icons/about/excellence.png";

const stats = [
  { value: "145+", label: "Companies Working" },
  { value: "08+", label: "Years Experienced" },
  { value: "500+", label: "Total Seats" },
  { value: "95%", label: "Occupancy Rate" },
];

const values = [
  {
    icon: innovationIcon,
    title: "Innovation",
    text: "Constantly evolving our spaces and services to meet modern work demands.",
  },
  {
    icon: collaborationIcon,
    title: "Collaboration",
    text: "Building bridges between diverse industries to spark new opportunities.",
  },
  {
    icon: flexibilityIcon,
    title: "Flexibility",
    text: "Workspaces that scale with you, from hot desks to custom-built suites.",
  },
  {
    icon: excellenceIcon,
    title: "Excellence",
    text: "A relentless commitment to premium hospitality and executive service.",
  },
];

const communityPoints = [
  "Weekly industry networking mixers",
  "Premium in-house coffee & refreshments",
  "24/7 access for high-impact teams",
];

const team = [
  {
    image: rajeshImage,
    name: "Rajesh Malhotra",
    role: "Founder & Director",
    text: "Vision-driven leadership focused on innovation, community building, and workspace excellence.",
  },
  {
    image: vikramImage,
    name: "Vikram Singh",
    role: "Community Manager",
    text: "The heartbeat of Kodesk, dedicated to fostering networking and ensuring every member feels integrated into the family.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f2f2ef]">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Kodesk office interior"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/38" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_35%),linear-gradient(180deg,rgba(18,18,18,0.16),rgba(18,18,18,0.54))]" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-col items-center justify-center px-4 pb-20 pt-16 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-medium text-white/80">
            Kodesk About
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Inspiring Coworking Spaces for Modern Businesses
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/78 sm:text-base">
            Kodesk is more than just a coworking space, it&apos;s a thriving
            community built for innovators, entrepreneurs, freelancers,
            startups, and growing enterprises seeking a professional sanctuary.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-[0.9rem] bg-[#24316d] px-5 py-3 text-sm font-medium text-white shadow-[0_14px_24px_rgba(12,20,56,0.28)] transition hover:bg-[#1d2757]"
            >
              Get Started - Book a Tour
            </Link>
            <Link
              href="/pricing"
              className="rounded-[0.9rem] border border-white/45 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View Memberships
            </Link>
          </div>

          <div className="absolute bottom-8 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#1f2e6f] text-2xl leading-none text-white shadow-[0_10px_30px_rgba(0,0,0,0.32)]">
            +
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="self-center">
            <p className="text-sm text-slate-500">Our Heritage</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-slate-900">
              The Kodesk Story
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              <p>
                At Kodesk, we believe workspaces should inspire ideas rather
                than restrict them. Our journey began with a simple observation:
                the modern professional needs more than just a desk; they need
                an environment that fosters focused productivity and genuine
                connection.
              </p>
              <p>
                Located in the heart of Baner, Pune, Kodesk has evolved into a
                premier destination for businesses that refuse to compromise on
                quality. We have meticulously designed every corner of our
                facility to reflect the sophistication of our members.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="flex -space-x-3">
                <Image
                  src={rajeshImage}
                  alt="Rajesh"
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src={vikramImage}
                  alt="Vikram"
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-xs font-semibold text-white">
                  +2k
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Trusted by over 2,000+ Pune professionals
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[1.6rem] shadow-[0_20px_50px_rgba(8,12,28,0.22)]">
              <Image
                src={storyImage}
                alt="Conference room interior"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-5 rounded-[1.2rem] bg-[linear-gradient(135deg,#3555ff_0%,#ff8a24_100%)] px-6 py-5 text-white shadow-[0_18px_40px_rgba(36,49,109,0.35)]">
              <p className="text-3xl font-semibold leading-none">08+</p>
              <p className="mt-1 text-sm text-white/85">Years Experienced</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ecebea] py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium tracking-tight text-slate-900">
              Our Mission &amp; Vision
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="rounded-[1rem] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-3">
                <Image src={missionIcon} alt="" className="h-10 w-10" />
                <p className="text-sm text-slate-600">Our Mission</p>
              </div>
              <h3 className="mt-6 text-xl font-medium text-slate-900">
                Empowering Businesses Through Inspiring Workspaces
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                Our mission is to cultivate an ecosystem where businesses of all
                sizes can access world-class infrastructure and a supportive
                community that drives sustainable growth and collective
                innovation.
              </p>
            </article>

            <article className="rounded-[1rem] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-3">
                <Image src={visionIcon} alt="" className="h-10 w-10" />
                <p className="text-sm text-slate-600">Our Vision</p>
              </div>
              <h3 className="mt-6 text-xl font-medium text-slate-900">
                Redefining the Future of Workspaces
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                To be the global benchmark for professional workspaces, where
                technology, design, and hospitality converge to create a
                frictionless experience for the world&apos;s most ambitious
                teams.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-16 bg-[linear-gradient(90deg,#152153_0%,#3555ff_55%,#5d63d1_100%)] py-10 text-white">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 text-center sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-medium tracking-tight">{stat.value}</p>
                <p className="mt-2 text-sm text-white/75">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-[#5d63d1]">Our Core Pillars</p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-slate-900">
              The Values That Drive Us
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-xl border border-slate-200 bg-white px-5 py-6 text-center shadow-[0_10px_26px_rgba(15,23,42,0.03)]"
              >
                <Image src={value.icon} alt="" className="mx-auto h-16 w-16" />
                <h3 className="mt-5 text-base font-medium text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ecebea] py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="overflow-hidden rounded-[0.8rem] shadow-[0_18px_42px_rgba(15,23,42,0.12)]">
              <Image
                src={communityImage}
                alt="Private meeting room"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[0.8rem] shadow-[0_18px_42px_rgba(15,23,42,0.12)] lg:ml-14">
              <Image
                src={growthOneImage}
                alt="Workspace interior"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[0.8rem] shadow-[0_18px_42px_rgba(15,23,42,0.12)] sm:col-span-2 lg:col-span-1 xl:col-span-2 xl:w-[58%]">
              <Image
                src={growthTwoImage}
                alt="Collaborative meeting room"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="self-center">
            <h2 className="text-3xl font-medium tracking-tight text-slate-900">
              A Community Built for Growth &amp; Creativity
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">
              The Kodesk culture is defined by its vibrant energy. We aren&apos;t
              just a place to plug in; we are a destination for professional
              breakthroughs. Through curated networking events, skill-sharing
              workshops, and our signature member mixers, we ensure that every
              hour spent here adds value to your professional journey.
            </p>

            <ul className="mt-8 space-y-5">
              {communityPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#ff8a24] text-[11px] leading-none text-[#ff8a24]">
                    &#10003;
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-[#5d63d1]">The Minds Behind Kodesk</p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-slate-900">
              Meet the Visionaries
            </h2>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="mx-auto max-w-md">
                <div className="overflow-hidden rounded-[0.8rem] bg-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.09)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 text-base font-medium text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{member.role}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {member.text}
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
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#101a43]/72" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 text-center text-white sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium tracking-tight">
            A Community Built for Growth &amp; Creativity
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80">
            Schedule a free tour and see the space for yourself. Our team is
            ready to help you get set up.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-[0.9rem] bg-[#24316d] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1d2757]"
            >
              Book a Tour
            </Link>
            <Link
              href="/pricing"
              className="rounded-[0.9rem] border border-white/50 bg-white px-6 py-3 text-sm font-medium text-[#24316d] transition hover:bg-white/90"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

