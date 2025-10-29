import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SecurityIcon from "@mui/icons-material/Security";
import ApiIcon from "@mui/icons-material/Api";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <WebIcon className="text-violet-400 text-5xl" />,
      title: "Frontend Engineering",
      desc: "Building immersive, responsive interfaces with React and Next.js. I turn ideas into elegant, high-performance web experiences.",
      aos: "fade-right",
    },
    {
      id: 2,
      icon: <CodeIcon className="text-violet-400 text-5xl" />,
      title: "Full-Stack Development",
      desc: "From concept to deployment — I design and build complete web applications with React, Node.js, and PostgreSQL, ensuring seamless integration across layers.",
      aos: "zoom-out-up",
    },
    {
      id: 3,
      icon: <ApiIcon className="text-violet-400 text-5xl" />,
      title: "API Architecture",
      desc: "Designing clean, secure, and scalable REST APIs that make data flow effortlessly between systems — because performance starts with architecture.",
      aos: "fade-left",
    },
    {
      id: 4,
      icon: <StorageIcon className="text-violet-400 text-5xl" />,
      title: "Database Design",
      desc: "Crafting optimized schemas and queries with PostgreSQL and Prisma — balancing performance, scalability, and clarity in every layer of data.",
      aos: "fade-right",
    },
    {
      id: 5,
      icon: <SecurityIcon className="text-violet-400 text-5xl" />,
      title: "Secure Deployment",
      desc: "Deploying and maintaining applications with best practices in security, environment handling, and continuous delivery — ensuring reliability and trust.",
      aos: "fade-left",
    },
    {
      id: 6,
      icon: <AutoAwesomeIcon className="text-violet-400 text-5xl" />,
      title: "Performance & Optimization",
      desc: "Auditing, refactoring, and fine-tuning apps for speed, accessibility, and SEO. Small improvements can make big differences in user experience.",
      aos: "zoom-in-up",
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
            What I Do
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I’m a full-stack web developer who builds smooth, scalable, and
            human-centered web experiences — from polished interfaces to
            rock-solid backends.
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
      </div>
    </section>
  );
}