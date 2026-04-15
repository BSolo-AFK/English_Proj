import { SunMoon } from "lucide-react";
import Switch from "../ui/Switch";

export default function MobileHeader({ darkMode, setDarkMode, theme }) {
  return (
    <div
      className={`sticky top-4 z-30 rounded-3xl border px-4 py-3 backdrop-blur lg:hidden ${theme.panel}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="font-semibold">AI Effects on Agriculture</h2>
          <p className={`text-xs ${theme.soft}`}>Interactive article experience</p>
        </div>

        <div className="flex items-center gap-3">
          <SunMoon className={`h-4 w-4 ${theme.soft}`} />
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
        </div>
      </div>
    </div>
  );
}