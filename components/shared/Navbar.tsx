"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import serviceLogo from "@/assets/icons/navbar/Services/kodesklogo.png";
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
  const servicesActive = pathname === "/services";
  const isServiceRoute = pathname === "/services" || pathname.startsWith("/services/");
  const [showServiceStrip, setShowServiceStrip] = useState(isServiceRoute);

  useEffect(() => {
    setShowServiceStrip(isServiceRoute);
  }, [isServiceRoute]);

  const wrapperClasses = servicesActive
    ? "mx-auto flex w-full max-w-[1400px] flex-col rounded-[1.25rem] border border-white/70 bg-[rgba(255,255,255,0.96)] px-4 py-3 text-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:px-6"
    : "mx-auto flex w-full max-w-[1400px] flex-col rounded-[1rem] border border-white/20 bg-[linear-gradient(90deg,rgba(69,60,45,0.84)_0%,rgba(112,102,95,0.7)_52%,rgba(182,173,165,0.55)_100%)] px-4 py-3 text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] backdrop-blur-xl lg:px-6";

  return (
    <header className="absolute left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div className={`${wrapperClasses} ${servicesActive ? "pb-2" : ""}`}>
        <div className="flex min-h-[3.75rem] items-center justify-between gap-4 lg:min-h-[4rem]">
          <Link href="/" className="flex shrink-0 items-center">
            <span className={`flex flex-col items-start leading-none ${servicesActive ? "text-[#1f2d62]" : "text-white"}`}>
              <Image
                src={serviceLogo}
                alt="Kodesk"
                priority
                className={servicesActive ? "h-8 w-auto sm:h-9" : "h-8 w-auto sm:h-9 opacity-95"}
              />
              {servicesActive ? (
                <span className="mt-1 text-[0.38rem] font-medium tracking-[0.34em] text-slate-500 sm:text-[0.42rem]">
                  ACHIEVING SUCCESS TOGETHER
                </span>
              ) : null}
            </span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex xl:gap-10">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : item.href === "/services"
                    ? isServiceRoute
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
              const linkClass = active
                ? servicesActive
                  ? "text-[#2453f5] underline decoration-[#2453f5] decoration-2 underline-offset-8"
                  : "text-white underline decoration-white/80 decoration-2 underline-offset-8"
                : servicesActive
                  ? "text-slate-900 hover:text-[#2453f5]"
                  : "text-white/90 hover:text-white";

              if (item.href === "/services") {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      if (isServiceRoute) {
                        e.preventDefault();
                        setShowServiceStrip((current) => !current);
                      }
                    }}
                    aria-expanded={showServiceStrip}
                    className={`cursor-pointer text-[0.98rem] font-medium transition xl:text-[1rem] ${linkClass}`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[0.98rem] font-medium transition xl:text-[1rem] ${linkClass}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-[0.6rem] gradient-card px-4 py-2.5 text-sm font-medium text-white shadow-[0_12px_24px_rgba(36,49,109,0.22)] sm:px-5 sm:py-3"
          >
            Book a Tour
          </Link>
        </div>

        <div
          className={`overflow-hidden border-t transition-all duration-300 ease-out ${
            servicesActive
              ? "border-slate-200/80"
              : "border-white/15"
          } ${
            showServiceStrip
              ? "mt-0 max-h-[160px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className={showServiceStrip ? "pointer-events-auto" : "pointer-events-none"}>
            <ServiceStrip />
          </div>
        </div>

      </div>
    </header>
  );
}
