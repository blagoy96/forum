import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { getAuth, signOut } from "@firebase/auth";
import { useNavigate } from "react-router";
const Navigation = () => {
  let navigate = useNavigate();
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About us</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact us</NavLink>
        </li>
        <li>
          <NavLink to="/demo">Demo</NavLink>
        </li>
        <li className="login">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="logout">
          <NavLink
            to="/logout"
            onClick={() => signOut(getAuth()).then(() => navigate("/"))}
          >
            Logout
          </NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
