import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.email === "admin@example.com" && formData.password === "admin123") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials!");
    }
    // Uncomment below to enable real API login
    /*
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("adminToken", data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message);
    }
    */
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
            className="bg-blue-500 hover:bg-blue-600 py-2 rounded font-semibold text-white transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}