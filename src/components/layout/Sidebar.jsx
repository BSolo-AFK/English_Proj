import { Leaf, SunMoon, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sections } from "../../data/sections";
import { Card, CardContent } from "../ui/Card";
import Switch from "../ui/Switch";

export default function Sidebar({
  darkMode,
  setDarkMode,
  theme,
  isMenuOpen,
  setIsMenuOpen,
}) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />

          <motion.aside
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ duration: 0.3 }}
            className={`fixed left-0 top-0 z-50 h-screen w-72 border-r px-6 py-8 shadow-2xl ${
              darkMode
                ? "border-white/10 bg-[#0f172a]"
                : "border-stone-200/60 bg-white"
            }`}
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-8 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-2xl p-3 ${
                        darkMode ? "bg-emerald-500/10" : "bg-emerald-100"
                      }`}
                    >
                      <Leaf className={`h-6 w-6 ${theme.accent}`} />
                    </div>

                    <div>
                      <h1 className="text-lg font-semibold">
                        AI Effects on Agriculture
                      </h1>
                      <p className={`text-sm ${theme.soft}`}>
                        Editorial project site
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-xl p-2 transition ${
                      darkMode ? "hover:bg-white/10" : "hover:bg-stone-100"
                    }`}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition hover:translate-x-1 ${
                        darkMode
                          ? "text-stone-200 hover:bg-white/5"
                          : "text-stone-700 hover:bg-stone-100"
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
                      <p className={`text-xs ${theme.soft}`}>
                        Switch light and dark
                      </p>
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
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}