import { Users, CalendarDays } from "lucide-react";
import SectionHeading from "../layout/SectionHeading";
import { Card, CardContent } from "../ui/Card";
import { milestones } from "../../data/milestones";

export default function TimelineSection({ darkMode, theme }) {
  return (
    <section id="timeline" className={`rounded-[32px] border p-8 md:p-10 ${theme.panel}`}>
      <SectionHeading
        eyebrow="Project / team / timeline"
        title="Milestone timeline "
        dark={darkMode}
      />

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Card className={`rounded-[28px] border ${theme.panel}`}>
          <CardContent className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <Users className={`h-6 w-6 ${theme.accent}`} />
              <h3 className="text-xl font-semibold">Team Snapshot</h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className={`text-sm ${theme.soft}`}>Project Title</p>
                <p className="font-medium">AI Effects on Agriculture</p>
              </div>
              <div>
                <p className={`text-sm ${theme.soft}`}>Course / Class</p>
                <p className="font-medium">ENG 2575 · Research Project</p>
              </div>
              <div>
                <p className={`text-sm ${theme.soft}`}>Team Members</p>
                <p className="font-medium">Borys, Fahema, Denver</p>
              </div>
              <div>
                <p className={`text-sm ${theme.soft}`}>Project Summary</p>
                <p className={`leading-7 ${theme.muted}`}>
                  The modernization of agriculture has been a gradual process, but the integration of AI technologies is accelerating change in the industry. This project explores how AI can enhance agricultural practices.
                </p>                
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={`rounded-[28px] border ${theme.panel}`}>
          <CardContent className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <CalendarDays className={`h-6 w-6 ${theme.accent}`} />
              <h3 className="text-xl font-semibold">Milestone Timeline</h3>
            </div>

            <div className="space-y-4">
              {milestones.map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold ${
                        darkMode
                          ? "bg-emerald-500/15 text-emerald-300"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {item.date}
                    </div>

                    {index !== milestones.length - 1 && (
                      <div className={`mt-2 h-full w-px ${darkMode ? "bg-white/10" : "bg-stone-200"}`} />
                    )}
                  </div>

                  <div className="pb-6">
                    <p className="font-semibold">{item.title}</p>
                    <p className={`mt-1 leading-7 ${theme.muted}`}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}