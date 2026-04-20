import SectionHeading from "../layout/SectionHeading";
import FlipCard from "../quiz/FlipCard";
import { quizCards } from "../../data/quiz";

export default function QuizSection({ darkMode, theme }) {
  return (
    <section id="quiz" className={`rounded-[32px] border p-8 md:p-10 ${theme.panel}`}>
      <SectionHeading
        eyebrow="Quiz section"
        title="Test Your Knowledge"
        dark={darkMode}
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {quizCards.map((card) => (
          <FlipCard key={card.q} q={card.q} a={card.a} dark={darkMode} />
        ))}
      </div>
    </section>
  );
}