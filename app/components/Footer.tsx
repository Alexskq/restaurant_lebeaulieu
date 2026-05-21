import { restaurant } from "@/data/data";

const navLinks = [
  { href: "#ambiance", label: "Le restaurant" },
  { href: "#carte", label: "La carte" },
  { href: "#services", label: "Services" },
  { href: "#horaires", label: "Horaires" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="pt-14 pb-7"
      style={{
        background: "#080604",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-[280px]">
            <a
              href="#hero"
              className="font-[family-name:var(--font-display)] text-2xl tracking-widest text-[var(--cream)] no-underline uppercase block mb-2"
            >
              Le <span className="text-[var(--gold)]">Beaulieu</span>
            </a>
            <p className="text-[var(--muted)] text-sm italic mb-4">
              L'art de recevoir — Valenciennes
            </p>
            <p className="text-[var(--muted)] text-xs leading-relaxed">
              {restaurant.adresse}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[var(--cream)] mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[var(--muted)] text-sm no-underline transition-colors duration-200 hover:text-[var(--cream)]"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[var(--cream)] mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={`tel:${restaurant.telephone}`}
                className="text-[var(--muted)] text-sm no-underline hover:text-[var(--cream)] transition-colors"
              >
                {restaurant.telephoneAffichage}
              </a>
              <a
                href={`mailto:${restaurant.email}`}
                className="text-[var(--muted)] text-sm no-underline hover:text-[var(--cream)] transition-colors"
              >
                {restaurant.email}
              </a>
              <a
                href={restaurant.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] text-sm no-underline hover:text-[var(--cream)] transition-colors"
              >
                {restaurant.instagram}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-wrap items-center justify-between gap-4 pt-5"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-[var(--muted)] text-xs">
            © {year} Le Beaulieu — Valenciennes. Tous droits réservés.
          </p>
          <p className="text-[var(--muted)] text-xs">
            Site réalisé par{" "}
            <strong className="text-[var(--cream)]">Alexandre Zoonekynd</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
