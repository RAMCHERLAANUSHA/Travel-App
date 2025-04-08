import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import statesData from "../data/state.json";
import styles from "./Temples.module.css";
import SearchBar from "../components/SearchBar.jsx";

export default function TemplesPage() {
  const { stateId } = useParams();
  const navigate = useNavigate();
  const state = statesData.find((s) => s.id.toString() === stateId);

  const [searchTerm, setSearchTerm] = useState("");

  if (!state) {
    return <div className={styles.error}>State not found</div>;
  }

  const temples = state.temples || [];
  const filteredTemples = temples.filter((temple) =>
    temple.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.templesPage}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2>Temples in {state.name}</h2>

      {filteredTemples.length > 0 ? (
        <ul className={styles.templeList}>
          {filteredTemples.map((temple) => (
            <li
              key={temple.t_id}
              className={styles.templeItem}
              onClick={() => navigate(`/temples/${state.id}/${temple.t_id}`)}
              style={{ cursor: "pointer" }}
            >
              {temple.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No temples found matching your search.</p>
      )}
    </div>
  );
}
