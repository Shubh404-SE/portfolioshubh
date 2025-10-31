import React, { useState, useEffect } from "react";

export default function AddEditProject({ onClose, onAdd, onEdit, editData }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    tags: [],
    image: "",
    github: "",
    live: "",
  });
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput && !form.tags.includes(tagInput)) {
      setForm({ ...form, tags: [...form.tags, tagInput] });
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag) => {
    setForm({ ...form, tags: form.tags.filter((t) => t !== tag) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editData ? onEdit(form) : onAdd(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#26293c] w-[90%] sm:w-[600px] p-6 rounded-xl text-gray-200 shadow-2xl">
        <h2 className="text-xl font-bold text-blue-400 mb-4">
          {editData ? "Edit Project" : "Add New Project"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="bg-[#1f2233] px-4 py-2 rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="bg-[#1f2233] px-4 py-2 rounded"
            rows="3"
          />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="text"
                placeholder="Add Tag"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                className="bg-[#1f2233] px-3 py-2 rounded flex-1"
              />
              <button
                onClick={handleAddTag}
                className="bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs cursor-pointer"
                  onClick={() => handleRemoveTag(tag)}
                >
                  {tag} ✕
                </span>
              ))}
            </div>
          </div>

          <input
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="bg-[#1f2233] px-4 py-2 rounded"
          />
          <input
            name="github"
            placeholder="GitHub Link"
            value={form.github}
            onChange={handleChange}
            className="bg-[#1f2233] px-4 py-2 rounded"
          />
          <input
            name="live"
            placeholder="Live Demo Link"
            value={form.live}
            onChange={handleChange}
            className="bg-[#1f2233] px-4 py-2 rounded"
          />

          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-semibold"
            >
              {editData ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
