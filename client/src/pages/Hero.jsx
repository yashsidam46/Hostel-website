import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { HostelScene } from "../components/HostelScene";
import { useCountUp } from "../hooks/useCountUp";
import { THEME, CITIES, STATS } from "../utils/constants";

function StatCounter({ value, label, start }) {
  const n = useCountUp(value, start);
  return (
    <div className="text-center px-6 py-2">
      <div
        style={{ fontFamily: THEME.heading, color: "#FFFFFF" }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight"
      >
        {n}
      </div>
      <div
        style={{ fontFamily: THEME.body, color: "#CBD5E1" }}
        className="text-xs md:text-sm uppercase tracking-widest font-semibold mt-2"
      >
        {label}
      </div>
    </div>
  );
}

export function Hero({ onSelectCity }) {
  const [query, setQuery] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setStarted(true), {
      threshold: 0.3,
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const filtered = CITIES.filter((c) => c.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="relative w-full min-h-[90vh] flex flex-col justify-between overflow-hidden">
      <HostelScene />

      {/* Center Content Section */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center py-16 max-w-5xl mx-auto w-full">
        <div
          style={{ fontFamily: THEME.body, color: "#FDEBD0" }}
          className="uppercase tracking-[0.25em] font-semibold text-xs md:text-sm mb-4 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm"
        >
          Find · Review · Fix
        </div>

        <h1
          style={{ fontFamily: THEME.heading, color: "#FFFFFF" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] max-w-4xl mb-6 drop-shadow-sm"
        >
          Government hostels, <br className="hidden sm:inline" />
          finally on the map.
        </h1>

        <p
          style={{ fontFamily: THEME.body, color: "#E2E8F0" }}
          className="max-w-2xl mb-10 text-base sm:text-lg md:text-xl leading-relaxed text-slate-200 drop-shadow"
        >
          Thousands of students live in government hostels that don't exist on Google Maps.
          Search your city, see reviews, and help map the unlisted ones.
        </p>

        {/* Scaled Search Input */}
        <div className="w-full max-w-xl relative">
          <div
            className="w-full rounded-xl p-2.5 sm:p-3 flex items-center gap-3 shadow-2xl transition-all focus-within:ring-4 focus-within:ring-blue-400/40"
            style={{ background: "#FFFFFF" }}
          >
            <Search size={22} color={THEME.muted} className="ml-3 flex-shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search your city (e.g. Nagpur, Pune)..."
              className="flex-1 outline-none text-base sm:text-lg py-1.5 bg-transparent"
              style={{ fontFamily: THEME.body, color: THEME.ink }}
            />
          </div>

          {/* Autocomplete Dropdown */}
          {query && (
            <div
              className="absolute left-0 right-0 top-full mt-2 rounded-xl overflow-hidden shadow-2xl z-20"
              style={{ background: "#FFFFFF" }}
            >
              {filtered.length === 0 && (
                <div className="p-4 text-sm text-gray-500" style={{ fontFamily: THEME.body }}>
                  No matching city found
                </div>
              )}
              {filtered.map((c) => (
                <button
                  key={c}
                  onClick={() => onSelectCity(c)}
                  className="w-full text-left px-5 py-3.5 text-base font-medium transition-colors hover:bg-slate-100 flex items-center justify-between"
                  style={{ fontFamily: THEME.body, color: THEME.ink, borderTop: `1px solid ${THEME.hairline}` }}
                >
                  <span>{c}</span>
                  <span className="text-xs text-blue-600 font-semibold uppercase">View Hostels →</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quick Select Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-7">
          {CITIES.map((c) => (
            <button
              key={c}
              onClick={() => onSelectCity(c)}
              className="px-6 py-2 rounded-full text-sm font-medium transition-all hover:bg-white/25 hover:scale-105 backdrop-blur-sm"
              style={{
                fontFamily: THEME.body,
                background: "rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
                border: "1px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Full-width Stats Strip */}
      <div ref={ref} style={{ background: THEME.navyDeep }} className="relative z-10 py-10 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <StatCounter key={s.label} value={s.value} label={s.label} start={started} />
          ))}
        </div>
      </div>
    </div>
  );
}