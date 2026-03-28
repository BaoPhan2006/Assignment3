import { useEffect, useState } from "react";

function ReferenceForm({ onSubmit, editingReference, onCancel }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    position: "",
    company: ""
  });

  useEffect(() => {
    if (editingReference) {
      setFormData({
        firstname: editingReference.firstname || "",
        lastname: editingReference.lastname || "",
        email: editingReference.email || "",
        position: editingReference.position || "",
        company: editingReference.company || ""
      });
    } else {
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        position: "",
        company: ""
      });
    }
  }, [editingReference]);

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
      <input name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required />
      <input name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input name="position" placeholder="Position" value={formData.position} onChange={handleChange} required />
      <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
      <button type="submit">{editingReference ? "Update Reference" : "Add Reference"}</button>
      {editingReference && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default ReferenceForm;