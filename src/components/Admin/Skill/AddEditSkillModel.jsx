import React, { useState, useEffect } from "react";
import { techIcons } from "../../../utils/skillIcons";

export default function AddEditSkillModal({
  onClose,
  onAdd,
  onEdit,
  editData,
}) {
  const [form, setForm] = useState({
    language: "",
    percentage: "",
  });

  useEffect(() => {
    if (editData) {
      setForm({
        language: editData.language,
        percentage: editData.percentage,
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const skillData = {
      language: form.language.charAt(0).toUpperCase() + form.language.slice(1),
      percentage: Number(form.percentage),
    };
    if (editData) {
      onEdit({ ...skillData, _id: editData._id });
    } else {
      onAdd(skillData);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#26293c] w-[90%] sm:w-[450px] p-6 rounded-xl text-gray-200 shadow-2xl">
        <h2 className="text-xl font-bold text-blue-400 mb-4">
          {editData ? "Edit Skill" : "Add New Skill"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      
          <div>
            <label className="block mb-1 text-gray-400 text-sm">
              Select Skill:
            </label>
            <select
              name="language"
              value={form.language}
              onChange={handleChange}
              className="bg-[#1f2233] px-3 py-2 rounded w-full"
              required
            >
              <option value="" disabled>Select language</option>
              {Object.keys(techIcons).map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          <input
            name="percentage"
            type="number"
            min="0"
            max="100"
            placeholder="Proficiency (%)"
            value={form.percentage}
            onChange={handleChange}
            className="bg-[#1f2233] px-4 py-2 rounded"
            required
          />

          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-semibold"
            >
              {editData ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
