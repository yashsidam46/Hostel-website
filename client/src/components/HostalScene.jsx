import { THEME } from "../utils/constants";

export function HostelScene() {
  return (
    <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3E6091" />
          <stop offset="100%" stopColor="#8FA9C4" />
        </linearGradient>
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={THEME.navy} stopOpacity="0.25" />
          <stop offset="65%" stopColor={THEME.navyDeep} stopOpacity="0.78" />
          <stop offset="100%" stopColor={THEME.navyDeep} stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#sky)" />
      <rect y="480" width="1200" height="220" fill="#5B6B58" />
      <rect x="330" y="230" width="540" height="270" fill="#EDE6D6" stroke="#2E2A22" strokeWidth="2" />
      <rect x="560" y="180" width="80" height="55" fill="#EDE6D6" stroke="#2E2A22" strokeWidth="2" />
      <polygon points="548,180 600,140 652,180" fill="#8C5A3C" stroke="#2E2A22" strokeWidth="2" />
      <rect x="585" y="380" width="30" height="120" fill="#2E2A22" />
      {[0, 1, 2, 3, 4, 5, 6].map((c) =>
        [0, 1, 2].map((r) => {
          const x = 355 + c * 70;
          if (x > 820) return null;
          return <rect key={`${c}-${r}`} x={x} y={255 + r * 70} width="34" height="42" fill="#2E5E8C" opacity="0.55" stroke="#2E2A22" strokeWidth="1" />;
        })
      )}
      <rect x="150" y="330" width="170" height="170" fill="#E3DAC4" stroke="#2E2A22" strokeWidth="2" />
      <rect x="880" y="330" width="170" height="170" fill="#E3DAC4" stroke="#2E2A22" strokeWidth="2" />
      <circle cx="100" cy="470" r="35" fill="#3F6B4A" />
      <rect x="93" y="500" width="14" height="40" fill="#4A3627" />
      <circle cx="1120" cy="465" r="30" fill="#3F6B4A" />
      <rect x="1113" y="490" width="12" height="35" fill="#4A3627" />
      <line x1="600" y1="140" x2="600" y2="105" stroke="#2E2A22" strokeWidth="3" />
      <polygon points="600,106 600,124 632,115" fill={THEME.saffron} />
      <rect width="1200" height="700" fill="url(#fade)" />
    </svg>
  );
}