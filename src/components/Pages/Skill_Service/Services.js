import React from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import LaptopIcon from "@mui/icons-material/Laptop";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <DiamondIcon className="text-violet-400 text-5xl" />,
      title: "Web Design",
      desc: "I strive for two things in design: simplicity and clarity. Great design is born of those two things.",
      aos: "fade-right",
    },
    {
      id: 2,
      icon: <LaptopIcon className="text-violet-400 text-5xl" />,
      title: "Web Development",
      desc: "Responsive, fast, and accessible websites — crafted with precision and scalability in mind.",
      aos: "zoom-out-up",
    },
    {
      id: 3,
      icon: (
        <IntegrationInstructionsIcon className="text-violet-400 text-5xl" />
      ),
      title: "API Development",
      desc: "Building powerful, secure, and efficient APIs that make systems talk seamlessly with each other.",
      aos: "fade-left",
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-gray-900 via-gray-850 to-gray-800 py-28 text-gray-300"
    >
      <div className="container mx-auto px-6 lg:px-16 text-center">
        {/* Section Heading */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Services
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I help startups and businesses grow through efficient, modern web
            solutions.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {services.map((service) => (
            <div
              key={service.id}
              data-aos={service.aos}
              className="relative group bg-gray-800/50 border border-gray-700/40 
                        rounded-2xl p-8 shadow-lg hover:shadow-violet-500/30 
                        hover:border-violet-500/40 transition-all duration-500 
                        hover:scale-105 backdrop-blur-lg flex flex-col items-center"
            >
              {/* Icon Bubble */}
              <div
                className="mb-6 flex items-center justify-center w-20 h-20 
                           rounded-full bg-violet-600/20 group-hover:bg-violet-500/30 
                           ring-2 ring-violet-500/30 group-hover:ring-violet-400/50 
                           transition-all duration-500 ease-in-out transform 
                           group-hover:scale-110"
              >
                {service.icon}
              </div>

              <h2 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                {service.desc}
              </p>

              {/* Hover Accent Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 
                           bg-gradient-to-tr from-violet-600/10 via-transparent to-transparent 
                           rounded-2xl blur-2xl transition-all duration-500"
              ></div>
            </div>
          ))}
        </div>

        {/* Closing Section */}
        <div
          data-aos="zoom-in"
          className="mt-20 max-w-xl mx-auto text-center text-gray-300"
        >
          <h2 className="text-3xl font-semibold text-white mb-4">
            Why Work With Me?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I’m a dedicated problem solver who values clear communication and
            deep understanding. I invest time in your goals — to deliver not
            just results, but reliability.
          </p>
        </div>
      </div>
    </section>
  );
}