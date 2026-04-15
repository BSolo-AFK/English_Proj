import { motion } from "framer-motion";
import { Camera, Tractor, ScanSearch } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import StatCard from "../layout/StatCard";
import { Card, CardContent } from "../ui/Card";

export default function HeroSection({ darkMode, theme }) {
  return (
    <section id="hero" className={`overflow-hidden rounded-[32px] border ${theme.panel}`}>
      <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="p-8 md:p-10 lg:p-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="rounded-full bg-emerald-600 text-white">
              School Project · Magazine Style
            </Badge>

            <h1 className="mt-5 max-w-full break-words text-4xl font-semibold leading-tight md:text-5xl xl:text-6xl">
              AI Effects on Agriculture
            </h1>

            <p className={`mt-5 max-w-full break-words text-lg leading-8 ${theme.muted}`}>
              A digital article on how artificial intelligence, smart monitoring,
              and precision tools can reduce financial loss, improve efficiency,
              and help farmers make stronger decisions without replacing human
              judgment.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="rounded-full bg-stone-900 text-white hover:bg-stone-800">
                Explore the Article
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-emerald-600/30 bg-transparent"
              >
                View Solutions
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <StatCard
                label="Main Focus"
                value="Profitability"
                sublabel="Reducing preventable financial loss in agriculture."
                dark={darkMode}
              />
              <StatCard
                label="Article Lens"
                value="AI + Farming"
                sublabel="Technology used to support decision-making and visibility."
                dark={darkMode}
              />
              <StatCard
                label="Core Theme"
                value="Enhancement"
                sublabel="AI helps farmers work smarter rather than replacing them."
                dark={darkMode}
              />
            </div>
          </motion.div>
        </div>

        <div
          className={`relative min-h-[360px] border-l ${
            darkMode ? "border-white/10" : "border-stone-200/70"
          }`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,185,129,0.25),transparent_55%),linear-gradient(180deg,rgba(120,113,108,0.15),transparent)]" />

          <div className="absolute inset-0 p-8 md:p-10">
            <div className="grid h-full gap-4">
              <Card className={`rounded-[28px] border ${theme.panel}`}>
                <CardContent className="flex h-full min-h-[120px] items-center gap-4 p-5">
                  <div
                    className={`rounded-2xl p-3 ${
                      darkMode ? "bg-emerald-500/10" : "bg-emerald-100"
                    }`}
                  >
                    <Camera className={`h-6 w-6 ${theme.accent}`} />
                  </div>
                  <div>
                    <p className="font-semibold">Image-Based Crop Monitoring</p>
                    <p className={`mt-1 text-sm leading-6 ${theme.soft}`}>
                      Visual placeholders can be replaced with crop images,
                      drone shots, or disease detection illustrations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card className={`rounded-[28px] border ${theme.panel}`}>
                  <CardContent className="p-5">
                    <Tractor className={`mb-3 h-7 w-7 ${theme.accent}`} />
                    <p className="font-semibold">Farming + Technology</p>
                    <p className={`mt-2 text-sm leading-6 ${theme.soft}`}>
                      Use this space for a gif or illustration of smart farming systems.
                    </p>
                  </CardContent>
                </Card>

                <Card className={`rounded-[28px] border ${theme.panel}`}>
                  <CardContent className="p-5">
                    <ScanSearch className={`mb-3 h-7 w-7 ${theme.accent}`} />
                    <p className="font-semibold">Pattern Detection</p>
                    <p className={`mt-2 text-sm leading-6 ${theme.soft}`}>
                      Highlight how AI can find patterns that humans may miss across large fields.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}