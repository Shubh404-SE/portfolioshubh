import React, { useEffect, useState } from "react";
import { FaEnvelopeOpenText, FaUserCircle, FaTrash } from "react-icons/fa";
import { fetchMessages, deleteMessage } from "../../../utils/Routes.js";
import Alert from "../../Alert/Alert.js";

export default function AdminContacts() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [sending, setSending] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  useEffect(() => {
    const fetchMessagesData = async () => {
      try {
        const response = await fetchMessages();
        setMessages(response);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessagesData();
  }, []);

  const handleEmailClick = (email, name, message) => {
    const subject = encodeURIComponent(`Reply to your message, ${name}`);
    const body = encodeURIComponent(
      `Hello ${name},\n\nI received your message:\n"${message}"\n\nLet's discuss more.\n\nRegards,\nShubham`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const handleDelete = async (id) => {
    setSending(true);
    setAlert({ show: false, type: "", message: "" });
    try {
      setDeletingId(id);
      const data = await deleteMessage(id);
      
      setMessages((prev) => prev.filter((msg) => msg._id !== id));
      setAlert({
        show: true,
        type: "success",
        message: "✅ Message deleted successfully!",
      });
    } catch (err) {
      setAlert({
        show: true,
        type: "error",
        message: "⚠️ Something went wrong. Please try again.",
      });
      console.error("Delete failed:", err);
    } finally {
      setDeletingId(null);
      setTimeout(() => {
        setAlert({ show: false, type: "", message: "" });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#1b1f2f] p-8">
      <h1 className="text-3xl font-bold text-blue-400 mb-8">Messages</h1>

      {alert.show && (
              <Alert alert={alert}/>
            )}

      {loading ? (
        <div className="text-gray-400 text-center mt-20">Loading...</div>
      ) : messages.length === 0 ? (
        <div className="text-gray-400 text-center mt-20">No messages.</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="relative bg-white/5 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(0,112,244,0.4)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <FaUserCircle className="text-4xl text-blue-400" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-100">
                    {msg.name}
                  </h2>
                  <button
                    className="text-blue-300 hover:text-blue-200 text-sm underline underline-offset-2"
                    onClick={() =>
                      handleEmailClick(msg.email, msg.name, msg.message)
                    }
                  >
                    {msg.email}
                  </button>
                </div>
              </div>

              <div className="relative bg-[#1f2233]/80 p-4 rounded-lg border border-gray-600 text-gray-200">
                <FaEnvelopeOpenText className="absolute -top-3 right-3 text-blue-400 bg-[#1b1f2f] p-1 rounded-full" />
                <p className="whitespace-pre-wrap">{msg.message}</p>
              </div>

              <div className="mt-5 flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  {new Date(msg.createdAt).toLocaleString()}
                </span>
                <button
                  onClick={() => handleDelete(msg._id)}
                  disabled={deletingId === msg._id}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition"
                >
                  <FaTrash />
                  {deletingId === msg._id ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
