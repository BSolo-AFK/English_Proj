import { Card, CardContent } from "../ui/Card";

export default function StatCard({ label, value, sublabel, dark = false }) {
  return (
    <Card
      className={`min-w-0 overflow-hidden rounded-3xl border ${
        dark ? "border-white/10 bg-white/5" : "border-stone-200/70 bg-white/80"
      }`}
    >
      <CardContent className="min-w-0 overflow-hidden p-6">
        <p
          className={`min-w-0 break-words text-sm ${
            dark ? "text-stone-300" : "text-stone-500"
          }`}
        >
          {label}
        </p>

        <div
          className={`mt-2 min-w-0 break-words text-3xl font-bold leading-tight ${
            dark ? "text-stone-50" : "text-stone-900"
          }`}
        >
          {value}
        </div>

        <p
          className={`mt-2 min-w-0 break-words text-sm leading-6 ${
            dark ? "text-stone-400" : "text-stone-600"
          }`}
        >
          {sublabel}
        </p>
      </CardContent>
    </Card>
  );
}