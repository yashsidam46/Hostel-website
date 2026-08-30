import { ArrowLeft, MapPin } from "lucide-react";
import { Card, VerifyBadge, RatingLine } from "../components/UIBadges";
import { THEME, HOSTELS } from "../utils/constants";

export function ListScreen({ city, onBack, onOpen }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
      <button onClick={onBack} className="flex items-center gap-1 mb-5 text-sm transition-opacity hover:opacity-70" style={{ color: THEME.navy, fontFamily: THEME.body, fontWeight: 600 }}>
        <ArrowLeft size={14} /> all cities
      </button>
      <h1 style={{ fontFamily: THEME.heading, color: THEME.ink, fontWeight: 700 }} className="text-2xl mb-6">
        {city} <span style={{ color: THEME.gold }}>·</span> hostels
      </h1>
      <div className="flex flex-col gap-4">
        {HOSTELS[city]?.map((h) => (
          <Card key={h.id} onClick={() => onOpen(h)}>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div style={{ fontFamily: THEME.heading, color: THEME.ink, fontWeight: 600 }} className="text-base mb-1">{h.name}</div>
                <div style={{ color: THEME.muted, fontFamily: THEME.body, fontSize: 12 }} className="mb-2 flex items-center gap-1">
                  <MapPin size={12} /> {h.address}
                </div>
                <RatingLine rating={h.rating} />
              </div>
              <div className="flex flex-col items-end gap-2">
                <VerifyBadge verified={h.verified} />
                {h.openComplaints > 0 && (
                  <span style={{ color: THEME.alert, fontFamily: THEME.body, fontSize: 11 }} className="font-semibold">
                    {h.openComplaints} open complaint{h.openComplaints > 1 ? "s" : ""}
                  </span>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}