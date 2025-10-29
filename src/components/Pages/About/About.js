import React from "react";
import myimage from "../../../assestes/myphotoAbout.png";
import svgbg from "../../../assestes/blob (3).svg";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col-reverse md:flex-row-reverse items-center justify-between px-6 sm:px-12 lg:px-20 py-24 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-800 overflow-hidden"
    >
      <div
        data-aos="fade-left"
        data-aos-duration="800"
        className="max-w-2xl text-gray-300 mt-10 md:mt-0"
      >
        <h1 className="text-4xl font-bold text-white mb-6 tracking-wide">
          About Me
        </h1>

        <p className="text-lg leading-relaxed mb-4">
          Hello, I’m{" "}
          <span className="text-violet-400 font-semibold">
            Shubham Tanwar
          </span>
          — a passionate <span className="text-violet-300">Computer Science Engineer {" "}</span> 
          who loves blending technology with creativity. My journey began with curiosity and discipline, 
          and over the years, I’ve grown into someone who sees engineering as both a science and an art.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          I believe learning isn’t confined to classrooms — it’s in every project we build, 
          every failure we overcome, and every idea we dare to pursue. My goal is to keep exploring 
          the vast world of <span className="text-violet-300">AI, web technologies, and digital innovation</span> 
          — creating things that make life easier, smarter, and more meaningful.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Outside of coding, I’m fascinated by philosophy, design, and the beauty of 
          simplicity — because I believe that great technology, like great art, 
          always begins with empathy and purpose.
        </p>

        <a
          href="/Resume.pdf"
          download
          className="inline-block bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
        >
          Get Resume
        </a>
      </div>


      <div
        data-aos="fade-right"
        data-aos-duration="800"
        className="relative flex-shrink-0 mb-10 md:mb-0"
      >


        <div className="absolute inset-0 flex justify-center items-center animate-float-slow">
          <img
            src={svgbg}
            alt="Background blob"
            className="w-[22rem] sm:w-[28rem] opacity-70 blur-sm animate-pulse-slow"
          />
        </div>

        <div className="relative z-10">
          <img
            src={myimage}
            alt="Shubham Tanwar"
            className="w-[18rem] sm:w-[22rem] rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 animate-float"
          />
        </div>
      </div>
    </section>
  );
}
