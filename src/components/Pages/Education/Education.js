import vidyabharti from "../../../assestes/vidyabhartiinstitute.jpeg";
import princeschool from "../../../assestes/princeschoollogo.jpeg";
import jnulogo from "../../../assestes/jnulogo.png";

export default function Education() {
  const educationData = [
    {
      id: 1,
      img: vidyabharti,
      year: "2017–2018",
      title: "Adarsh Vidya Mandir School, Nawa City",
      desc: "Completed 10th grade with 91.33%. Built strong foundational knowledge and discipline.",
      aos: "fade-right",
    },
    {
      id: 2,
      img: princeschool,
      year: "2019–2020",
      title: "Prince School, Sikar",
      desc: "Completed 12th with 86.66%. Developed logical thinking and focus on academics.",
      aos: "fade-left",
    },
    {
      id: 3,
      img: jnulogo,
      year: "2020–2025",
      title: "School of Engineering, JNU Delhi",
      desc: "Currently pursuing B.Tech in Computer Science and Engineering. Current CGPA: 7.55, exploring AI and modern web technologies.",
      aos: "fade-right",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 px-4 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-800 text-gray-200 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-10 relative">
        <h1
          className="text-4xl font-bold text-center mb-20 text-white tracking-wide"
          data-aos="fade-up"
        >
          Education Qualifications
        </h1>

        {/* timeline path */}
        {/* <div className="absolute left-1/2 top-48 bottom-0 w-[0px] bg-gradient-to-b from-violet-500/40 via-violet-400/20 to-transparent rounded-full pointer-events-none"></div> */}

        <div className="flex flex-col gap-4 relative">
          {educationData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const lastItem = index === educationData.length - 1;

            return (
              <div
                key={item.id}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                } w-full`}
              >
                {/* Connector line between dots */}
                {!lastItem && (
                  <div className="absolute left-1/2 top-[50%] w-[10px] h-[150%] rounded-full bg-gradient-to-b from-violet-500/40 via-violet-400/20 to-transparent transform -translate-x-1/2 z-0"></div>
                )}

                <div
                  data-aos={item.aos}
                  className={`group w-full sm:w-[46%] bg-gray-800/60 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-lg border border-gray-700/40 hover:shadow-violet-500/20 hover:border-violet-400/30 transition-all duration-300 z-0 ${
                    isLeft
                      ? "sm:mr-[55%] sm:text-right"
                      : "sm:ml-[55%] sm:text-left"
                  }`}
                >
                  <div
                    className={`flex items-center ${
                      isLeft ? "sm:flex-row-reverse" : "sm:flex-row"
                    } gap-4 sm:gap-6`}
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-4 ring-violet-500/50 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:ring-violet-400">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p
                        className={`text-sm text-violet-400 font-semibold mt-3 ${
                          isLeft ? "text-right" : "text-left"
                        }`}
                      >
                        {item.year}
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                        {item.title}
                      </h2>
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div
                  className={`hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-violet-500 shadow-[0_0_15px_3px_rgba(139,92,246,0.7)] ring-2 ring-gray-900`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}