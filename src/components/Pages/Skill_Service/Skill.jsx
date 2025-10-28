import React from "react";
import "./Skill.css";
import Lang from "./SkillLan";
import SkillItem from "./SkillItem";

function Skill() {
  return (
    <section className="pb-36 pt-20 bg-gray-950 text-white -mt-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 mt-4 bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text">
          My Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {Lang.map((skill, i) => (
            <SkillItem key={i} lang={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
