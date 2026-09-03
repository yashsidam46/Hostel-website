import { ShieldCheck, Menu } from "lucide-react";
import { THEME } from "../utils/constants";

export function GovHeader({ onHome }) {
  return (
    <header className="sticky top-0 z-30 shadow-md">
      <div className="h-1.5 w-full flex">
        <div className="flex-1" style={{ background: THEME.saffron }} />
        <div className="flex-1" style={{ background: "#FFFFFF" }} />
        <div className="flex-1" style={{ background: THEME.green }} />
      </div>

      <div style={{ background: THEME.navy }} className="w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-3.5">
          <button onClick={onHome} className="flex items-center gap-3.5 group text-left">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"
              style={{ background: "#FFFFFF" }}
            >
              <ShieldCheck size={22} color={THEME.navy} />
            </div>
            <div>
              
              <div
                style={{ fontFamily: THEME.heading, color: "#FFFFFF" }}
                className="text-base sm:text-lg font-bold tracking-tight"
              >
                Kindly Act BY Yash 
              </div>
            </div>
          </button>

          <div
            className="hidden sm:flex items-center gap-8"
            style={{ fontFamily: THEME.body, color: "#DCE6F2" }}
          >
            <span className="text-sm font-medium hover:text-white transition-colors cursor-pointer">
              Cities
            </span>
            <span className="text-sm font-medium hover:text-white transition-colors cursor-pointer">
              Report an Issue
            </span>
            <span className="text-sm font-medium hover:text-white transition-colors cursor-pointer">
              About
            </span>
            <button
              className="px-5 py-2 rounded-md text-sm font-bold shadow-sm transition-all hover:brightness-110 active:scale-95"
              style={{ background: THEME.gold, color: THEME.navyDeep }}
            >
              Login / Register
            </button>
          </div>

          <Menu className="sm:hidden cursor-pointer" size={24} color="#FFFFFF" />
        </div>
      </div>

      <div
        style={{ background: "#EFEBE3", fontFamily: THEME.body, color: THEME.muted }}
        className="px-6 sm:px-10 py-1.5 text-xs uppercase tracking-wider text-center font-medium border-b border-gray-200"
      >
        Citizen-built registry — not an official government portal
      </div>
    </header>
  );
}