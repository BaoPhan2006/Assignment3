function ProjectList({ projects, onEdit, onDelete }) {
  if (projects.length === 0) return <p>No projects found.</p>;

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id} className="card">
          <p><strong>Title:</strong> {project.title}</p>
          <p><strong>Completion:</strong> {project.completion ? new Date(project.completion).toLocaleDateString() : ""}</p>
          <p><strong>Description:</strong> {project.description}</p>
          <button onClick={() => onEdit(project)}>Edit</button>
          <button onClick={() => onDelete(project.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;