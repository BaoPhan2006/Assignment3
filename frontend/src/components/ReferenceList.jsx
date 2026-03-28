function ReferenceList({ references, onEdit, onDelete }) {
  if (references.length === 0) return <p>No references found.</p>;

  return (
    <div>
      {references.map((reference) => (
        <div key={reference.id} className="card">
          <p><strong>Name:</strong> {reference.firstname} {reference.lastname}</p>
          <p><strong>Email:</strong> {reference.email}</p>
          <p><strong>Position:</strong> {reference.position}</p>
          <p><strong>Company:</strong> {reference.company}</p>
          <button onClick={() => onEdit(reference)}>Edit</button>
          <button onClick={() => onDelete(reference.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ReferenceList;