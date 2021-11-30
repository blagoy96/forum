import "./Login.css";
const Login = () => {
  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.age.value);
    console.log(e.target.email.value);
    console.log(e.target.gender.value);
  };
  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={onClickHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@mail.com"
        />

        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" />

        <label htmlFor="gender">gender</label>
        <select name="gender" id="gender">
          <option value="male" label="male" />
          <option value="woman" label="woman" />
        </select>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Login;
