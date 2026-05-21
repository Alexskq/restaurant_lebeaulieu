"use client";

import Image from "next/image";
import { restaurant } from "@/data/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with ken-burns zoom */}
      <div className="absolute inset-0 hero-bg-img">
        <Image
          src="/photos/restaurant.png"
          alt="Le Beaulieu intérieur"
          fill
          priority
          className="object-cover brightness-[0.28]"
          sizes="100vw"
        />
      </div>

      {/* Warm gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,11,8,0.92) 0%, rgba(201,168,76,0.04) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-28">
        {/* Eyebrow */}
        <p className="hero-eyebrow flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.35em] uppercase text-[var(--muted)] mb-6">
          <span className="block w-7 h-px bg-[var(--gold)] flex-shrink-0" />
          Valenciennes — Cuisine Française
        </p>

        {/* Title — line-by-line reveal */}
        <h1
          className="font-[family-name:var(--font-display)] leading-[0.88] mb-0"
          style={{ fontSize: "clamp(3.8rem,11vw,9rem)" }}
        >
          <span className="hero-line-wrap">
            <span className="hero-line-inner text-[var(--cream)]">Le</span>
          </span>
          <span className="hero-line-wrap">
            <span
              className="hero-line-inner italic"
              style={{ color: "var(--gold)" }}
            >
              Beaulieu
            </span>
          </span>
        </h1>

        {/* Gold divider */}
        <div className="hero-accent-line mt-6 mb-5" />

        {/* Tag */}
        <p
          className="hero-tag font-[family-name:var(--font-display)] italic text-[var(--gold2)]"
          style={{ fontSize: "clamp(1.1rem,2.5vw,1.6rem)" }}
        >
          {restaurant.slogan}
        </p>

        {/* Description */}
        <p
          className="hero-desc text-[rgba(240,232,212,0.6)] leading-[1.78] max-w-[460px] mt-4 mb-8"
          style={{ fontSize: "0.97rem" }}
        >
          {restaurant.description}
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex gap-4 flex-wrap">
          <a
            href={`tel:${restaurant.telephone}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-[var(--gold)] text-[var(--dark)] text-sm font-bold no-underline transition-all duration-200 hover:bg-[var(--gold2)] hover:-translate-y-px"
          >
            Réserver une table
          </a>
          <a
            href="#carte"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded border border-[var(--border)] text-[var(--cream)] text-sm font-semibold no-underline transition-all duration-200 hover:border-[var(--cream)]"
          >
            Voir la carte
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll text-[var(--muted)] text-[0.62rem] tracking-[0.28em] flex flex-col items-center">
        DÉFILER
      </div>
    </section>
  );
}
