import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../utils/Routes.js";

export default function AdminLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await login(formData.email, formData.password);
      if (data?.token) {
        localStorage.setItem("adminToken", data.token);
        setTimeout(() => navigate("/admin/dashboard"), 100);
      } else {
        setError("Invalid login response");
      }
      return data;
    } catch (err) {
      console.error("Login failed:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#1b1f2f] flex items-center justify-center">
      <div className="bg-[#26293c] rounded-xl shadow-xl p-8 w-[90%] sm:w-[400px] text-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
          Admin Login
        </h2>

        {error && (
          <p className="bg-red-500 text-white p-2 mb-4 rounded text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Admin Email"
            className="px-4 py-2 bg-[#1f2233] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="px-4 py-2 bg-[#1f2233] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 py-2 rounded font-semibold text-white transition duration-300 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}
