import {
  Camera,
  Tractor,
  ScanSearch,
  ShieldCheck,
  Bug,
} from "lucide-react";
import SectionHeading from "../layout/SectionHeading";
import { Card, CardContent } from "../ui/Card";

export default function PestsSection({ darkMode, theme }) {
  return (
    <section
      id="pests"
      className={`rounded-[32px] border p-8 md:p-10 ${theme.panel}`}
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Featured section"
            title="Pests and plant diseases remain one of agriculture’s biggest threats."
            text="Insects, fungi, bacteria, and viruses can spread quickly across a field and damage crops before workers are able to react. This makes pest and disease control one of the clearest examples of where stronger monitoring tools can improve both crop protection and profitability."
            dark={darkMode}
          />

          <div
            className={`space-y-5 rounded-[28px] border p-6 ${
              darkMode
                ? "border-emerald-400/20 bg-emerald-500/10"
                : "border-emerald-200 bg-emerald-50"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-1 rounded-2xl p-2 ${
                  darkMode ? "bg-white/10" : "bg-white/70"
                }`}
              >
                <Bug className={`h-5 w-5 ${theme.accent}`} />
              </div>

              <div>
                <h3
                  className={`text-lg font-semibold ${
                    darkMode ? "text-stone-50" : "text-stone-900"
                  }`}
                >
                  Why this matters
                </h3>
                <p
                  className={`mt-2 leading-7 ${
                    darkMode ? "text-stone-200" : "text-stone-700"
                  }`}
                >
                  Agriculture has slowly been modernizing the way it handles
                  pests and plant diseases, but the losses remain serious.
                  These threats reduce global crop yields by about 20 to 40
                  percent and cause more than $220 billion in losses every
                  year. Much of this damage happens because pests and diseases
                  spread fast, often before farmers can fully see how serious
                  the problem has become.
                </p>
              </div>
            </div>

            <div
              className={`h-px w-full ${
                darkMode ? "bg-white/10" : "bg-emerald-200"
              }`}
            />

            <div>
              <h4
                className={`text-base font-semibold ${
                  darkMode ? "text-stone-100" : "text-stone-800"
                }`}
              >
                The challenge with traditional monitoring
              </h4>
              <p
                className={`mt-2 text-[15px] leading-7 ${
                  darkMode ? "text-stone-300" : "text-stone-700"
                }`}
              >
                Traditional field monitoring still depends heavily on workers
                checking crops by eye for visible warning signs. That method is
                important, but it is repetitive, time-consuming, and difficult
                to maintain across large fields. By the time symptoms are easy
                to notice, the disease may already be spreading to nearby
                plants.
              </p>
            </div>

            <div>
              <h4
                className={`text-base font-semibold ${
                  darkMode ? "text-stone-100" : "text-stone-800"
                }`}
              >
                Why earlier detection changes everything
              </h4>
              <p
                className={`mt-2 text-[15px] leading-7 ${
                  darkMode ? "text-stone-300" : "text-stone-700"
                }`}
              >
                AI does not replace the farmer. It helps the farmer act earlier
                and with better information. When patterns and warning signs are
                found sooner, farmers have a better chance of protecting crop
                value, reducing financial loss, and avoiding major damage before
                it spreads.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <Card
            className={`h-[220px] overflow-hidden rounded-[28px] border ${theme.panel}`}
          >
            <img
              src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXZ5dnZ1azVpZWtpc2Ywb2t0YXhtOHFobG8wc3Mzbjh5ZWo0MDVqeSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/kiBmnO3WL1lOsYtB8V/giphy.gif"
              alt="Farm monitoring animation"
              className="block h-full w-full object-cover"
            />
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className={`rounded-[28px] border ${theme.panel}`}>
              <CardContent className="p-6">
                <Camera className={`mb-4 h-7 w-7 ${theme.accent}`} />
                <h3 className="text-lg font-semibold">Visual Inspection</h3>
                <p
                  className={`mt-2 text-sm font-medium uppercase tracking-[0.18em] ${
                    darkMode ? "text-stone-400" : "text-stone-500"
                  }`}
                >
                  How problems are usually found
                </p>
                <p className={`mt-3 leading-7 ${theme.muted}`}>
                  Farmers often identify pests and disease by looking for
                  visible changes in leaves, stems, or crop color. This works
                  best when the symptoms are obvious, but early-stage warning
                  signs are easier to miss.
                </p>
              </CardContent>
            </Card>

            <Card className={`rounded-[28px] border ${theme.panel}`}>
              <CardContent className="p-6">
                <Tractor className={`mb-4 h-7 w-7 ${theme.accent}`} />
                <h3 className="text-lg font-semibold">Human Limitation</h3>
                <p
                  className={`mt-2 text-sm font-medium uppercase tracking-[0.18em] ${
                    darkMode ? "text-stone-400" : "text-stone-500"
                  }`}
                >
                  Why manual work is not enough
                </p>
                <p className={`mt-3 leading-7 ${theme.muted}`}>
                  Monitoring crops by hand is exhausting and repetitive. As
                  workers inspect plant after plant, focus can drift and smaller
                  signs may be missed. Across large fields, that delay can make
                  a local issue grow into a much larger outbreak.
                </p>
              </CardContent>
            </Card>

            <Card className={`rounded-[28px] border ${theme.panel}`}>
              <CardContent className="p-6">
                <ShieldCheck className={`mb-4 h-7 w-7 ${theme.accent}`} />
                <h3 className="text-lg font-semibold">Reactive Solutions</h3>
                <p
                  className={`mt-2 text-sm font-medium uppercase tracking-[0.18em] ${
                    darkMode ? "text-stone-400" : "text-stone-500"
                  }`}
                >
                  What happens when detection is late
                </p>
                <p className={`mt-3 leading-7 ${theme.muted}`}>
                  When infections are found too late, farmers may have to remove
                  damaged crops or use strong pesticides to slow the spread.
                  These methods can help prevent total loss, but they still
                  reduce profit and may affect product quality or market value.
                </p>
              </CardContent>
            </Card>

            <Card className={`rounded-[28px] border ${theme.panel}`}>
              <CardContent className="p-6">
                <ScanSearch className={`mb-4 h-7 w-7 ${theme.accent}`} />
                <h3 className="text-lg font-semibold">AI Early Detection</h3>
                <p
                  className={`mt-2 text-sm font-medium uppercase tracking-[0.18em] ${
                    darkMode ? "text-stone-400" : "text-stone-500"
                  }`}
                >
                  The value of smarter monitoring
                </p>
                <p className={`mt-3 leading-7 ${theme.muted}`}>
                  Through predictive analysis, image recognition, and continuous
                  monitoring, AI can help farmers spot where pests are
                  appearing, how disease may be spreading, and which areas need
                  quick attention. That leads to earlier action and fewer
                  preventable losses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}