import { Card, CardContent } from "../ui/Card";

export default function StatCard({ label, value, sublabel, dark = false }) {
  return (
    <Card
      className={`rounded-3xl border ${
        dark ? "border-white/10 bg-white/5" : "border-stone-200/70 bg-white/80"
      }`}
    >
      <CardContent className="p-6">
        <p className={`text-sm ${dark ? "text-stone-300" : "text-stone-500"}`}>
          {label}
        </p>
        <div
          className={`mt-2 text-3xl font-bold ${
            dark ? "text-stone-50" : "text-stone-900"
          }`}
        >
          {value}
        </div>
        <p
          className={`mt-2 text-sm leading-6 ${
            dark ? "text-stone-400" : "text-stone-600"
          }`}
        >
          {sublabel}
        </p>
      </CardContent>
    </Card>
  );
}