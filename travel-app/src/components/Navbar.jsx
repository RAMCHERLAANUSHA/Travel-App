import logo from "../assets/tour_logo.jpg";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";

export default function Navbar({ toggleSidebar }) {
  return (
    <nav className={`navbar navbar-light ${styles.customNavbar}`}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} className={`d-inline-block ${styles.logo}`} alt="Tour Logo" />
          <span className={styles.logoText}>Indian Tourism</span>
        </a>

        <button
          className={`d-lg-none ${styles.toggleButton}`}
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
}

