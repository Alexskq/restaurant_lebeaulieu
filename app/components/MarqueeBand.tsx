import { marqueeItems } from "@/data/data";

export default function MarqueeBand() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className="overflow-hidden border-y py-4"
      style={{
        background: "var(--gold)",
        borderColor: "rgba(0,0,0,0.18)",
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 px-4 font-[family-name:var(--font-display)] italic text-[var(--dark)] font-bold"
            style={{ fontSize: "clamp(0.9rem,1.5vw,1.1rem)" }}
          >
            {item}
            <span className="text-[var(--dark)] opacity-50 not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
