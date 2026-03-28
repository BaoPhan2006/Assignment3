import { useEffect, useState } from "react";
import API from "../services/api";
import ReferenceForm from "../components/ReferenceForm";
import ReferenceList from "../components/ReferenceList";

function ReferencesPage() {
  const [references, setReferences] = useState([]);
  const [editingReference, setEditingReference] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchReferences = async () => {
    try {
      const response = await API.get("/references");
      setReferences(response.data.data || []);
    } catch (error) {
      setError("Failed to load references.");
    }
  };

  useEffect(() => {
    fetchReferences();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      if (editingReference) {
        const response = await API.put(`/references/${editingReference.id}`, formData);
        setMessage(response.data.message);
        setEditingReference(null);
      } else {
        const response = await API.post("/references", formData);
        setMessage(response.data.message);
      }

      setError("");
      fetchReferences();
    } catch (error) {
      setError("Failed to save reference.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await API.delete(`/references/${id}`);
      setMessage(response.data.message);
      setError("");
      fetchReferences();
    } catch (error) {
      setError("Failed to delete reference.");
    }
  };

  return (
    <div>
      <h1>References</h1>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
      <ReferenceForm onSubmit={handleSubmit} editingReference={editingReference} onCancel={() => setEditingReference(null)} />
      <ReferenceList references={references} onEdit={setEditingReference} onDelete={handleDelete} />
    </div>
  );
}

export default ReferencesPage;