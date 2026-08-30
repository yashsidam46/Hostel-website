import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { HostelScene } from "../components/HostelScene";
import { useCountUp } from "../hooks/useCountUp";
import { THEME, CITIES, STATS } from "../utils/constants";

function StatCounter({ value, label, start }) {
  const n = useCountUp(value, start);
  return (
    <div className="text-center px-4">
      <div style={{ fontFamily: THEME.heading, color: "#FFFFFF", fontWeight: 700 }} className="text-3xl sm:text-4xl">{n}</div>
      <div style={{ fontFamily: THEME.body, color: "#CBD5E1", fontSize: 12 }} className="uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

export function Hero({ onSelectCity }) {
  const [query, setQuery] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setStarted(true), { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const filtered = CITIES.filter((c) => c.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="relative w-full min-h-[92vh] flex flex-col overflow-hidden">
      <HostelScene />
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center pt-10">
        <div style={{ fontFamily: THEME.body, color: "#FDEBD0", fontSize: 12 }} className="uppercase tracking-widest mb-3">
          Find · Review · Fix
        </div>
        <h1 style={{ fontFamily: THEME.heading, color: "#FFFFFF", fontWeight: 700 }} className="text-3xl sm:text-5xl max-w-2xl leading-tight mb-4">
          Government hostels, finally on the map.
        </h1>
        <p style={{ fontFamily: THEME.body, color: "#E2E8F0" }} className="max-w-md mb-8 text-sm sm:text-base">
          Thousands of students live in government hostels that don't exist on Google Maps.
          Search your city, see reviews, and help map the ones that aren't listed yet.
        </p>

        <div className="w-full max-w-md rounded-lg p-2 flex items-center gap-2 shadow-2xl" style={{ background: "#FFFFFF" }}>
          <Search size={18} color={THEME.muted} className="ml-2" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your city..."
            className="flex-1 outline-none text-sm py-2"
            style={{ fontFamily: THEME.body, color: THEME.ink }}
          />
        </div>
        {query && (
          <div className="w-full max-w-md mt-2 rounded-lg overflow-hidden shadow-xl" style={{ background: "#FFFFFF" }}>
            {filtered.length === 0 && <div className="p-3 text-sm" style={{ color: THEME.muted, fontFamily: THEME.body }}>No matching city</div>}
            {filtered.map((c) => (
              <button
                key={c}
                onClick={() => onSelectCity(c)}
                className="w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-gray-50"
                style={{ fontFamily: THEME.body, color: THEME.ink, borderTop: `1px solid ${THEME.hairline}` }}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-2 mt-5">
          {CITIES.map((c) => (
            <button
              key={c}
              onClick={() => onSelectCity(c)}
              className="px-4 py-1.5 rounded-full text-xs font-medium transition-colors"
              style={{ fontFamily: THEME.body, background: "rgba(255,255,255,0.12)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.4)" }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div ref={ref} className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 px-4" style={{ background: THEME.navyDeep }}>
        {STATS.map((s) => <StatCounter key={s.label} value={s.value} label={s.label} start={started} />)}
      </div>
    </div>
  );
}