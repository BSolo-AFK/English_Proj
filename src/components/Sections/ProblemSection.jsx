import SectionHeading from "../layout/SectionHeading";
import StatCard from "../layout/StatCard";

export default function ProblemSection({ darkMode, theme }) {
  return (
    <section id="problem" className={`rounded-[32px] border p-8 md:p-10 ${theme.panel}`}>
      <SectionHeading
        eyebrow="Why it matters"
        title="The central issue is not just crop health. It is financial loss."
        text="Pests, disease, labor strain, delayed detection, and inefficient monitoring all reduce the amount of healthy product that reaches the market. In this project, agriculture is viewed through the lens of profitability: the goal is to reduce avoidable loss and improve how decisions are made in the field."
        dark={darkMode}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Yield Risk"
          value="20–40%"
          sublabel="A strong visual placeholder for crop loss caused by pests and disease."
          dark={darkMode}
        />
        <StatCard
          label="Manual Limitation"
          value="High"
          sublabel="Human monitoring is valuable but difficult to scale across large fields every day."
          dark={darkMode}
        />
        <StatCard
          label="Response Issue"
          value="Late"
          sublabel="By the time symptoms are obvious, a disease may already be spreading."
          dark={darkMode}
        />
        <StatCard
          label="Business Impact"
          value="Direct"
          sublabel="Less healthy crop output means lower profitability and more wasted resources."
          dark={darkMode}
        />
      </div>
    </section>
  );
}