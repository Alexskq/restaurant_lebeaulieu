"use client";

import { useEffect, useRef } from "react";
import { restaurant } from "@/data/data";

export default function Contact() {
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

  const contactItems = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      ),
      label: "Adresse",
      value: restaurant.adresse,
      href: restaurant.mapsLink,
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.82-.82a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      ),
      label: "Téléphone",
      value: restaurant.telephoneAffichage,
      href: `tel:${restaurant.telephone}`,
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      ),
      label: "Email",
      value: restaurant.email,
      href: `mailto:${restaurant.email}`,
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      ),
      label: "Instagram",
      value: restaurant.instagram,
      href: restaurant.instagramUrl,
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24" style={{ background: "var(--dark)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="fade-up mb-10">
              <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-[var(--gold)] mb-3">
                Venir nous voir
              </p>
              <h2
                className="font-[family-name:var(--font-display-sc)] leading-[0.95] text-[var(--cream)]"
                style={{ fontSize: "clamp(2.8rem,5vw,4.2rem)" }}
              >
                Nous <em className="text-[var(--gold)]">trouver</em>
              </h2>
            </div>

            <div className="fade-up flex flex-col gap-5 mb-8">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 text-[var(--gold)]"
                    style={{
                      background: "rgba(201,168,76,0.1)",
                      border: "1px solid rgba(201,168,76,0.25)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--muted)] mb-1">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[var(--cream)] text-sm font-medium no-underline transition-colors duration-200 hover:text-[var(--gold)]"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social buttons */}
            <div className="fade-up flex gap-3 flex-wrap">
              <a
                href={restaurant.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-[var(--cream)] text-sm font-semibold no-underline transition-all duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)]"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                Instagram
              </a>
              <a
                href={restaurant.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-[var(--cream)] text-sm font-semibold no-underline transition-all duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)]"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                Facebook
              </a>
              <a
                href={`tel:${restaurant.telephone}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-[var(--gold)] text-sm font-semibold no-underline transition-all duration-200 hover:bg-[var(--gold)] hover:text-[var(--dark)]"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.35)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.82-.82a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Appeler
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="fade-up">
            <div
              className="rounded-xl overflow-hidden"
              style={{
                border: "1px solid var(--border)",
                height: "420px",
              }}
            >
              <iframe
                src={restaurant.mapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Le Beaulieu — Valenciennes"
                className="map-iframe"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
