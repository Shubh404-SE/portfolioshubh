import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";

export default function Alert({ alert, form }) {
  const [progress, setProgress] = useState(100);
  useEffect(() => {
    if (alert.show) {
      setProgress(100);
      const timer = setInterval(() => {
        setProgress((prev) => (prev > 0 ? prev - 1 : 0));
      }, 30);
      return () => clearInterval(timer);
    }
  }, [alert.show]);

  if (!alert.show) return null;

  // Select icon and color based on alert type
  const icon =
    alert.type === "success" ? (
      <CheckCircleIcon className="text-green-300 text-3xl" />
    ) : alert.type === "error" ? (
      <ErrorIcon className="text-rose-300 text-3xl" />
    ) : (
      <InfoIcon className="text-blue-300 text-3xl" />
    );

  const bgColor =
    alert.type === "success"
      ? "from-green-600/90 to-emerald-700/90"
      : alert.type === "error"
      ? "from-red-600/90 to-rose-700/90"
      : "from-sky-600/90 to-blue-700/90";

  const barColor =
    alert.type === "success"
      ? "from-green-300 to-emerald-500"
      : alert.type === "error"
      ? "from-rose-400 to-red-500"
      : "from-sky-300 to-blue-500";

  return (
    <div
      className={`fixed top-6 right-6 sm:right-10 z-50 w-80 sm:w-96 
        rounded-2xl shadow-2xl backdrop-blur-md 
        border border-white/10 text-white 
        bg-gradient-to-br ${bgColor} 
        animate-slide-in transition-all duration-700 ease-in-out`}
    >
      <div className="absolute inset-0 rounded-2xl blur-xl opacity-25 bg-gradient-to-br from-white/20 to-transparent"></div>

      <div className="relative px-6 py-5 text-center">
        <div className="flex justify-center mb-2">{icon}</div>

        <h4 className="text-xl font-bold text-white mb-1 tracking-wide">
          {alert.message}
        </h4>

        {alert.type === "success" && (
          <p className="text-sm text-gray-200 leading-relaxed">
            Thank you,{" "}
            <span className="font-semibold text-violet-200">
              {form.name || "friend"}
            </span>
            . I’ll get back to you soon at{" "}
            <span className="font-semibold text-violet-300">
              {form.email || "your email"}
            </span>
            .
          </p>
        )}
      </div>


      <div className="relative w-full h-1.5 bg-white/20 rounded-b-2xl overflow-hidden">
        <div
          className={`absolute left-0 top-0 h-full transition-all duration-100 ease-linear bg-gradient-to-r ${barColor}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}