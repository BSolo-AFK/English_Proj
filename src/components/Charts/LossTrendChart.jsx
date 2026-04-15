import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function LossTrendChart({ trendData, darkMode }) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={trendData}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis
            dataKey="name"
            tick={{ fill: darkMode ? "#d6d3d1" : "#57534e" }}
          />
          <YAxis tick={{ fill: darkMode ? "#d6d3d1" : "#57534e" }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="loss"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}