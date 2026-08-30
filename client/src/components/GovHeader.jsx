import { ShieldCheck, Menu } from "lucide-react";
import { THEME } from "../utils/constants";

export function GovHeader({ onHome }) {
  return (
    <header className="sticky top-0 z-30">
      <div className="h-1.5 w-full flex">
        <div className="flex-1" style={{ background: THEME.saffron }} />
        <div className="flex-1" style={{ background: "#FFFFFF" }} />
        <div className="flex-1" style={{ background: THEME.green }} />
      </div>
      <div style={{ background: THEME.navy }} className="flex items-center justify-between px-4 sm:px-8 py-2.5">
        <button onClick={onHome} className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#FFFFFF" }}>
            <ShieldCheck size={18} color={THEME.navy} />
          </div>
          <div className="text-left">
            <div style={{ fontFamily: THEME.body, color: "#DCE6F2", fontSize: 10 }}>सामाजिक न्याय व विशेष सहाय्य विभाग</div>
            <div style={{ fontFamily: THEME.heading, color: "#FFFFFF", fontSize: 13, fontWeight: 600 }}>Hostel Registry · Govt. of Maharashtra</div>
          </div>
        </button>
        <div className="hidden sm:flex items-center gap-6" style={{ fontFamily: THEME.body, color: "#DCE6F2", fontSize: 13 }}>
          <span className="cursor-pointer hover:text-white transition-colors">Cities</span>
          <span className="cursor-pointer hover:text-white transition-colors">Report an Issue</span>
          <span className="cursor-pointer hover:text-white transition-colors">About</span>
          <button className="px-3 py-1.5 rounded text-xs font-semibold transition-colors" style={{ background: THEME.gold, color: THEME.navyDeep }}>
            Login / Register
          </button>
        </div>
        <Menu className="sm:hidden" size={20} color="#FFFFFF" />
      </div>
      <div style={{ background: "#EFEBE3", fontFamily: THEME.body, color: THEME.muted, fontSize: 10 }} className="px-4 sm:px-8 py-1 uppercase tracking-wider">
        Citizen-built registry — not an official government portal
      </div>
    </header>
  );
}