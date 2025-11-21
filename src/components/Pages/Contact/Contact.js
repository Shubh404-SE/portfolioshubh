import React, { useState } from "react";
import Alert from "../../Alert/Alert";
import { sendMessage } from "../../../utils/Routes";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const BOT_TOKEN = "";
  const CHAT_ID = "";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSending(true);
//     setAlert({ show: false, type: "", message: "" });

//     const text = `
// 📬 *New Message from Portfolio Website*  
// 👤 Name: ${form.name}  
// ✉️ Email: ${form.email}  
// 💬 Message: ${form.message}
// `;

//     try {
//       const res = await fetch(
//         `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             chat_id: CHAT_ID,
//             text,
//             parse_mode: "Markdown",
//           }),
//         }
//       );

//       if (res.ok) {
//         setAlert({
//           show: true,
//           type: "success",
//           message: "✅ Message sent successfully!",
//         });
//       } else {
//         throw new Error("Failed to send message");
//       }
//     } catch (error) {
//       console.error(error);
//       setAlert({
//         show: true,
//         type: "error",
//         message: "⚠️ Something went wrong. Please try again.",
//       });
//     } finally {
//       setSending(false);
//       setTimeout(() => {
//         setAlert({ show: false, type: "", message: "" });
//         setForm({ name: "", email: "", message: "" });
//       }, 3000);
//     }
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setAlert({ show: false, type: "", message: "" });

    try {
      const res = await sendMessage(form);

      if (res.data) {
        setAlert({
          show: true,
          type: "success",
          message: "✅ Message sent successfully!",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setAlert({
        show: true,
        type: "error",
        message: "⚠️ Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
      setTimeout(() => {
        setAlert({ show: false, type: "", message: "" });
        setForm({ name: "", email: "", message: "" });
      }, 3000);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white py-24 px-4">
      <h2 className="text-4xl font-bold mb-8 text-cyan-400">Contact Me</h2>

      {alert.show && (
        <Alert alert={alert} />
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg border border-gray-800"
      >
        <div className="mb-5">
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={sending}
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
            sending
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-90"
          }`}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
