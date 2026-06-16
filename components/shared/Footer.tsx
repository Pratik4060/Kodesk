import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Day pass",
  "Coworking Space",
  "Managed Office",
  "Flexible Seating",
  "Dedicated Desk",
  "Meeting Room",
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "WhatsApp", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
];

function SocialGlyph({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (label === "WhatsApp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          d="M12 4.5a7.5 7.5 0 0 0-6.4 11.4L4.5 20l4.2-1.1A7.5 7.5 0 1 0 12 4.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9.6 9.1c.2-.4.4-.4.7-.4h.6c.2 0 .5.1.6.5l.7 1.6c.1.3.1.5 0 .7l-.5.6a7.7 7.7 0 0 0 2.5 2.5l.6-.5c.2-.1.4-.1.7 0l1.6.7c.4.1.5.4.5.6v.6c0 .3 0 .5-.4.7-.4.2-1.2.3-2.2 0-2.2-.6-4.8-3.2-5.4-5.4-.3-1-.2-1.8 0-2.2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="1.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M13.5 19v-5h1.8l.3-2.1h-2.1V10c0-.6.2-1 .9-1h1.2V7.1c-.2 0-.9-.1-1.8-.1-1.8 0-3 1-3 2.9v2h-2V14h2v5h2.7Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.5 10v6M8.5 8.3V8.2M10.8 10v6M10.8 13.1c0-1.4.9-2.6 2.4-2.6 1.3 0 2.2.9 2.2 2.5V16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#152153] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-sm">
            <p className="text-2xl font-semibold tracking-[0.22em]">
              <span className="text-[#ff8a24]">K</span>ODESK
            </p>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/78">
              Premium coworking spaces designed for modern professionals and
              innovative teams.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium">Quick Links</h2>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium">Services</h2>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              {services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium">Contact Us</h2>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li>
                <Link className="transition hover:text-white" href="/contact">
                  Support call
                </Link>
              </li>
              <li>Privacy policy</li>
              <li>Terms of service</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-y border-white/20 py-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-semibold tracking-[0.22em]">
                <span className="text-[#ff8a24]">K</span>ODESK
              </p>
              <p className="mt-1 text-xs tracking-[0.24em] text-white/55">
                enhancing business together
              </p>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-white/65 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <SocialGlyph label={item.label} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="py-5 text-center text-sm text-white/80">
          &copy; 2026 Zonixtec IT Services Private Limited. All rights reserved.
        </p>
      </div>
      <div className="h-1 bg-[linear-gradient(90deg,#24316d_0%,#24316d_25%,#5d63d1_55%,#ff8a24_100%)]" />
    </footer>
  );
}
