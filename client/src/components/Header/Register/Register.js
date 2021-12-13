import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { useNavigate } from "react-router";
import "../../../config/firebase";
const Register = () => {
  const navigate = useNavigate();
  const onClickHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Register</h1>

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

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
