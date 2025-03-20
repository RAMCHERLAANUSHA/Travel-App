import { useParams, useNavigate } from "react-router-dom";
import statesData from "../data/state.json";
import styles from "./TempleDetails.module.css";

export default function TempleDetails() {
  const { t_id, stateId } = useParams();
  const navigate = useNavigate();

  let templeFound = null;
  for (const state of statesData) {
    if (state.temples && Array.isArray(state.temples)) {
      templeFound = state.temples.find(
        (temple) => temple.t_id.toString() === t_id
      );
      if (templeFound) break;
    }
  }

  if (!templeFound) {
    return <div className={styles.error}>Temple not found</div>;
  }

  return (
    <div className={styles.templeDetails}>
      <button
        className={styles.backButton}
        onClick={() => navigate(`/temples/${stateId}`)}
      >
        &#8592;
      </button>
      <div className={styles.header}>
        <h2 className={styles.heading}>-{templeFound.name}-</h2>
      </div>
      {templeFound.image && (
        <img
          src={templeFound.image}
          alt={templeFound.name}
          className={styles.templeImage}
        />
      )}
      <p className={styles.templeText}>{templeFound.text}</p>
      <div className={styles.templeHistory}>
        <p><strong>History</strong></p>
        <hr />
        <p>{templeFound.history}</p>
      </div>
      <p className={styles.templeDistrict}>
        <strong>District: </strong>
        {templeFound.district}
      </p>
      <p className={styles.templeDistrict}>
        <strong>State: </strong>
        {templeFound.state}
      </p>
      <p className={styles.templeDistrict}>
        <strong>Country: </strong>
        {templeFound.country}
      </p>
      <p className={styles.templeWebsite}>
        <strong>Website: </strong>
        <a href={templeFound.website} target="_blank" rel="noopener noreferrer">
          {templeFound.name}
        </a>
      </p>
      {templeFound.iframeURL && (
        <iframe
          src={templeFound.iframeURL}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title={`${templeFound.name} Location`}
        ></iframe>
      )}
    </div>
  );
}
