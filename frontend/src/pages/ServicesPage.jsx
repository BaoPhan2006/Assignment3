import { useEffect, useState } from "react";
import API from "../services/api";
import ServiceForm from "../components/ServiceForm";
import ServiceList from "../components/ServiceList";

function ServicesPage() {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchServices = async () => {
    try {
      const response = await API.get("/services");
      setServices(response.data.data || []);
    } catch (error) {
      setError("Failed to load services.");
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      if (editingService) {
        const response = await API.put(`/services/${editingService.id}`, formData);
        setMessage(response.data.message);
        setEditingService(null);
      } else {
        const response = await API.post("/services", formData);
        setMessage(response.data.message);
      }

      setError("");
      fetchServices();
    } catch (error) {
      setError("Failed to save service.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await API.delete(`/services/${id}`);
      setMessage(response.data.message);
      setError("");
      fetchServices();
    } catch (error) {
      setError("Failed to delete service.");
    }
  };

  return (
    <div>
      <h1>Services</h1>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
      <ServiceForm onSubmit={handleSubmit} editingService={editingService} onCancel={() => setEditingService(null)} />
      <ServiceList services={services} onEdit={setEditingService} onDelete={handleDelete} />
    </div>
  );
}

export default ServicesPage;