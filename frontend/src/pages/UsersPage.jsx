import { useEffect, useState } from "react";
import API from "../services/api";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await API.get("/users");
      setUsers(response.data.data || []);
    } catch (error) {
      setError("Failed to load users.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      if (editingUser) {
        const response = await API.put(`/users/${editingUser.id}`, formData);
        setMessage(response.data.message);
        setEditingUser(null);
      } else {
        const response = await API.post("/users", formData);
        setMessage(response.data.message);
      }

      setError("");
      fetchUsers();
    } catch (error) {
      setError("Failed to save user.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await API.delete(`/users/${id}`);
      setMessage(response.data.message);
      setError("");
      fetchUsers();
    } catch (error) {
      setError("Failed to delete user.");
    }
  };

  return (
    <div>
      <h1>Users</h1>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
      <UserForm onSubmit={handleSubmit} editingUser={editingUser} onCancel={() => setEditingUser(null)} />
      <UserList users={users} onEdit={setEditingUser} onDelete={handleDelete} />
    </div>
  );
}

export default UsersPage;