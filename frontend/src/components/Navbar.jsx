import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/users" style={{ marginRight: "10px" }}>Users</Link>
      <Link to="/projects" style={{ marginRight: "10px" }}>Projects</Link>
      <Link to="/services" style={{ marginRight: "10px" }}>Services</Link>
      <Link to="/references">References</Link>
    </nav>
  );
}

export default Navbar;