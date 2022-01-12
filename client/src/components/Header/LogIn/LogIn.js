import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import "../../../config/firebase";
import { useNavigate } from "react-router-dom";
import Register from "../Register/Register";
const Login = () => {
  const navigate = useNavigate();
  const onClickHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((err) => console.log("User not found"));
  };

  return (
    <>
      <div>
        <h1>Login Page</h1>

        <form onSubmit={onClickHandler}>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.com"
          />

          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" />

          <input className="log" type="submit" value="Log in" />
        </form>
      </div>
      <div>
        <input
          className="register"
          type="submit"
          value="Create new account"
          onClick={() => {
            navigate("/register");
          }}
        ></input>
      </div>
    </>
  );
};

export default Login;
