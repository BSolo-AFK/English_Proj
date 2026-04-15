import SectionHeading from "../layout/SectionHeading";
import { Card, CardContent } from "../ui/Card";

export default function SourcesFooter({ darkMode, theme }) {
  return (
    <footer id="sources" className={`rounded-[32px] border p-8 md:p-10 ${theme.panel}`}>
      <SectionHeading
        eyebrow="Sources / references"
        title="Close the project with a clean editorial footer."
        text="Use this area for article links, research citations, and image credits. It can stay simple and professional while still matching the rest of the website design."
        dark={darkMode}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card className={`rounded-[28px] border ${theme.panel}`}>
          <CardContent className="p-6">
            <p className="font-semibold">Article Sources</p>
            <ul className={`mt-3 space-y-2 text-sm leading-7 ${theme.muted}`}>
              <li>• Add your ScienceDirect article here</li>
              <li>• Add your USDA source here</li>
              <li>• Add additional course or research references here</li>
            </ul>
          </CardContent>
        </Card>

        <Card className={`rounded-[28px] border ${theme.panel}`}>
          <CardContent className="p-6">
            <p className="font-semibold">Visual Credits</p>
            <ul className={`mt-3 space-y-2 text-sm leading-7 ${theme.muted}`}>
              <li>• Replace placeholders with your own image links or local assets</li>
              <li>• Add gif credits if used</li>
              <li>• Add icon/image attribution if needed</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
}