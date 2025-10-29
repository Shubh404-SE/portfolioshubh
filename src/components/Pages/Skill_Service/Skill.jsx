import React from "react";
import Lang from "./SkillLan";
import SkillItem from "./SkillItem";

function Skill() {
  return (
    <section className="bg-gray-950 text-white py-10 px-4">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 mt-4 p-2 bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text">
          My Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {Lang.map((skill, i) => (
            <SkillItem key={i} lang={skill} />
          ))}
        </div>

        {/* Closing Section */}
        <div
          data-aos="zoom-in"
          className="mt-20 max-w-xl mx-auto text-center text-gray-300"
        >
          <h2 className="text-3xl font-semibold text-white mb-4">
            Why Collaborate With Me?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Every project deserves focus and finesse. I bring both — technical
            precision, creative insight, and a commitment to building something
            that truly matters. Not just code — craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
}