import React, { useEffect, useState } from "react";

function ServiceForm({ onSubmit, editingService, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  useEffect(() => {
    if (editingService) {
      setFormData({
        title: editingService.title || "",
        description: editingService.description || ""
      });
    } else {
      setFormData({
        title: "",
        description: ""
      });
    }
  }, [editingService]);

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
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <button type="submit">{editingService ? "Update Service" : "Add Service"}</button>
      {editingService && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default ServiceForm;