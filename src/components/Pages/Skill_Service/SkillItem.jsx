import React, { useRef, useState } from "react";
import { techIcons } from "../../../utils/skillIcons";

const SkillItem = (props) => {
  const { language, percentage} = props.lang;
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const animationRef = useRef(null);
  const radius = 48;
  const circumference = 2 * Math.PI * radius;

  const IconComponent = techIcons[language];
  // Start animation on hover
  const handleMouseEnter = () => {
    cancelAnimationFrame(animationRef.current);
    setShowProgress(true);
    let start = 0;
    const animate = () => {
      start += 1; 
      if (start < percentage) {
        setProgress(start);
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setProgress(percentage);
      }
    };
    animationRef.current = requestAnimationFrame(animate);
  };

  // Reset when hover ends
  const handleMouseLeave = () => {
    cancelAnimationFrame(animationRef.current);
    const decrease = () => {
      setShowProgress(false);
      setProgress((prev) => {
        if (prev > 0) {
          animationRef.current = requestAnimationFrame(decrease);
          return Math.max(prev - 3, 0); 
        }
        return 0;
      });
    };
    requestAnimationFrame(decrease);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="
        relative group w-64 h-72 
        bg-gradient-to-br from-gray-900/60 to-gray-800/30 
        backdrop-blur-md border border-gray-700/50 rounded-3xl 
        overflow-hidden cursor-pointer
        hover:border-cyan-400/60 transition-all duration-500
        hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.6)]
        flex flex-col items-center justify-center
      "
    >
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>
      <div className="text-5xl mb-4 text-cyan-400 drop-shadow-md">{IconComponent}</div>
      <h3 className="text-lg font-semibold text-white tracking-wide mb-6">
        {language}
      </h3>

      <div className="relative w-28 h-28">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="url(#grad)"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress / 100)}
            strokeLinecap="round"
            fill="none"
            className="transition-all duration-200 ease-linear"
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>
        </svg>

        <div
          className="absolute inset-0 rounded-full blur-xl transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)`,
            opacity: progress > 0 ? 1 : 0,
          }}
        ></div>

        <span className="absolute inset-0 flex items-center justify-center text-cyan-400 text-xl font-bold">
          {showProgress ? progress : percentage}%
        </span>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  );
};

export default SkillItem;
