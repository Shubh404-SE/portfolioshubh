import React, { useEffect, useState } from "react";
import SkillCardAdmin from "./SkillCardAdmin";
import AddEditSkillModal from "./AddEditSkillModel";
import {
  addSkill,
  deleteSkill,
  getAllSkills,
  updateSkill,
} from "../../../utils/Routes";

export default function AdminSkills() {
  const [skills, setSkills] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editSkill, setEditSkill] = useState(null);

  const fetchSkills = async () => {
    try {
      const data = await getAllSkills();
      setSkills(data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleAddSkill = async (newSkill) => {
    try {
      const data = await addSkill(newSkill);
      setSkills((prev) => [data, ...prev]);
    } catch (err) {
      console.error("Error adding skill:", err);
    }
  };

  const handleEditSkill = async (updatedSkill) => {
    console.log("Updating skill:", updatedSkill);
    try {
      const data = await updateSkill(updatedSkill._id, updatedSkill);
      if (data._id)
        setSkills((prev) =>
          prev.map((s) => (s._id === updatedSkill._id ? updatedSkill : s))
        );
    } catch (err) {
      console.error("Error editing skill:", err);
    }
  };

  const handleDeleteSkill = async (id) => {
    try {
      const data = await deleteSkill(id);
      if (data) setSkills((prev) => prev.filter((s) => s._id !== id));
    } catch (err) {
      console.error("Error deleting skill:", err);
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
              key={skill._id}
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
