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

  const wrapperClasses = servicesActive
    ? "mx-auto flex w-full max-w-[1400px] flex-col rounded-[1.5rem] border border-slate-200/80 bg-white px-5 py-4 text-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.12)] lg:px-8"
    : "mx-auto flex w-full max-w-[1400px] flex-col rounded-[1.2rem] border border-white/20 bg-[rgba(250,247,241,0.72)] px-5 py-3 text-slate-900 shadow-[0_10px_26px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:px-8";

  return (
    <header className="absolute left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div className={`${wrapperClasses} ${servicesActive ? "pb-2" : ""}`}>
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
              const linkClass = active
                ? "text-[#2453f5] underline decoration-[#2453f5] decoration-2 underline-offset-8"
                : servicesActive
                  ? "text-slate-700 hover:text-[#2453f5]"
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
  className="
    inline-flex items-center justify-center
    rounded-xl
    bg-[linear-gradient(90deg,#3F51B5_0%,#F28C28_50%,#3F51B5_100%)]
    bg-[length:200%_100%]
    animate-gradient
    px-7 py-3
    text-white
    font-medium
    shadow-lg
  "
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
