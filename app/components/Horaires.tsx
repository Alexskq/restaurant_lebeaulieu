"use client";

import { useEffect, useRef } from "react";
import { horaires } from "@/data/data";

export default function Horaires() {
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
    <section id="horaires" ref={ref} className="py-24" style={{ background: "var(--card)" }}>
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-[var(--gold)] mb-3">
            Quand nous trouver
          </p>
          <h2
            className="font-[family-name:var(--font-display)] leading-[0.95] text-[var(--cream)]"
            style={{ fontSize: "clamp(2.8rem,5vw,4.2rem)" }}
          >
            Horaires <em className="text-[var(--gold)]">d'ouverture</em>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {horaires.map((h, i) => (
            <div
              key={h.jour}
              className="fade-up flex items-center justify-between gap-4 p-5 rounded-xl"
              style={{
                background: "var(--card2)",
                border: `1px solid ${h.ouvert ? "var(--border)" : "var(--border)"}`,
                transitionDelay: `${i * 80}ms`,
                opacity: h.ouvert ? 1 : 0.5,
              }}
            >
              <div className="flex items-center gap-4">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: h.ouvert ? "var(--gold)" : "var(--muted)" }}
                />
                <div>
                  <p className="font-semibold text-[var(--cream)] text-sm">{h.jour}</p>
                  <p className="text-[var(--muted)] text-xs mt-0.5">{h.service}</p>
                </div>
              </div>
              <p
                className="text-right text-sm font-semibold whitespace-pre-line"
                style={{ color: h.ouvert ? "var(--gold)" : "var(--muted)" }}
              >
                {h.heures.replace(" · ", "\n")}
              </p>
            </div>
          ))}
        </div>

        <p className="fade-up text-center text-[var(--muted)] text-xs mt-8 leading-relaxed">
          Réservation recommandée pour les dîners du vendredi et samedi.
          <br />
          Contactez-nous au{" "}
          <a href="tel:+33327222872" className="text-[var(--gold)] hover:underline">
            03 27 22 28 72
          </a>
        </p>
      </div>
    </section>
  );
}
