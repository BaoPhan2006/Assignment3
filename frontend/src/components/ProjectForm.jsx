import React, { useEffect, useState } from "react";

function ProjectForm({ onSubmit, editingProject, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    completion: "",
    description: ""
  });

  useEffect(() => {
    if (editingProject) {
      const formattedDate = editingProject.completion
        ? new Date(editingProject.completion).toISOString().split("T")[0]
        : "";

      setFormData({
        title: editingProject.title || "",
        completion: formattedDate,
        description: editingProject.description || ""
      });
    } else {
      setFormData({
        title: "",
        completion: "",
        description: ""
      });
    }
  }, [editingProject]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <input type="date" name="completion" value={formData.completion} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <button type="submit">{editingProject ? "Update Project" : "Add Project"}</button>
      {editingProject && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default ProjectForm;