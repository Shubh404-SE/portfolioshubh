import React, { useState } from "react";
import { SiC, SiCplusplus, SiPython, SiJavascript, SiReact, SiCss3, SiHtml5 } from "react-icons/si";
import SkillCardAdmin from "./SkillCardAdmin";
import AddEditSkillModal from "./AddEditSkillModel";

export default function AdminSkills() {
  const [skills, setSkills] = useState([
    { id: 1, language: "C", percentage: 76, icon: <SiC className="text-sky-400 text-5xl" /> },
    { id: 2, language: "C++", percentage: 80, icon: <SiCplusplus className="text-blue-400 text-5xl" /> },
    { id: 3, language: "Python", percentage: 45, icon: <SiPython className="text-yellow-400 text-5xl" /> },
    { id: 4, language: "JavaScript", percentage: 71, icon: <SiJavascript className="text-yellow-300 text-5xl" /> },
    { id: 5, language: "React", percentage: 75, icon: <SiReact className="text-cyan-400 text-5xl" /> },
    { id: 6, language: "CSS", percentage: 85, icon: <SiCss3 className="text-blue-500 text-5xl" /> },
    { id: 7, language: "HTML", percentage: 91, icon: <SiHtml5 className="text-orange-500 text-5xl" /> },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editSkill, setEditSkill] = useState(null);

  const handleAddSkill = (newSkill) => {
    setSkills((prev) => [...prev, { ...newSkill, id: Date.now() }]);
  };

  const handleEditSkill = (updatedSkill) => {
    setSkills((prev) =>
      prev.map((s) => (s.id === updatedSkill.id ? updatedSkill : s))
    );
  };

  const handleDeleteSkill = (id) => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      setSkills((prev) => prev.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#1b1f2f] text-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-400">Manage Skills</h1>
        <button
          onClick={() => {
            setEditSkill(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-semibold"
        >
          + Add Skill
        </button>
      </div>

      {skills.length === 0 ? (
        <p className="text-gray-400 text-center mt-10">No skills added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCardAdmin
              key={skill.id}
              skill={skill}
              onEdit={(s) => {
                setEditSkill(s);
                setIsModalOpen(true);
              }}
              onDelete={handleDeleteSkill}
            />
          ))}
        </div>
      )}

      {isModalOpen && (
        <AddEditSkillModal
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddSkill}
          onEdit={handleEditSkill}
          editData={editSkill}
        />
      )}
    </div>
  );
}