import { useState } from "react";
import { ArrowLeft, MapPin, Star, MessageSquare, Send, ThumbsUp, ShieldCheck } from "lucide-react";
import { VerifyBadge, RatingLine, StatusChip, StarPicker } from "../components/UIBadges";
import { THEME } from "../utils/constants";

export function DetailScreen({ hostel, onBack }) {
  const [tab, setTab] = useState("overview");
  const [complaintText, setComplaintText] = useState("");
  const [category, setCategory] = useState("Food");
  const [submitted, setSubmitted] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [localReviews, setLocalReviews] = useState(hostel.reviews);
  const [helpful, setHelpful] = useState({});

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "reviews", label: `Reviews (${localReviews.length})` },
    { id: "complaints", label: `Complaints (${hostel.complaints.length})` },
  ];

  const submitReview = () => {
    if (!reviewText.trim() || reviewRating === 0) return;
    setLocalReviews([{ user: "You", rating: reviewRating, comment: reviewText, helpful: 0 }, ...localReviews]);
    setReviewText("");
    setReviewRating(0);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
      <button onClick={onBack} className="flex items-center gap-1 mb-5 text-sm transition-opacity hover:opacity-70" style={{ color: THEME.navy, fontFamily: THEME.body, fontWeight: 600 }}>
        <ArrowLeft size={14} /> back to list
      </button>

      <div className="rounded-lg overflow-hidden mb-6" style={{ border: `1px solid ${THEME.hairline}` }}>
        <div className="h-36 relative" style={{ background: `linear-gradient(120deg, ${THEME.navy}, ${THEME.navyDeep})` }}>
          <div className="absolute inset-0 flex items-end p-5">
            <div>
              <h1 style={{ fontFamily: THEME.heading, color: "#FFFFFF", fontWeight: 700 }} className="text-xl">{hostel.name}</h1>
              <div style={{ color: "#CBD5E1", fontFamily: THEME.body, fontSize: 12 }} className="flex items-center gap-1 mt-1">
                <MapPin size={13} /> {hostel.address}
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4"><VerifyBadge verified={hostel.verified} /></div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        <div className="p-4 rounded-lg" style={{ background: "#FFFFFF", border: `1px solid ${THEME.hairline}` }}>
          <div style={{ color: THEME.muted, fontFamily: THEME.body, fontSize: 10 }} className="uppercase tracking-wider mb-1">Warden on record</div>
          <div style={{ fontFamily: THEME.heading, color: THEME.ink, fontWeight: 600 }} className="text-sm">{hostel.warden}</div>
        </div>
        <div className="p-4 rounded-lg flex items-center" style={{ background: "#FFFFFF", border: `1px solid ${THEME.hairline}` }}>
          <RatingLine rating={hostel.rating} big />
        </div>
      </div>

      <div className="w-full h-36 rounded-lg mb-6 flex items-center justify-center" style={{ border: `1px dashed ${THEME.hairline}`, color: THEME.muted, fontFamily: THEME.body, fontSize: 12, background: "#FFFFFF" }}>
        map preview — Leaflet pin renders here in production
      </div>

      <div className="flex gap-5 mb-5" style={{ borderBottom: `2px solid ${THEME.hairline}` }}>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="pb-2 text-sm transition-colors"
            style={{
              fontFamily: THEME.body,
              fontWeight: 600,
              color: tab === t.id ? THEME.navy : THEME.muted,
              borderBottom: tab === t.id ? `3px solid ${THEME.navy}` : "3px solid transparent",
              marginBottom: "-2px",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "overview" && (
        <p style={{ color: THEME.ink, fontFamily: THEME.body, fontSize: 14 }}>
          {hostel.verified
            ? "A resident has confirmed this hostel's location, so it's live on the map. Reviews and complaints below reflect real student input."
            : "This hostel exists, but nobody has confirmed its exact location yet. If you live here, use the map above to help us pin it for everyone else."}
        </p>
      )}

      {tab === "reviews" && (
        <div className="flex flex-col gap-3">
          <div className="p-4 mb-1 rounded-lg" style={{ background: "#FFFFFF", border: `1px dashed ${THEME.hairline}` }}>
            <div style={{ fontFamily: THEME.body, color: THEME.ink, fontWeight: 700, fontSize: 12 }} className="mb-2 uppercase tracking-wider">Add your review</div>
            <StarPicker value={reviewRating} onChange={setReviewRating} />
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Food, cleanliness, facilities — how is it really?"
              rows={2}
              className="w-full p-2 mt-2 text-sm rounded resize-none"
              style={{ border: `1px solid ${THEME.hairline}`, fontFamily: THEME.body, color: THEME.ink }}
            />
            <button
              onClick={submitReview}
              className="mt-2 px-4 py-1.5 text-sm font-semibold rounded transition-transform active:scale-95"
              style={{ background: THEME.navy, color: "#FFFFFF", fontFamily: THEME.body }}
            >
              Post review
            </button>
          </div>
          {localReviews.map((r, i) => (
            <div key={i} className="p-4 rounded-lg" style={{ background: "#FFFFFF", border: `1px solid ${THEME.hairline}` }}>
              <div className="flex items-center justify-between mb-1">
                <span style={{ fontFamily: THEME.heading, color: THEME.ink, fontWeight: 600, fontSize: 13 }}>{r.user}</span>
                <span className="flex items-center gap-1" style={{ fontFamily: THEME.body, fontSize: 12, color: THEME.gold }}>
                  <Star size={12} fill={THEME.gold} color={THEME.gold} /> {r.rating}
                </span>
              </div>
              <p style={{ color: THEME.ink, fontFamily: THEME.body, fontSize: 14 }} className="mb-2">{r.comment}</p>
              <button onClick={() => setHelpful((h) => ({ ...h, [i]: (h[i] ?? r.helpful) + 1 }))} className="flex items-center gap-1 text-xs transition-colors" style={{ color: THEME.muted, fontFamily: THEME.body }}>
                <ThumbsUp size={12} /> Helpful ({helpful[i] ?? r.helpful})
              </button>
            </div>
          ))}
        </div>
      )}

      {tab === "complaints" && (
        <div>
          <div className="flex flex-col gap-3 mb-6">
            {hostel.complaints.length === 0 && <p style={{ color: THEME.muted, fontFamily: THEME.body, fontSize: 13 }}>No complaints on record.</p>}
            {hostel.complaints.map((c, i) => (
              <div key={i} className="p-4 rounded-lg" style={{ background: "#FFFFFF", border: `1px solid ${THEME.hairline}` }}>
                <div className="flex items-center justify-between mb-1">
                  <span style={{ fontFamily: THEME.body, fontSize: 11, color: THEME.muted }} className="uppercase tracking-wider font-bold">{c.category}</span>
                  <StatusChip status={c.status} />
                </div>
                <p style={{ color: THEME.ink, fontFamily: THEME.body, fontSize: 14 }}>{c.description}</p>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-lg" style={{ background: "#FFFFFF", border: `1px solid ${THEME.hairline}` }}>
            <div style={{ fontFamily: THEME.heading, color: THEME.ink, fontWeight: 600 }} className="text-sm mb-3 flex items-center gap-2">
              <MessageSquare size={15} /> File a complaint
            </div>
            {submitted ? (
              <div className="flex items-center gap-3 px-3 py-2 rounded" style={{ background: "#E6F4EA" }}>
                <ShieldCheck size={16} color={THEME.green} />
                <span style={{ color: THEME.green, fontFamily: THEME.body, fontSize: 13, fontWeight: 600 }}>Submitted — logged just now.</span>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 text-sm rounded" style={{ border: `1px solid ${THEME.hairline}`, fontFamily: THEME.body, color: THEME.ink }}>
                  <option>Food</option>
                  <option>Cleanliness</option>
                  <option>Facilities</option>
                  <option>Other</option>
                </select>
                <textarea
                  value={complaintText}
                  onChange={(e) => setComplaintText(e.target.value)}
                  placeholder="Describe the issue..."
                  rows={3}
                  className="p-2 text-sm rounded resize-none"
                  style={{ border: `1px solid ${THEME.hairline}`, fontFamily: THEME.body, color: THEME.ink }}
                />
                <button
                  onClick={() => complaintText.trim() && setSubmitted(true)}
                  className="self-start flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded transition-transform active:scale-95"
                  style={{ background: THEME.alert, color: "#FFFFFF", fontFamily: THEME.body }}
                >
                  <Send size={13} /> Submit
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}