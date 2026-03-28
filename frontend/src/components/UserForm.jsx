import  { useEffect, useState } from "react";

function UserForm({ onSubmit, editingUser, onCancel }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    if (editingUser) {
      setFormData({
        firstname: editingUser.firstname || "",
        lastname: editingUser.lastname || "",
        email: editingUser.email || "",
        password: editingUser.password || ""
      });
    } else {
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      });
    }
  }, [editingUser]);

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
      <input name="password" placeholder="Password" value={formData.password} onChange={handleChange} type="password"required />

      <button type="submit">{editingUser ? "Update User" : "Add User"}</button>
      {editingUser && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default UserForm;