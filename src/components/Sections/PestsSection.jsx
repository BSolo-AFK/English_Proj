import { Camera, Tractor, ScanSearch, ShieldCheck } from "lucide-react";
import SectionHeading from "../layout/SectionHeading";
import { Card, CardContent } from "../ui/Card";

export default function PestsSection({ darkMode, theme }) {
  return (
    <section id="pests" className={`rounded-[32px] border p-8 md:p-10 ${theme.panel}`}>
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Featured section"
            title="Pests and plant diseases show why AI can enhance agriculture in a major way."
            text="Traditional field monitoring often depends on visible symptoms and repeated human inspection. That approach is important, but it is time-consuming and difficult to maintain at the same level across every part of a large field. AI-supported tools offer a wider and more precise view."
            dark={darkMode}
          />

          <div
            className={`rounded-[28px] border p-6 ${
              darkMode
                ? "border-emerald-400/20 bg-emerald-500/10"
                : "border-emerald-200 bg-emerald-50"
            }`}
          >
            <p className={`text-lg leading-8 ${darkMode ? "text-stone-100" : "text-stone-800"}`}>
              Through cameras, drones, and sensors, image-based systems can help farmers identify where pests may be coming from, how diseases may be spreading, and which part of the field may need immediate attention. That means earlier action, less unnecessary treatment, and a better chance of protecting both crops and profitability.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className={`rounded-[28px] border ${theme.panel}`}>
            <CardContent className="p-6">
              <Camera className={`mb-4 h-7 w-7 ${theme.accent}`} />
              <h3 className="text-lg font-semibold">Cameras and Visual Inputs</h3>
              <p className={`mt-3 leading-7 ${theme.muted}`}>
                Add disease comparison images, crop leaf examples, or gif placeholders showing visual analysis.
              </p>
            </CardContent>
          </Card>

          <Card className={`rounded-[28px] border ${theme.panel}`}>
            <CardContent className="p-6">
              <Tractor className={`mb-4 h-7 w-7 ${theme.accent}`} />
              <h3 className="text-lg font-semibold">Drones / UAV Monitoring</h3>
              <p className={`mt-3 leading-7 ${theme.muted}`}>
                Use aerial imagery or illustrations to show how large-scale field patterns become easier to spot.
              </p>
            </CardContent>
          </Card>

          <Card className={`rounded-[28px] border ${theme.panel}`}>
            <CardContent className="p-6">
              <ScanSearch className={`mb-4 h-7 w-7 ${theme.accent}`} />
              <h3 className="text-lg font-semibold">Pattern Recognition</h3>
              <p className={`mt-3 leading-7 ${theme.muted}`}>
                Explain how AI learns from repeated image inputs and gets better at spotting unusual patterns over time.
              </p>
            </CardContent>
          </Card>

          <Card className={`rounded-[28px] border ${theme.panel}`}>
            <CardContent className="p-6">
              <ShieldCheck className={`mb-4 h-7 w-7 ${theme.accent}`} />
              <h3 className="text-lg font-semibold">Earlier Protection</h3>
              <p className={`mt-3 leading-7 ${theme.muted}`}>
                Connect the technology back to reduced loss, more targeted action, and improved crop protection.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}