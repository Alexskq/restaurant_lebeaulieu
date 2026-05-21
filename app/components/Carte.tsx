"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Carte() {
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <section id="carte" ref={ref} className="py-24" style={{ background: "var(--dark)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-[var(--gold)] mb-3">
            Notre menu
          </p>
          <h2
            className="font-[family-name:var(--font-display)] leading-[0.95] text-[var(--cream)]"
            style={{ fontSize: "clamp(2.8rem,5vw,4.2rem)" }}
          >
            La <em className="text-[var(--gold)]">Carte</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Menu image */}
          <div className="fade-up relative group">
            <div
              className="relative overflow-hidden rounded-lg"
              style={{
                border: "1px solid var(--border)",
                boxShadow: "0 32px 64px rgba(0,0,0,0.5)",
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
                className="absolute top-0 left-0 w-12 h-12"
                style={{
                  background:
                    "linear-gradient(135deg, var(--gold) 0%, transparent 60%)",
                  opacity: 0.6,
                }}
              />
            </div>
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

            {/* Services */}
            <div className="fade-up flex flex-col gap-4">
              {[
                {
                  icon: "🍽️",
                  title: "Déjeuner",
                  desc: "Du lundi au samedi — 11h30 à 14h30",
                },
                {
                  icon: "🌙",
                  title: "Dîner",
                  desc: "Vendredi & samedi — 18h30 à 21h00",
                },
                {
                  icon: "📦",
                  title: "Vente à emporter",
                  desc: "Sur commande — renseignez-vous par téléphone",
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="flex items-start gap-4 p-4 rounded-lg"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">{s.icon}</span>
                  <div>
                    <p className="font-semibold text-[var(--cream)] text-sm mb-1">
                      {s.title}
                    </p>
                    <p className="text-[var(--muted)] text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="fade-up">
              <a
                href="tel:+33327222872"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[var(--gold)] text-[var(--dark)] text-sm font-bold no-underline transition-all duration-200 hover:bg-[var(--gold2)] hover:-translate-y-px"
              >
                Réserver par téléphone
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
