import { ShieldCheck, MapPin, Star } from "lucide-react";
import { THEME } from "../utils/constants";

export function VerifyBadge({ verified }) {
  return verified ? (
    <span
      className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold"
      style={{ background: "#E6F4EA", color: THEME.green, fontFamily: THEME.body }}
    >
      <ShieldCheck size={13} /> Verified
    </span>
  ) : (
    <span
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold animate-pulse"
      style={{ background: "#FDF1E3", color: THEME.gold, fontFamily: THEME.body }}
    >
      <MapPin size={13} /> Unverified — help map it
    </span>
  );
}

export function StatusChip({ status }) {
  const map = {
    open: { c: THEME.alert, l: "Open" },
    "in-review": { c: THEME.gold, l: "In review" },
    resolved: { c: THEME.green, l: "Resolved" },
  };
  const s = map[status];
  return (
    <span
      className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded"
      style={{ color: "#FFFFFF", background: s.c, fontFamily: THEME.body }}
    >
      {s.l}
    </span>
  );
}

export function RatingLine({ rating, big }) {
  if (!rating) return <span style={{ color: THEME.muted, fontFamily: THEME.body, fontSize: 12 }}>Not rated yet</span>;
  return (
    <div className="flex items-center gap-3 flex-wrap" style={{ fontFamily: THEME.body, fontSize: big ? 14 : 12 }}>
      <span className="flex items-center gap-1 font-bold" style={{ color: THEME.gold }}>
        <Star size={big ? 16 : 13} fill={THEME.gold} color={THEME.gold} /> {rating.overall.toFixed(1)}
      </span>
      <span style={{ color: THEME.muted }}>food {rating.food.toFixed(1)}</span>
      <span style={{ color: THEME.muted }}>clean {rating.cleanliness.toFixed(1)}</span>
      <span style={{ color: THEME.muted }}>facilities {rating.facilities.toFixed(1)}</span>
    </div>
  );
}

export function StarPicker({ value, onChange }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button key={n} type="button" onClick={() => onChange(n)} className="transition-transform hover:scale-125">
          <Star size={20} fill={n <= value ? THEME.gold : "none"} color={n <= value ? THEME.gold : THEME.hairline} />
        </button>
      ))}
    </div>
  );
}

export function Card({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-left w-full p-5 rounded-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
      style={{ background: "#FFFFFF", border: `1px solid ${THEME.hairline}` }}
    >
      {children}
    </button>
  );
}