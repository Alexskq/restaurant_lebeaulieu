"use client";

import { useEffect, useState } from "react";
import { restaurant } from "@/data/data";

export default function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="flex md:hidden fixed bottom-0 left-0 right-0 z-[90] items-center gap-3 px-4 py-3 transition-transform duration-300"
      style={{
        background: "rgba(8,6,4,0.97)",
        backdropFilter: "blur(14px)",
        borderTop: "1px solid var(--border)",
        transform: visible ? "translateY(0)" : "translateY(100%)",
      }}
    >
      <a
        href={`tel:${restaurant.telephone}`}
        className="flex items-center justify-center px-4 py-3 rounded text-[var(--cream)] text-sm font-semibold no-underline flex-shrink-0"
        style={{
          background: "var(--card2)",
          border: "1px solid var(--border)",
        }}
      >
        Appeler
      </a>
      <a
        href="#carte"
        className="flex items-center justify-center px-4 py-3 rounded bg-[var(--gold)] text-[var(--dark)] text-sm font-bold no-underline flex-1"
      >
        Voir la carte →
      </a>
    </div>
  );
}
