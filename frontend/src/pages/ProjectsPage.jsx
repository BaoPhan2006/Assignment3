import React, { useEffect, useState } from "react";
import API from "../services/api";
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchProjects = async () => {
    try {
      const response = await API.get("/projects");
      setProjects(response.data.data || []);
    } catch (error) {
      setError("Failed to load projects.");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      if (editingProject) {
        const response = await API.put(`/projects/${editingProject.id}`, formData);
        setMessage(response.data.message);
        setEditingProject(null);
      } else {
        const response = await API.post("/projects", formData);
        setMessage(response.data.message);
      }

      setError("");
      fetchProjects();
    } catch (error) {
      setError("Failed to save project.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await API.delete(`/projects/${id}`);
      setMessage(response.data.message);
      setError("");
      fetchProjects();
    } catch (error) {
      setError("Failed to delete project.");
    }
  };

  return (
    <div>
      <h1>Projects</h1>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
      <ProjectForm onSubmit={handleSubmit} editingProject={editingProject} onCancel={() => setEditingProject(null)} />
      <ProjectList projects={projects} onEdit={setEditingProject} onDelete={handleDelete} />
    </div>
  );
}

export default ProjectsPage;