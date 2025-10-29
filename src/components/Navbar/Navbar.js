import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import icon from "../../assestes/icon.png";

const navlinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Skills", path: "/skills" },
  { title: "Education", path: "/educationqualifications" },
  { title: "Services", path: "/services" },
  { title: "Projects", path: "/projectdetails" },
  { title: "Contact", path: "/contactme" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
        setMobileOpen(false);
      } else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-4 z-50 transition-all duration-300 ${
        scrolled && !mobileOpen
          ? "backdrop-blur-md bg-[#0d1117]/80 border-b border-gray-700"
          : "bg-transparent"
      }`}
    >
      <Link
        to="/"
        onClick={handleNavClick}
        className="flex items-center gap-1 text-white font-semibold text-lg hover:text-blue-400 transition-colors"
      >
        <img
          src={icon}
          alt="Logo"
          className="w-6 h-6 rounded-full bg-blue-500 shadow-md"
        />
        <h3 className="tracking-wide">
          hubham <span className="text-blue-400">Tanwar</span>
        </h3>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-6 text-gray-200 font-medium">
        {navlinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            onClick={handleNavClick}
            className={({ isActive }) =>
              `relative group transition-colors duration-200 ${
                isActive ? "text-blue-400" : "hover:text-blue-400"
              }`
            }
          >
            {link.title}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </NavLink>
        ))}

        <a
          href="https://github.com/Shubh404-SE"
          target="_blank"
          rel="noreferrer"
          className="ml-4 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <FaGithub size={26} />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-white focus:outline-none text-2xl z-30"
      >
        {mobileOpen ? <VscChromeClose /> : <SlMenu />}
      </button>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#161b22] text-gray-200 transform z-20 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out shadow-xl flex flex-col justify-between py-6 px-6`}
      >
        <div className="flex flex-col gap-4 mt-10 text-lg font-medium">
          {navlinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `block py-2 border-b border-gray-700 ${
                  isActive ? "text-blue-400" : "hover:text-blue-400"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-blue-400 mb-6">
          <FaGithub size={26} />
          <a
            href="https://github.com/Shubh404-SE"
            target="_blank"
            rel="noreferrer"
            className="text-lg hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </nav>
  );
}
