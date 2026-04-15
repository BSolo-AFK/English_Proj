import { motion } from "framer-motion";
import SectionHeading from "../layout/SectionHeading";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/Card";
import { topicCards } from "../../data/topics";

export default function TopicsSection({ darkMode, theme }) {
  return (
    <section id="topics" className={`rounded-[32px] border p-8 md:p-10 ${theme.panel}`}>
      <SectionHeading
        eyebrow="Core topics"
        title="The article is divided into major agricultural problem areas and possible solutions."
        text="Each section can function like a magazine block: clear, visual, and easy to scan. These cards can later be expanded into fuller article sections with your own text, added images, or source-based highlights."
        dark={darkMode}
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {topicCards.map((card, i) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Card
                className={`h-full rounded-[28px] border transition hover:-translate-y-1 ${theme.panel}`}
              >
                <CardHeader>
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`rounded-2xl p-3 ${
                        darkMode ? "bg-emerald-500/10" : "bg-emerald-100"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${theme.accent}`} />
                    </div>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className={`leading-7 ${theme.muted}`}>{card.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}