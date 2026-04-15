import { Leaf, SunMoon, ChevronRight } from "lucide-react";
import { sections } from "../../data/sections";
import { Card, CardContent } from "../ui/Card";
import Switch from "../ui/Switch";

export default function Sidebar({ darkMode, setDarkMode, theme }) {
  return (
    <aside
      className={`sticky top-0 hidden h-screen w-72 shrink-0 border-r px-6 py-8 lg:block ${
        darkMode
          ? "border-white/10 bg-black/10"
          : "border-stone-200/60 bg-white/30 backdrop-blur"
      }`}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div
              className={`rounded-2xl p-3 ${
                darkMode ? "bg-emerald-500/10" : "bg-emerald-100"
              }`}
            >
              <Leaf className={`h-6 w-6 ${theme.accent}`} />
            </div>

            <div>
              <h1 className="text-lg font-semibold">AI Effects on Agriculture</h1>
              <p className={`text-sm ${theme.soft}`}>Editorial project site</p>
            </div>
          </div>

          <nav className="space-y-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition hover:translate-x-1 ${
                  darkMode
                    ? "text-stone-200 hover:bg-white/5"
                    : "text-stone-700 hover:bg-white"
                }`}
              >
                <span>{section.label}</span>
                <ChevronRight className="h-4 w-4 opacity-60" />
              </a>
            ))}
          </nav>
        </div>

        <Card className={`rounded-3xl border ${theme.panel}`}>
          <CardContent className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Theme</p>
                <p className={`text-xs ${theme.soft}`}>Switch light and dark</p>
              </div>
              <SunMoon className={`h-4 w-4 ${theme.soft}`} />
            </div>

            <div className="flex items-center justify-between">
              <span className={`text-sm ${theme.muted}`}>
                {darkMode ? "Dark mode" : "Light mode"}
              </span>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
}