import React, { useState } from "react";
import SummaryCard from "./SummaryCard";
import DashboardChart from "./DashboardChart";
import { FaCode, FaBrain, FaEnvelope, FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  // Mock data for summary cards
  const [data] = useState({
    projects: 12,
    skills: 8,
    messages: 5,
  });

  return (
    <div className="min-h-screen bg-[#1b1f2f] text-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-blue-400">Admin Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome back, Shubham 👋</p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-semibold"
        >
          View Website
        </button>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <SummaryCard
          icon={<FaCode />}
          title="Projects"
          count={data.projects}
          color="from-blue-500 to-cyan-400"
          onClick={() => navigate("/admin/projects")}
        />
        <SummaryCard
          icon={<FaBrain />}
          title="Skills"
          count={data.skills}
          color="from-green-500 to-lime-400"
          onClick={() => navigate("/admin/skills")}
        />
        <SummaryCard
          icon={<FaEnvelope />}
          title="Messages"
          count={data.messages}
          color="from-pink-500 to-rose-400"
          onClick={() => navigate("/admin/messages")}
        />
      </div>


      <div className="bg-[#26293c] p-6 rounded-xl shadow-lg mb-10">
        <h2 className="text-xl font-semibold text-blue-400 mb-4">Portfolio Overview</h2>
        <DashboardChart />
      </div>

   
      <div className="bg-[#26293c] p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-blue-400 mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <button
            onClick={() => navigate("/admin/projects")}
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold transition"
          >
            <FaPlusCircle /> Manage Projects
          </button>

          <button
            onClick={() => navigate("/admin/skills")}
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold transition"
          >
            <FaPlusCircle /> Manage Skills
          </button>

          <button
            onClick={() => navigate("/admin/messages")}
            className="flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 py-3 rounded-lg font-semibold transition"
          >
            <FaPlusCircle /> View Messages
          </button>
        </div>
      </div>

   
      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Shubham Tanwar — Admin Control Panel
      </div>
    </div>
  );
}