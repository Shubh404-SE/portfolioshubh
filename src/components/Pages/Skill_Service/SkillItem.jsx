import React from 'react'

const SkillItem = (props) => {

  const { language, percentage } = props.lang;

  return (
    <div
      data-aos="fade-up" data-aos-duration="3000"
      className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-lg font-semibold mb-3">{language}</h3>

      <div className="relative w-24 h-24 mb-3">
        <svg className="w-full h-full">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeDasharray={`${2 * Math.PI * 40}`}
            strokeDashoffset={`${2 * Math.PI * 40 * (1 - percentage / 100)}`}
            strokeLinecap="round"
            fill="none"
            className="transition-all duration-700 ease-in-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-cyan-400">
          {percentage}%
        </span>
      </div>
    </div>
  );
}

export default SkillItem;
