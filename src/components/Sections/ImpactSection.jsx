import SectionHeading from "../layout/SectionHeading";
import Switch from "../ui/Switch";
import { Card, CardContent } from "../ui/Card";
import LossTrendChart from "../charts/LossTrendChart";
import ComparisonRadarChart from "../charts/ComparisonRadarChart";

export default function ImpactSection({
  darkMode,
  theme,
  aiEnabled,
  setAiEnabled,
  trendData,
}) {
  return (
    <section id="impact" className={`rounded-[32px] border p-8 md:p-10 ${theme.panel}`}>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Impact visualization"
          title="A simple toggle can show the difference between traditional workflows and AI-enhanced support."
          dark={darkMode}
        />

        <div className={`flex items-center gap-3 rounded-full border px-4 py-3 ${theme.panel}`}>
          <span className={`text-sm ${theme.soft}`}>Without AI</span>
          <Switch checked={aiEnabled} onCheckedChange={setAiEnabled} />
          <span className={`text-sm ${theme.soft}`}>With AI</span>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className={`rounded-[28px] border ${theme.panel}`}>
          <CardContent className="p-6">
            <h3 className="mb-4 text-xl font-semibold">Field Loss Trend</h3>
            <LossTrendChart trendData={trendData} darkMode={darkMode} />
          </CardContent>
        </Card>

        <Card className={`rounded-[28px] border ${theme.panel}`}>
          <CardContent className="p-6">
            <h3 className="mb-4 text-xl font-semibold">Traditional vs AI-Enhanced</h3>
            <ComparisonRadarChart darkMode={darkMode} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}