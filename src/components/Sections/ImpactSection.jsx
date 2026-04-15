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
          text="This section gives your article a stronger visual argument. The chart does not need to be final data at first — you can use it as an interactive concept to show what improves when AI helps farmers make earlier and more informed decisions."
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
            <p className={`mt-4 text-sm leading-6 ${theme.soft}`}>
              Toggle the switch to compare a slower, more reactive workflow against one where AI improves early visibility and response.
            </p>
          </CardContent>
        </Card>

        <Card className={`rounded-[28px] border ${theme.panel}`}>
          <CardContent className="p-6">
            <h3 className="mb-4 text-xl font-semibold">Traditional vs AI-Enhanced</h3>
            <ComparisonRadarChart darkMode={darkMode} />
            <p className={`mt-4 text-sm leading-6 ${theme.soft}`}>
              This visualization helps explain your main claim: AI improves detection speed, visibility, and precision, which can support better profitability.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}