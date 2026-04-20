import { useMemo, useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import MobileHeader from "./components/layout/MobileHeader";
import HeroSection from "./components/Sections/HeroSection";
import ProblemSection from "./components/Sections/ProblemSection";
import TopicsSection from "./components/Sections/TopicsSection";
import SolutionsSection from "./components/Sections/SolutionsSection";
import PestsSection from "./components/Sections/PestsSection";
import ImpactSection from "./components/Sections/ImpactSection";
import QuizSection from "./components/Sections/QuizSection";
import TimelineSection from "./components/Sections/TimelineSection";
import SourcesFooter from "./components/Sections/SourcesFooter";
import { trendWithAi, trendWithoutAi } from "./data/charts";
import FutureOfAgricultureSection from "./components/sections/FutureOfAgricultureSection";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [aiEnabled, setAiEnabled] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const trendData = useMemo(
    () => (aiEnabled ? trendWithAi : trendWithoutAi),
    [aiEnabled]
  );

  const theme = {
    page: darkMode
      ? "bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_25%),linear-gradient(to_bottom,_#0f172a,_#111827,_#0a0f1a)] text-stone-100"
      : "bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.10),_transparent_20%),linear-gradient(to_bottom,_#f6f5ef,_#f8faf7,_#f4efe4)] text-stone-900",
    panel: darkMode ? "bg-white/5 border-white/10" : "bg-white/70 border-stone-200/70",
    muted: darkMode ? "text-stone-300" : "text-stone-600",
    soft: darkMode ? "text-stone-400" : "text-stone-500",
    accent: darkMode ? "text-emerald-300" : "text-emerald-700",
  };

  return (
    <div className={`min-h-screen w-full ${theme.page}`}>
      <div className="mx-auto flex max-w-[1600px]">
        <Sidebar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          theme={theme}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <main className="flex-1 px-4 py-4 md:px-8 md:py-6 lg:px-10">
          <div className="mx-auto max-w-6xl space-y-6">
            <MobileHeader
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              theme={theme}
              setIsMenuOpen={setIsMenuOpen}
            />

            <HeroSection darkMode={darkMode} theme={theme} />
            <ProblemSection darkMode={darkMode} theme={theme} />
            <FutureOfAgricultureSection darkMode={darkMode} theme={theme} />
            {/* <TopicsSection darkMode={darkMode} theme={theme} /> */}
            {/* <SolutionsSection darkMode={darkMode} theme={theme} /> */}
            <PestsSection darkMode={darkMode} theme={theme} />
            <ImpactSection
              darkMode={darkMode}
              theme={theme}
              aiEnabled={aiEnabled}
              setAiEnabled={setAiEnabled}
              trendData={trendData}
            />
            <QuizSection darkMode={darkMode} theme={theme} />
            <TimelineSection darkMode={darkMode} theme={theme} />
            <SourcesFooter darkMode={darkMode} theme={theme} />
          </div>
        </main>
      </div>
    </div>
  );
}