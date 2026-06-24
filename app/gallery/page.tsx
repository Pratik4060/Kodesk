import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/images/our gallery/main.png";
import conferenceImage from "@/assets/images/our gallery/conference.png";
import meetingRoomImage from "@/assets/images/our gallery/meeting room.svg";
import loungeImage from "@/assets/images/our gallery/comfortable lounge.png";
import privateOfficeImage from "@/assets/images/our gallery/private office.png";
import creativeImage from "@/assets/images/our gallery/creative.png";
import workspaceImage from "@/assets/images/our gallery/Workspace.png";

const filters = [
  "All",
  "Workspace",
  "Meeting Rooms",
  "Lounge Areas",
  "Amenities",
];

const galleryItems = [
  {
    title: "Premium Conference Space",
    image: conferenceImage,
  },
  {
    title: "Bright Meeting Room",
    image: meetingRoomImage,
  },
  {
    title: "Comfortable Lounge",
    image: loungeImage,
  },
  {
    title: "Private Office",
    image: privateOfficeImage,
  },
  {
    title: "Creative Workspace",
    image: creativeImage,
  },
  {
    title: "Open Workspace",
    image: workspaceImage,
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-[#f2f2ef]">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Kodesk gallery background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.28),_transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.55),rgba(15,23,42,0.18))]" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/75">
            Our Gallery
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Take a visual tour of our premium workspace
          </h1>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/pricing"
              className="rounded-full bg-[#14275f] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(20,43,119,0.28)] transition hover:bg-[#1e3a8a]"
            >
              Get Started — Book a Tour
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              View Memberships
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                index === 0
                  ? "border-[#132169] bg-[#132169] text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-[#132169] hover:text-[#132169]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_72px_rgba(15,23,42,0.16)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
