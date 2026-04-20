import { SunMoon, Menu } from "lucide-react";
import Switch from "../ui/Switch";

export default function MobileHeader({
  darkMode,
  setDarkMode,
  theme,
  setIsMenuOpen,
}) {
  return (
    <div
      className={`sticky top-4 z-30 rounded-3xl border px-4 py-3 backdrop-blur ${theme.panel}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`rounded-xl p-2 transition ${
              darkMode ? "hover:bg-white/10" : "hover:bg-stone-100"
            }`}
          >
            <Menu className="h-5 w-5" />
          </button>

          <div>
            <h2 className="font-semibold">AI Effects on Agriculture</h2>
            <p className={`text-xs ${theme.soft}`}>
              Interactive article experience
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <SunMoon className={`h-4 w-4 ${theme.soft}`} />
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
        </div>
      </div>
    </div>
  );
}