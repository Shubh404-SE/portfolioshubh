import React from "react";

export default function Alert({ alert, showaltr }) {
  const [name, email] = alert;

  if (!showaltr) return null;

  return (
    <div
      className="
        fixed top-28 right-1/3
        sm:right-10
        bg-green-500/90
        rounded-lg shadow-lg
        px-6 py-4
        z-50
        text-center
        text-white
        font-semibold
        transition-all duration-700 ease-in-out
        animate-fade-in
      "
    >
      <strong className="text-violet-300 block text-lg mb-1">
        *** Message Sent ***
      </strong>
      <p>
        Thanks for reaching out,{" "}
        <span className="text-white font-bold">{name}</span>.
        <br />
        I’ll reply soon at <span className="text-violet-200">{email}</span>.
      </p>
    </div>
  );
}
