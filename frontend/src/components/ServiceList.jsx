function ServiceList({ services, onEdit, onDelete }) {
  if (services.length === 0) return <p>No services found.</p>;

  return (
    <div>
      {services.map((service) => (
        <div key={service.id} className="card">
          <p><strong>Title:</strong> {service.title}</p>
          <p><strong>Description:</strong> {service.description}</p>
          <button onClick={() => onEdit(service)}>Edit</button>
          <button onClick={() => onDelete(service.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ServiceList;