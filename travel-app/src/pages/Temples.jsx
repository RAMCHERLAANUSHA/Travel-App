import { useParams } from "react-router-dom";
import statesData from "../data/state.json";
import styles from "./Temples.module.css";
import { useNavigate } from "react-router-dom";

export default function TemplesPage() {
  const { stateId } = useParams(); 
  const navigate = useNavigate();
  const state = statesData.find((s) => s.id.toString() === stateId);

  if (!state) {
    return <div className={styles.error}>State not found</div>;
  }

  const temples = state.temples || [];

  return (
    <div className={styles.templesPage}>
      <h2>Temples in {state.name}</h2>
      {temples.length > 0 ? (
        <ul className={styles.templeList}>
          {temples.map((temple) => (
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
        <p>No temples available for {state.name}.</p>
      )}
    </div>
  );
}
