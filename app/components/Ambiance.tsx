"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { restaurant } from "@/data/data";

export default function Ambiance() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.15 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="ambiance"
      ref={ref}
      className="py-24"
      style={{ background: "var(--card)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="fade-up">
              <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-[var(--gold)] mb-3">
                Le restaurant
              </p>
              <h2
                className="font-[family-name:var(--font-display)] leading-[0.95] text-[var(--cream)] mb-6"
                style={{ fontSize: "clamp(2.8rem,5vw,4.2rem)" }}
              >
                Un lieu,
                <br />
                <em className="text-[var(--gold)]">une cuisine</em>
              </h2>
            </div>

            <p
              className="fade-up text-[var(--muted)] leading-[1.8] mb-5"
              style={{ fontSize: "0.97rem" }}
            >
              {restaurant.description}
            </p>

            <p
              className="fade-up text-[var(--muted)] leading-[1.8] mb-8"
              style={{ fontSize: "0.97rem" }}
            >
              Que ce soit pour un déjeuner d'affaires, un dîner romantique ou un
              événement privé, notre équipe met tout en œuvre pour que chaque
              moment passé au Beaulieu reste un souvenir inoubliable.
            </p>

            <div className="fade-up flex flex-col gap-4">
              {[
                { label: "Cuisine", val: "Française de tradition" },
                { label: "Ambiance", val: "Chaleureuse & raffinée" },
                { label: "Adresse", val: restaurant.adresse },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 pb-4"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <span className="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[var(--gold)] pt-0.5 min-w-[80px]">
                    {item.label}
                  </span>
                  <span className="text-[var(--cream)] text-sm">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="fade-up relative">
            <div
              className="relative overflow-hidden rounded-lg"
              style={{
                border: "1px solid var(--border)",
                aspectRatio: "4/5",
              }}
            >
              <Image
                src="/photos/restaurant.png"
                alt="Salle du Beaulieu"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,11,8,0.5) 0%, transparent 60%)",
                }}
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -left-5 flex flex-col items-center justify-center w-24 h-24 rounded-full"
              style={{
                background: "var(--gold)",
                border: "3px solid var(--dark)",
              }}
            >
              <span
                className="font-[family-name:var(--font-display)] font-bold text-[var(--dark)] leading-none"
                style={{ fontSize: "1.6rem" }}
              >
                BL
              </span>
              <span className="text-[0.52rem] font-bold tracking-widest text-[var(--dark)] uppercase">
                Valenciennes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
