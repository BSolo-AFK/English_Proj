import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { traditionalVsAi } from "../../data/charts";

export default function ComparisonRadarChart({ darkMode }) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={traditionalVsAi}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="metric"
            tick={{ fill: darkMode ? "#e7e5e4" : "#44403c", fontSize: 12 }}
          />
          <PolarRadiusAxis
            tick={{ fill: darkMode ? "#a8a29e" : "#78716c" }}
          />
          <Radar
            name="Traditional"
            dataKey="traditional"
            stroke="#78716c"
            fill="#78716c"
            fillOpacity={0.2}
          />
          <Radar
            name="AI-Enhanced"
            dataKey="ai"
            stroke="#10b981"
            fill="#10b981"
            fillOpacity={0.35}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}