import React from "react";
import { FaEnvelopeOpenText, FaUserCircle } from "react-icons/fa";

export default function AdminContacts() {
  // Mock data for messages replace with backend later
  const messages = [
    {
      id: 1,
      name: "Ravi Sharma",
      email: "ravi.sharma@example.com",
      message:
        "Hi Shubham, I really liked your portfolio. Can we collaborate on a React project together?",
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya.singh@gmail.com",
      message:
        "I found your Swin Transformer project fascinating! Could you share more details about it?",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "amanv23@outlook.com",
      message:
        "Hey, your UI design skills are amazing. Are you open for freelance work this month?",
    },
  ];

  const handleEmailClick = (email, name, message) => {
    const subject = encodeURIComponent(`Reply to your message, ${name}`);
    const body = encodeURIComponent(
      `Hello ${name},\n\nI received your message:\n"${message}"\n\nLet's discuss further.\n\nBest regards,\nShubham`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#1b1f2f] text-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-400 mb-8">Messages</h1>

      {messages.length === 0 ? (
        <p className="text-gray-400 text-center mt-20 text-lg">
          No messages received yet.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-[#26293c] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-4 mb-3">
                <FaUserCircle className="text-4xl text-blue-400" />
                <div>
                  <h2 className="text-lg font-semibold">{msg.name}</h2>
                  <button
                    onClick={() => handleEmailClick(msg.email, msg.name, msg.message)}
                    className="text-blue-400 hover:underline text-sm"
                  >
                    {msg.email}
                  </button>
                </div>
              </div>

              <div className="text-gray-300 text-sm bg-[#1b1f2f] rounded-lg p-4 relative">
                <FaEnvelopeOpenText className="absolute -top-3 right-3 text-blue-400" />
                {msg.message}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}