// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Text logo for now */}
        <Link href="/" className="text-lg font-bold tracking-wide text-primary">
          Royal&nbsp;Aqua
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav */}
        <nav className="hidden gap-6 md:flex">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav className="md:hidden">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-t px-4 py-3 text-sm font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
