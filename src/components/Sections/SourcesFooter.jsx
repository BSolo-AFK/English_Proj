import SectionHeading from "../layout/SectionHeading";
import { Card, CardContent } from "../ui/Card";

export default function SourcesFooter({ darkMode, theme }) {
  return (
    <footer id="sources" className={`rounded-[32px] border p-8 md:p-10 ${theme.panel}`}>
      <SectionHeading
        eyebrow="Sources / references"
        title="Resources"
        dark={darkMode}
      />

      <div className="grid gap-4 md:grid-cols-1">
        <Card className={`rounded-[28px] border ${theme.panel} w-full`}>
          <CardContent className="p-6 w-full">
            <p className="font-semibold">Article Sources Predictive Analysis</p>
            <ul className={`mt-3 space-y-2 text-xl leading-7 ${theme.muted} `}>
               <li><a href="https://www.sciencedirect.com/science/article/pii/S221431732500085X" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/science/article/pii/S221431732500085X</a></li>
               <li><a href="https://www.ars.usda.gov/research/project/?accnNo=439612&showpubs=true" target="_blank" rel="noopener noreferrer">https://www.ars.usda.gov/research/project/?accnNo=439612&showpubs=true</a></li>
               <li><a href="https://www.oecd.org/en/publications/progress-in-implementing-the-european-union-coordinated-plan-on-artificial-intelligence-volume-2_3ac96d41-en/full-report/ai-in-agriculture_c9ac6d24.html" target="_blank" rel="noopener noreferrer">https://www.oecd.org/en/publications/progress-in-implementing-the-european-union-coordinated-plan-on-artificial-intelligence-volume-2_3ac96d41-en/full-report/ai-in-agriculture_c9ac6d24.html</a></li>
               <li><a href="https://www.mdpi.com/2624-7402/7/3/89" target="_blank" rel="noopener noreferrer">https://www.mdpi.com/2624-7402/7/3/89</a></li>
               <li><a href="https://www.weforum.org/stories/2026/01/ai-agricultural-intelligence-revolutionize-farming/" target="_blank" rel="noopener noreferrer">https://www.weforum.org/stories/2026/01/ai-agricultural-intelligence-revolutionize-farming/</a></li>
               <li><a href="https://www.sciencedirect.com/science/article/pii/S221431732500085X" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/science/article/pii/S221431732500085X</a></li>

            </ul>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
}