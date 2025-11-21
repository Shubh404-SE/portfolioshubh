import React, { useEffect } from "react";
import SkillItem from "./SkillItem";
import { getAllSkills } from "../../../utils/Routes";

export default function Skill() {
  const [skills, setSkills] = React.useState([]);
    const fetchSkills = async () => {
      try {
        const data = await getAllSkills();
        if(data) setSkills(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
  
    useEffect(() => {
      fetchSkills();
    }, []);


  return (
    <section className="bg-gray-950 text-white py-24 px-4">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 mt-4 p-2 bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text">
          My Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, i) => (
            <SkillItem key={skill._id} lang={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}