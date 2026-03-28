function UserList({ users, onEdit, onDelete }) {
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="card">
          <p><strong>First Name:</strong> {user.firstname}</p>
          <p><strong>Last Name:</strong> {user.lastname}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={() => onEdit(user)}>Edit</button>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;