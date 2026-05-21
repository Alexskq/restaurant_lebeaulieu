"use client";

import { useEffect, useRef } from "react";
import { services, paiements } from "@/data/data";

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="py-24" style={{ background: "var(--card)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-[var(--gold)] mb-3">
            Confort & prestations
          </p>
          <h2
            className="font-[family-name:var(--font-display)] leading-[0.95] text-[var(--cream)]"
            style={{ fontSize: "clamp(2.8rem,5vw,4.2rem)" }}
          >
            Nos <em className="text-[var(--gold)]">atouts</em>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {services.map((s, i) => (
            <div
              key={s.label}
              className="fade-up flex flex-col gap-3 p-6 rounded-xl transition-all duration-300 cursor-default hover:-translate-y-1"
              style={{
                background: "var(--card2)",
                border: "1px solid var(--border)",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <span className="text-3xl">{s.icon}</span>
              <p className="font-semibold text-[var(--cream)] text-sm">{s.label}</p>
              <p className="text-[var(--muted)] text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div className="fade-up">
          <p className="text-[0.68rem] font-bold tracking-[0.25em] uppercase text-[var(--muted)] mb-4">
            Moyens de paiement acceptés
          </p>
          <div className="flex flex-wrap gap-3">
            {paiements.map((p) => (
              <span
                key={p}
                className="px-4 py-2 rounded-full text-xs font-medium text-[var(--cream)]"
                style={{
                  background: "var(--card2)",
                  border: "1px solid var(--border)",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
