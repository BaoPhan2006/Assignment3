import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import UsersPage from "./pages/UsersPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import ReferencesPage from "./pages/ReferencesPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="container">
        <h1>Portfolio Application</h1>
        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/references" element={<ReferencesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
