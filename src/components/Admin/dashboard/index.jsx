import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#1b1f2f] text-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-400 mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-[90%] sm:w-[600px]">
        <button
          onClick={() => navigate("/admin/projects")}
          className="bg-[#26293c] hover:bg-blue-600 py-6 rounded-lg text-lg font-semibold shadow-md transition"
        >
          Manage Projects
        </button>
        <button
          onClick={() => navigate("/admin/skills")}
          className="bg-[#26293c] hover:bg-blue-600 py-6 rounded-lg text-lg font-semibold shadow-md transition"
        >
          Manage Skills
        </button>
        <button
          onClick={() => navigate("/admin/contacts")}
          className="bg-[#26293c] hover:bg-blue-600 py-6 rounded-lg text-lg font-semibold shadow-md transition"
        >
          View Contacts
        </button>
      </div>

      <button
        onClick={logout}
        className="mt-10 px-6 py-2 bg-red-500 hover:bg-red-600 rounded font-semibold"
      >
        Logout
      </button>
    </div>
  );
}