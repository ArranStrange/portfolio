import "./nav-bar.css";
import { Link as LinkRouter } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <LinkRouter to="./about-me">Home</LinkRouter>
        </li>
        <li>
          <LinkRouter to="./frontend">Frontend</LinkRouter>
        </li>
        <li>
          <LinkRouter to="./design">Design</LinkRouter>
        </li>
        <li>
          <LinkRouter to="./git-hub">Git Hub</LinkRouter>
        </li>
        <li>
          <LinkRouter to="">Contact</LinkRouter>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
