import {
  Sprout,
  Waves,
  ScanSearch,
  Bot,
  TrendingUp,
  Tractor,
} from "lucide-react";
import SectionHeading from "../layout/SectionHeading";
import { Card, CardContent } from "../ui/Card";

export default function FutureOfAgricultureSection({ darkMode, theme }) {
  return (
    <section
      id="future-agriculture"
      className={`rounded-[32px] border p-8 md:p-10 ${theme.panel}`}
    >
      <SectionHeading
        eyebrow="AI in modern agriculture"
        title="By 2026, AI in agriculture is no longer a future idea. It is becoming part of everyday farming."
        text="The shift is no longer just about working by the acre. It is about understanding the field at a much smaller level, sometimes down to the individual plant. This gives farmers better control over waste, labor, crop health, and long-term profitability."
        dark={darkMode}
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="space-y-6">
          <Card className={`rounded-[28px] border ${theme.panel}`}>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`rounded-2xl p-3 ${
                    darkMode ? "bg-emerald-500/10" : "bg-emerald-100"
                  }`}
                >
                  <Sprout className={`h-6 w-6 ${theme.accent}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Smarter soil management
                  </h3>
                  <p
                    className={`mt-1 text-sm uppercase tracking-[0.18em] ${
                      darkMode ? "text-stone-400" : "text-stone-500"
                    }`}
                  >
                    From blanket treatment to precision care
                  </p>
                </div>
              </div>

              <p className={`leading-7 ${theme.muted}`}>
                In the past, farmers often treated an entire field the same way,
                even when different areas had different needs. That led to wasted
                fertilizer, wasted water, and chemical runoff into nearby water
                sources.
              </p>

              <p className={`mt-4 leading-7 ${theme.muted}`}>
                Today, AI-supported soil management works more like a
                personalized plan for the land. With IoT sensors, satellite
                imagery, and variable rate application, machines can detect where
                nutrients, moisture, or pH levels are low and apply the right
                amount only where it is needed. This lowers waste and supports
                healthier soil over time.
              </p>
            </CardContent>
          </Card>

          <Card className={`rounded-[28px] border ${theme.panel}`}>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`rounded-2xl p-3 ${
                    darkMode ? "bg-emerald-500/10" : "bg-emerald-100"
                  }`}
                >
                  <ScanSearch className={`h-6 w-6 ${theme.accent}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Earlier disease and pest detection
                  </h3>
                  <p
                    className={`mt-1 text-sm uppercase tracking-[0.18em] ${
                      darkMode ? "text-stone-400" : "text-stone-500"
                    }`}
                  >
                    From reacting late to acting early
                  </p>
                </div>
              </div>

              <p className={`leading-7 ${theme.muted}`}>
                Farming has always involved risk, especially when dealing with
                fungal outbreaks, pests, and crop disease. By the time a farmer
                could clearly see the problem, the damage often had already
                spread too far for a small fix.
              </p>

              <p className={`mt-4 leading-7 ${theme.muted}`}>
                AI changes this by using drone imagery, machine learning, and
                pattern recognition to detect early warning signs before they are
                obvious to the human eye. That allows for targeted treatment
                instead of heavy-handed spraying, helping protect the crop while
                reducing unnecessary chemical use.
              </p>
            </CardContent>
          </Card>

          <Card className={`rounded-[28px] border ${theme.panel}`}>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`rounded-2xl p-3 ${
                    darkMode ? "bg-emerald-500/10" : "bg-emerald-100"
                  }`}
                >
                  <TrendingUp className={`h-6 w-6 ${theme.accent}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Better forecasting and planning
                  </h3>
                  <p
                    className={`mt-1 text-sm uppercase tracking-[0.18em] ${
                      darkMode ? "text-stone-400" : "text-stone-500"
                    }`}
                  >
                    Information that improves business decisions
                  </p>
                </div>
              </div>

              <p className={`leading-7 ${theme.muted}`}>
                AI is not only useful in the field. It also helps farmers better
                predict harvest volumes, prepare transportation, manage storage,
                and plan pricing earlier in the season.
              </p>

              <p className={`mt-4 leading-7 ${theme.muted}`}>
                When farmers have stronger forecasts, they can make more stable
                financial decisions. This helps reduce uncertainty, strengthens
                supply chains, and turns data into a more practical business
                advantage.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card
            className={`rounded-[28px] border ${
              darkMode
                ? "border-emerald-400/20 bg-emerald-500/10"
                : "border-emerald-200 bg-emerald-50"
            }`}
          >
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`rounded-2xl p-3 ${
                    darkMode ? "bg-white/10" : "bg-white/70"
                  }`}
                >
                  <Bot className={`h-6 w-6 ${theme.accent}`} />
                </div>
                <div>
                  <h3
                    className={`text-xl font-semibold ${
                      darkMode ? "text-stone-50" : "text-stone-900"
                    }`}
                  >
                    AI and automation are filling a growing labor gap
                  </h3>
                  <p
                    className={`mt-1 text-sm uppercase tracking-[0.18em] ${
                      darkMode ? "text-stone-400" : "text-stone-500"
                    }`}
                  >
                    Faster work, less strain, more precision
                  </p>
                </div>
              </div>

              <p
                className={`leading-7 ${
                  darkMode ? "text-stone-200" : "text-stone-700"
                }`}
              >
                Agriculture is facing a labor shortage, and many farms are
                struggling to find enough people for repetitive and physically
                demanding work like weeding, spraying, and harvesting.
              </p>

              <p
                className={`mt-4 leading-7 ${
                  darkMode ? "text-stone-200" : "text-stone-700"
                }`}
              >
                Autonomous tools are becoming part of the solution. See-and-spray
                robots can tell weeds apart from crops in milliseconds and apply
                treatment only where it is needed. Self-driving tractors and
                machine fleets can also follow more exact routes, helping protect
                the soil, reduce compaction, and improve planting efficiency.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className={`rounded-[28px] border ${theme.panel}`}>
              <CardContent className="p-6">
                <Waves className={`mb-4 h-7 w-7 ${theme.accent}`} />
                <h3 className="text-lg font-semibold">Sustainability</h3>
                <p
                  className={`mt-2 text-sm font-medium uppercase tracking-[0.18em] ${
                    darkMode ? "text-stone-400" : "text-stone-500"
                  }`}
                >
                  Less waste, healthier land
                </p>
                <p className={`mt-3 leading-7 ${theme.muted}`}>
                  More precise fertilizer, pesticide, and water use helps lower
                  runoff and waste while supporting soil health and longer-term
                  regenerative practices.
                </p>
              </CardContent>
            </Card>

            <Card className={`rounded-[28px] border ${theme.panel}`}>
              <CardContent className="p-6">
                <Tractor className={`mb-4 h-7 w-7 ${theme.accent}`} />
                <h3 className="text-lg font-semibold">Precision Machinery</h3>
                <p
                  className={`mt-2 text-sm font-medium uppercase tracking-[0.18em] ${
                    darkMode ? "text-stone-400" : "text-stone-500"
                  }`}
                >
                  Better routes, better output
                </p>
                <p className={`mt-3 leading-7 ${theme.muted}`}>
                  With improved sensors, connectivity, and guidance systems,
                  modern equipment can move with greater accuracy and reduce the
                  physical damage caused by poor paths or repeated passes.
                </p>
              </CardContent>
            </Card>

            <Card className={`rounded-[28px] border ${theme.panel}`}>
              <CardContent className="p-6">
                <ScanSearch className={`mb-4 h-7 w-7 ${theme.accent}`} />
                <h3 className="text-lg font-semibold">Targeted Action</h3>
                <p
                  className={`mt-2 text-sm font-medium uppercase tracking-[0.18em] ${
                    darkMode ? "text-stone-400" : "text-stone-500"
                  }`}
                >
                  Treat only what needs treatment
                </p>
                <p className={`mt-3 leading-7 ${theme.muted}`}>
                  Instead of treating an entire field the same way, AI makes it
                  possible to respond to smaller problem areas with more control,
                  saving time, chemicals, and money.
                </p>
              </CardContent>
            </Card>

            <Card className={`rounded-[28px] border ${theme.panel}`}>
              <CardContent className="p-6">
                <TrendingUp className={`mb-4 h-7 w-7 ${theme.accent}`} />
                <h3 className="text-lg font-semibold">Return on Investment</h3>
                <p
                  className={`mt-2 text-sm font-medium uppercase tracking-[0.18em] ${
                    darkMode ? "text-stone-400" : "text-stone-500"
                  }`}
                >
                  Beyond hype
                </p>
                <p className={`mt-3 leading-7 ${theme.muted}`}>
                  By 2026, the conversation is shifting toward real value. AI is
                  being judged less as a trend and more by whether it helps farms
                  become more predictable, efficient, and profitable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}