"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/icons/navbar/kodesklogo.png";
import { ServiceStrip } from "@/components/shared/ServiceStrip";

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
  const servicesActive = pathname === "/services" || pathname.startsWith("/services/");
  const showServiceStrip = pathname === "/services";

  return (
    <header className="absolute left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={`mx-auto flex w-full max-w-[1400px] flex-col rounded-[1.2rem] ${servicesActive ? 'border border-slate-200 bg-white' : 'border border-white/20 bg-[rgba(250,247,241,0.72)] backdrop-blur-xl'} px-5 py-3 text-slate-900 shadow-[0_10px_26px_rgba(0,0,0,0.12)] lg:px-8 ${servicesActive ? 'pb-2' : ''}`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src={logo}
              alt="Kodesk"
              priority
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : item.href === "/services"
                    ? servicesActive
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
              const linkClass = servicesActive
                ? active
                  ? "text-[#2453f5] underline decoration-[#2453f5] decoration-2 underline-offset-8"
                  : "text-slate-700 hover:text-[#2453f5]"
                : active
                  ? "text-[#2453f5] underline decoration-[#2453f5] decoration-2 underline-offset-8"
                  : "text-slate-900 hover:text-[#2453f5]";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[1.02rem] font-medium transition ${linkClass}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className={`rounded-xl px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110 ${
              servicesActive
                ? "bg-[#ff8a24] shadow-[0_10px_22px_rgba(255,138,36,0.24)]"
                : "bg-[linear-gradient(90deg,#ff8a24_0%,#5d63d1_100%)] shadow-[0_10px_22px_rgba(255,138,36,0.24)]"
            }`}
          >
            Book a Tour
          </Link>
        </div>

        {showServiceStrip ? (
          <div className="mt-0 border-t border-slate-200/80 pt-0">
            <ServiceStrip />
          </div>
        ) : null}

      </div>
    </header>
  );
}
