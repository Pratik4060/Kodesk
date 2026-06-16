"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-[1.2rem] border border-white/20 bg-[linear-gradient(180deg,rgba(97,91,91,0.82),rgba(71,66,66,0.78))] px-4 py-3 text-white shadow-[0_12px_34px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:px-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-[0.25em]">
            <span className="text-[#ff8a24]">K</span>ODESK
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition hover:text-white ${
                  active ? "text-white" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/about"
          className="rounded-full bg-[linear-gradient(90deg,#5d63d1_0%,#ff8a24_100%)] px-4 py-2 text-sm font-medium text-white shadow-[0_10px_20px_rgba(63,74,184,0.3)] transition hover:brightness-110"
        >
          Book a Tour
        </Link>
      </div>
    </header>
  );
}
