import React from "react";
import "./Skill.css";
import Lang from "./SkillLan";
import SkillItem from "./SkillItem";

function Skill() {
  return (
    <section className="py-36 bg-gray-950 text-white -mt-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 mt-4 bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text">
          My Skills
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {Lang.map((skill, i) => (
            <SkillItem key={i} lang={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
