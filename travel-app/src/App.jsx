import { useState } from "react"; 
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Common from "./components/Common";
import TemplesPage from "./pages/Temples";
import TempleDetails from "./pages/TempleDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="logo">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Common />} />
          <Route path="/temples/:stateId" element={<TemplesPage />} />
          <Route path="/temples/:stateId/:t_id" element={<TempleDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
