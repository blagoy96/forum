import { Link, NavLink } from "react-router-dom";
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
          <NavLink to="/create-post">New post</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact us</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
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
          <Link to="/">Welcome {getAuth().currentUser?.email}</Link>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
