"use client";

import { useEffect, useState } from "react";
import { restaurant } from "@/data/data";

const links = [
  { href: "#ambiance", label: "Le restaurant" },
  { href: "#carte", label: "La carte" },
  { href: "#services", label: "Services" },
  { href: "#horaires", label: "Horaires" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Mobile full-screen menu */}
      <div
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 transition-transform duration-[380ms] ease-[cubic-bezier(.4,0,.2,1)]"
        style={{
          background: "#080604",
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <button
          className="absolute top-5 right-5 text-[var(--muted)] text-2xl cursor-pointer bg-transparent border-0"
          onClick={() => setOpen(false)}
          aria-label="Fermer"
        >
          ✕
        </button>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-[family-name:var(--font-display)] text-4xl text-[var(--cream)] no-underline tracking-wide transition-colors duration-200 hover:text-[var(--gold)]"
          >
            {l.label}
          </a>
        ))}
        <a
          href={`tel:${restaurant.telephone}`}
          className="mt-4 px-6 py-3 border border-[var(--gold)] text-[var(--gold)] rounded text-sm font-semibold no-underline"
        >
          {restaurant.telephoneAffichage}
        </a>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? "nav-scrolled py-3.5" : "py-5"
        }`}
        style={{ borderBottom: scrolled ? undefined : "1px solid transparent" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-[family-name:var(--font-display)] text-xl tracking-widest text-[var(--cream)] no-underline uppercase"
          >
            Le <span className="text-[var(--gold)]">Beaulieu</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 list-none m-0 p-0">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[var(--muted)] text-sm font-medium no-underline transition-colors duration-200 hover:text-[var(--cream)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${restaurant.telephone}`}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded border border-[var(--gold)] text-[var(--gold)] text-sm font-semibold no-underline transition-all duration-200 hover:bg-[var(--gold)] hover:text-[var(--dark)]"
            >
              Réserver
            </a>
            <button
              className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-0 p-1"
              onClick={() => setOpen(true)}
              aria-label="Menu"
            >
              <span className="block w-6 h-px bg-[var(--cream)]" />
              <span className="block w-6 h-px bg-[var(--cream)]" />
              <span className="block w-4 h-px bg-[var(--cream)]" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
