import "./nav-bar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="./about-me">Home</Link>
        </li>
        <li>
          <Link to="./frontend">Frontend</Link>
        </li>
        <li>
          <Link to="./design">Design & UI/UX</Link>
        </li>
        <li>
          <Link to="./git-hub">Git Hub</Link>
        </li>
        <li>
          <Link to="">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
