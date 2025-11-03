import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function DashboardChart() {
  const data = [
    { month: "Jan", projects: 3, skills: 5, messages: 2 },
    { month: "Feb", projects: 4, skills: 6, messages: 3 },
    { month: "Mar", projects: 5, skills: 7, messages: 4 },
    { month: "Apr", projects: 6, skills: 7, messages: 5 },
    { month: "May", projects: 8, skills: 8, messages: 7 },
    { month: "Jun", projects: 9, skills: 9, messages: 6 },
    { month: "Jul", projects: 12, skills: 10, messages: 9 },
  ];

  return (
    <div className="w-full h-80">
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="month" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "none",
              borderRadius: "10px",
            }}
            labelStyle={{ color: "#60a5fa" }}
          />
          <Legend />
          <Line type="monotone" dataKey="projects" stroke="#60a5fa" strokeWidth={2} />
          <Line type="monotone" dataKey="skills" stroke="#34d399" strokeWidth={2} />
          <Line type="monotone" dataKey="messages" stroke="#f472b6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}