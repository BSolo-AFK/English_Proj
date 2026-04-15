import { ShieldCheck, BarChart3, Users } from "lucide-react";
import SectionHeading from "../layout/SectionHeading";
import { Card, CardContent } from "../ui/Card";

export default function SolutionsSection({ darkMode, theme }) {
  return (
    <section id="solutions" className={`rounded-[32px] border p-8 md:p-10 ${theme.panel}`}>
      <SectionHeading
        eyebrow="Real-world solutions"
        title="AI becomes valuable when information turns into action."
        text="The strongest use of AI in agriculture is not replacing the farmer. It is improving how information is collected, interpreted, and acted on. Better monitoring supports earlier action, more targeted treatment, reduced waste, and stronger field management."
        dark={darkMode}
      />

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className={`rounded-[28px] border ${theme.panel}`}>
          <CardContent className="p-6">
            <ShieldCheck className={`mb-4 h-7 w-7 ${theme.accent}`} />
            <h3 className="text-xl font-semibold">Earlier Detection</h3>
            <p className={`mt-3 leading-7 ${theme.muted}`}>
              Smart systems help reveal warning signs earlier so that farmers can respond before a small field issue becomes a major crop loss.
            </p>
          </CardContent>
        </Card>

        <Card className={`rounded-[28px] border ${theme.panel}`}>
          <CardContent className="p-6">
            <BarChart3 className={`mb-4 h-7 w-7 ${theme.accent}`} />
            <h3 className="text-xl font-semibold">More Precise Decisions</h3>
            <p className={`mt-3 leading-7 ${theme.muted}`}>
              AI can support precision agriculture by helping decide where to inspect, where to treat, and where resources can be used more efficiently.
            </p>
          </CardContent>
        </Card>

        <Card className={`rounded-[28px] border ${theme.panel}`}>
          <CardContent className="p-6">
            <Users className={`mb-4 h-7 w-7 ${theme.accent}`} />
            <h3 className="text-xl font-semibold">Human + Machine Workflow</h3>
            <p className={`mt-3 leading-7 ${theme.muted}`}>
              The farmer remains central. Technology extends visibility, supports judgment, and makes hard daily tasks easier to manage across larger spaces.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}