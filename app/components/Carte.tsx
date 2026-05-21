"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { UtensilsCrossed, Moon, ShoppingBag, ZoomIn, X } from "lucide-react";

const services = [
  {
    icon: <UtensilsCrossed size={18} strokeWidth={1.5} />,
    title: "Déjeuner",
    desc: "Du lundi au samedi — 11h30 à 14h30",
  },
  {
    icon: <Moon size={18} strokeWidth={1.5} />,
    title: "Dîner",
    desc: "Vendredi & samedi — 18h30 à 21h00",
  },
  {
    icon: <ShoppingBag size={18} strokeWidth={1.5} />,
    title: "Vente à emporter",
    desc: "Sur commande — renseignez-vous par téléphone",
  },
];

export default function Carte() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <section id="carte" ref={ref} className="py-24" style={{ background: "var(--dark)" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 fade-up">
            <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-[var(--gold)] mb-3">
              Notre menu
            </p>
            <h2
              className="font-[family-name:var(--font-display-sc)] leading-[0.95] text-[var(--cream)]"
              style={{ fontSize: "clamp(2.8rem,5vw,4.2rem)" }}
            >
              La Carte
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Menu image — clickable */}
            <div className="fade-up relative group">
              <button
                onClick={() => setOpen(true)}
                className="w-full text-left cursor-zoom-in relative rounded-lg overflow-hidden border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-[var(--gold)] focus-visible:outline-offset-3"
                aria-label="Agrandir la carte"
                style={{
                  border: "1px solid var(--border)",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.5)",
                  borderRadius: "0.5rem",
                }}
              >
                <Image
                  src="/photos/menu.jpg"
                  alt="Carte du Beaulieu"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gold corner accent */}
                <div
                  className="absolute top-0 left-0 w-12 h-12 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, var(--gold) 0%, transparent 60%)",
                    opacity: 0.6,
                  }}
                />
                {/* Zoom hint overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)" }}>
                    <ZoomIn size={16} strokeWidth={2} />
                    Voir en grand
                  </div>
                </div>
              </button>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-8">
              <div className="fade-up">
                <p className="text-[var(--muted)] leading-[1.8] mb-6" style={{ fontSize: "0.97rem" }}>
                  Notre chef compose chaque jour une carte courte et soignée, autour
                  des produits frais du marché. Entrées, plats, desserts maison —
                  une cuisine française sincère, sans prétention inutile.
                </p>
              </div>

              {/* Service cards */}
              <div className="fade-up flex flex-col gap-3">
                {services.map((s) => (
                  <div
                    key={s.title}
                    className="flex items-start gap-4 p-4 rounded-lg"
                    style={{
                      background: "rgba(22,18,9,0.8)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-[var(--gold)]"
                      style={{
                        background: "rgba(201,168,76,0.1)",
                        border: "1px solid rgba(201,168,76,0.2)",
                      }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--cream)] text-sm mb-1">{s.title}</p>
                      <p className="text-[var(--muted)] text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="fade-up">
                <a
                  href="tel:+33327222872"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[var(--gold)] text-[var(--dark)] text-sm font-bold no-underline transition-all duration-200 hover:bg-[var(--gold2)] hover:-translate-y-px cursor-pointer"
                >
                  Réserver par téléphone
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(6px)" }}
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-4 right-5 flex items-center gap-1.5 text-[var(--muted)] text-sm hover:text-white transition-colors cursor-pointer bg-transparent border-0"
            onClick={() => setOpen(false)}
            aria-label="Fermer"
          >
            <X size={20} strokeWidth={1.5} />
            <span className="text-xs tracking-widest uppercase">Fermer</span>
          </button>

          <div
            className="relative max-w-[92vw] max-h-[90vh] overflow-auto rounded-lg"
            style={{ border: "1px solid var(--border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/photos/menu.jpg"
              alt="Carte du Beaulieu — vue agrandie"
              width={1200}
              height={1600}
              className="w-auto h-auto max-w-[88vw] max-h-[86vh] object-contain"
              priority
            />
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[var(--muted)] text-xs tracking-widest uppercase">
            Cliquez en dehors pour fermer · Échap
          </p>
        </div>
      )}
    </>
  );
}
