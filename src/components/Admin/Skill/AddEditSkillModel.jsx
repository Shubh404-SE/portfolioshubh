import React, { useState, useEffect } from "react";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiCss3,
  SiHtml5,
} from "react-icons/si";

export default function AddEditSkillModal({ onClose, onAdd, onEdit, editData }) {
  const [form, setForm] = useState({
    language: "",
    percentage: "",
    iconName: "SiReact",
  });

  const icons = {
    SiC: <SiC className="text-sky-400 text-4xl" />,
    SiCplusplus: <SiCplusplus className="text-blue-400 text-4xl" />,
    SiPython: <SiPython className="text-yellow-400 text-4xl" />,
    SiJavascript: <SiJavascript className="text-yellow-300 text-4xl" />,
    SiReact: <SiReact className="text-cyan-400 text-4xl" />,
    SiCss3: <SiCss3 className="text-blue-500 text-4xl" />,
    SiHtml5: <SiHtml5 className="text-orange-500 text-4xl" />,
  };

  useEffect(() => {
    if (editData) {
      const iconKey = Object.keys(icons).find(
        (key) => icons[key].type === editData.icon.type
      );
      setForm({
        language: editData.language,
        percentage: editData.percentage,
        iconName: iconKey || "SiReact",
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const skillData = {
      id: editData ? editData.id : Date.now(),
      language: form.language,
      percentage: Number(form.percentage),
      icon: icons[form.iconName],
    };

    editData ? onEdit(skillData) : onAdd(skillData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#26293c] w-[90%] sm:w-[450px] p-6 rounded-xl text-gray-200 shadow-2xl">
        <h2 className="text-xl font-bold text-blue-400 mb-4">
          {editData ? "Edit Skill" : "Add New Skill"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="language"
            placeholder="Skill Name"
            value={form.language}
            onChange={handleChange}
            className="bg-[#1f2233] px-4 py-2 rounded"
            required
          />

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

          <div>
            <label className="block mb-1 text-gray-400 text-sm">Choose Icon:</label>
            <select
              name="iconName"
              value={form.iconName}
              onChange={handleChange}
              className="bg-[#1f2233] px-3 py-2 rounded w-full"
            >
              {Object.keys(icons).map((key) => (
                <option key={key} value={key}>
                  {key.replace("Si", "")}
                </option>
              ))}
            </select>
          </div>

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