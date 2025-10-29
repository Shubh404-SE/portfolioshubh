import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 75) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1b1f2f] text-gray-300 py-10 px-6 flex flex-col items-center justify-center">

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-400 transition-all duration-300 ${
          showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        ↑
      </button>


      <div className="text-center space-y-4 max-w-2xl">
        <h2 className="text-lg font-semibold tracking-wide text-white">
          Let’s Build Something Great Together
        </h2>
        <p className="text-sm text-gray-400">
          Always open to collaboration, freelance work, or just an interesting
          conversation about web development.
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/Shubh404-SE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:shubham@example.com"
            className="text-gray-300 hover:text-red-400 transition-transform transform hover:scale-110"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>

      <div className="w-full border-t border-gray-700 mt-8 mb-4"></div>

      <div className="flex flex-col sm:flex-row justify-between items-center w-full text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Shubham Tanwar. All rights reserved.</p>
        <p className="mt-2 sm:mt-0 italic text-gray-500">
          Built with React • TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;