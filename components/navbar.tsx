"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import CTAButton from "./cta-button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="top-0 left-0 w-full">
      <div className="xl:px-24 px-5 md:px-10 py-6 grid md:grid-cols-3 items-center">
        <Image src="/logo.png" className="cursor-pointer" alt="logo" width={60} height={60} onClick={() => router.replace("/")} />

        {/* Desktop Nav */}
        <nav className="hidden justify-center lg:flex space-x-8 text-lg text-neutral-800">
          {navItems.map((item) => (
            <div className="flex items-center">
              {pathname === item.href && <div className="w-1.5 h-1.5 bg-red-900 mr-2" />}

              <Link
                key={item.href}
                href={item.href}
                className={`hover:opacity-60 ${pathname === item.href && "font-semibold text-red-900"}`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="col-start-3 ml-auto flex gap-5 items-center">
          <CTAButton text="Get a Quote" onClick={() => router.push("/contact")} />

          {/* Mobile Menu Button */}
          <button className="lg:hidden col-start-3 ml-auto bg-red-900 w-10 h-10 rounded-md cursor-pointer" onClick={() => setOpen(true)}>
            <Menu color="white" className="mx-auto" />
          </button>
        </div>
      </div>

      {/* Mobile Side Nav */}
      {open && (
        <div className="ease-in fixed inset-0 bg-black/40 z-50 lg:hidden" onClick={() => setOpen(false)}>
          <div
            className="absolute top-0 right-0 w-full max-w-xs h-full bg-white shadow-xl p-10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="mb-10 flex justify-end cursor-pointer" onClick={() => setOpen(false)}>
              <X />
            </button>

            <nav className="flex flex-col space-y-10 text-2xl text-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`${pathname === item.href ? "underline underline-offset-10" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
