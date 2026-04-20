import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { traditionalVsAi } from "../../data/charts";

const CustomizedAxisTick = ({ x, y, payload, darkMode }) => {
  const words = payload.value.split(" ");

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={22}
        textAnchor="middle"
        fill={darkMode ? "#e7e5e4" : "#44403c"}
        fontSize={12}
      >
        {words.map((word, index) => (
          <tspan key={index} x="0" dy={index === 0 ? 0 : 14}>
            {word}
          </tspan>
        ))}
      </text>
    </g>
  );
};

export default function ComparisonRadarChart({ darkMode }) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={traditionalVsAi}
          margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis
            dataKey="metric"
            interval={0}
            height={70}
            tickMargin={12}
            tick={(props) => (
              <CustomizedAxisTick {...props} darkMode={darkMode} />
            )}
          />
          <YAxis tick={{ fill: darkMode ? "#a8a29e" : "#78716c" }} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="traditional"
            name="Traditional"
            fill="#78716c"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="ai"
            name="AI-Enhanced"
            fill="#10b981"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}