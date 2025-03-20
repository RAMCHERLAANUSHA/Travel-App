import { useState, useEffect } from "react";
import statesData from "../data/state.json";
import styles from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
  const [states, setStates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setStates(statesData);
  }, []);

  const handleStateClick = (state) => {
    navigate(`/temples/${state.id}`);
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  };

  return (
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.showSidebar : ""}`}>
      <h2 className={styles.heading}>States</h2>
      <ul className="list-group">
        {states.map((state) => (
          <li key={state.id} className={styles.stateList}>
            <button className={styles.stateButton} onClick={() => handleStateClick(state)}>
              {state.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
