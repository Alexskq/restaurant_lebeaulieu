"use client";

import { useEffect, useRef } from "react";
import {
  Leaf, ParkingCircle, Sparkles, ShoppingBag,
  Wind, Wifi, PawPrint, Accessibility,
} from "lucide-react";
import { services, paiements } from "@/data/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  "Terrasse":          <Leaf        size={22} strokeWidth={1.5} />,
  "Parking gratuit":   <ParkingCircle size={22} strokeWidth={1.5} />,
  "Événements privés": <Sparkles    size={22} strokeWidth={1.5} />,
  "Vente à emporter":  <ShoppingBag size={22} strokeWidth={1.5} />,
  "Climatisation":     <Wind        size={22} strokeWidth={1.5} />,
  "WiFi gratuit":      <Wifi        size={22} strokeWidth={1.5} />,
  "Animaux acceptés":  <PawPrint    size={22} strokeWidth={1.5} />,
  "Accessible":        <Accessibility size={22} strokeWidth={1.5} />,
};

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
            className="font-[family-name:var(--font-display-sc)] leading-[0.95] text-[var(--cream)]"
            style={{ fontSize: "clamp(2.8rem,5vw,4.2rem)" }}
          >
            Nos <span className="text-[var(--gold)]">atouts</span>
          </h2>
        </div>

        {/* Services grid — glass cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {services.map((s, i) => (
            <div
              key={s.label}
              className="fade-up group flex flex-col gap-3 p-6 rounded-xl cursor-default transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
              style={{
                background: "rgba(28,22,12,0.6)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid var(--border)",
                transitionDelay: `${i * 55}ms`,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.45)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
              }
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-[var(--gold)] transition-colors duration-300 group-hover:bg-[rgba(201,168,76,0.18)]"
                style={{
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                {ICON_MAP[s.label] ?? <Sparkles size={20} strokeWidth={1.5} />}
              </div>

              <p className="font-semibold text-[var(--cream)] text-sm leading-snug">
                {s.label}
              </p>
              <p className="text-[var(--muted)] text-xs leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div className="fade-up">
          <p className="text-[0.65rem] font-bold tracking-[0.28em] uppercase text-[var(--muted)] mb-4">
            Moyens de paiement acceptés
          </p>
          <div className="flex flex-wrap gap-2.5">
            {paiements.map((p) => (
              <span
                key={p}
                className="px-4 py-2 rounded-full text-xs font-medium text-[var(--cream)]"
                style={{
                  background: "rgba(28,22,12,0.6)",
                  backdropFilter: "blur(8px)",
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
