import { useNavigate } from "react-router-dom";
import myimage from "../../assestes/myphotoHome.png";
import svgbg from "../../assestes/blob (2).svg";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="relative flex flex-col-reverse md:flex-row items-center justify-between h-screen
                   px-6 md:px-16 lg:px-28 pt-[50rem] sm:pt-[55rem] md:pt-10 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-800 
                   text-gray-200 overflow-hidden"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="max-w-2xl text-center md:text-left z-0"
        >
          <h3 className="text-xl md:text-2xl font-light text-gray-400 mb-2">
            👋 Hello there,
          </h3>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 text-white leading-tight">
            I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
              Shubham Tanwar
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-violet-400 mb-4">
            Full Stack Web Developer
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
            I build fast, beautiful, and scalable web applications using
            <span className="text-blue-400">
              {" "}
              React, Next.js, Node.js
            </span> and <span className="text-blue-400">PostgreSQL</span>. Every
            line of code I write is crafted to bring clarity, performance, and
            elegance to the web.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/contactme")}
              className="px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-500 
                         text-white font-medium rounded-md shadow-md hover:shadow-violet-500/40 
                         hover:scale-105 transition-transform duration-300"
            >
              Contact Me
            </button>

            <a
              href="src/assestes/Shubham_Resume.pdf"
              download
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium 
                         rounded-md shadow-md hover:shadow-gray-400/30 hover:scale-105 
                         transition-transform duration-300"
            >
              Get Resume
            </a>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="relative flex justify-center items-center w-full md:w-1/2 mt-12 md:mt-0"
        >
          <img
            src={svgbg}
            alt="blob background"
            className="absolute w-[400px] md:w-[500px] animate-pulse-slow opacity-70"
          />
          <img
            src={myimage}
            alt="Shubham Tanwar"
            className="relative w-[280px] md:w-[400px] rounded-full animate-float"
          />
        </div>
      </section>
    </>
  );
}
