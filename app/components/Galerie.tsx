"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { galerie } from "@/data/data";

export default function Galerie() {
  const ref = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (galerie.length === 0) return null;

  return (
    <>
      <section id="galerie" ref={ref} className="py-24" style={{ background: "var(--dark)" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-[var(--gold)] mb-3">
              Photos
            </p>
            <h2
              className="font-[family-name:var(--font-display)] leading-[0.95] text-[var(--cream)]"
              style={{ fontSize: "clamp(2.8rem,5vw,4.2rem)" }}
            >
              Le <em className="text-[var(--gold)]">Beaulieu</em> en images
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[260px]">
            {galerie.map((item, i) => (
              <div
                key={i}
                className={`fade-up relative overflow-hidden rounded-lg cursor-zoom-in group ${item.span}`}
                onClick={() => setLightbox(item.src)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover brightness-[0.82] transition-all duration-500 group-hover:brightness-100 group-hover:scale-105"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-2xl bg-black/40 rounded-full w-12 h-12 flex items-center justify-center">
                    +
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-[var(--muted)] text-3xl cursor-pointer bg-transparent border-0 leading-none hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            ✕
          </button>
          <div className="relative max-w-[90vw] max-h-[88vh]">
            <Image
              src={lightbox}
              alt="Photo agrandie"
              width={1200}
              height={900}
              className="object-contain rounded-lg max-w-[90vw] max-h-[88vh]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
