import { useState } from "react";
const Demo = (props) => {
  const [state, setState] = useState({});
  let isFirst = true;
  const searchHandler = (e) => {
    e.preventDefault();

    props.posts.forEach((element) => {
      if (element.title === e.target.input.value && isFirst === true) {
        return fetch(`http://localhost:5000/posts?title=${element.title}`)
          .then((res) => res.json())
          .then((res) => setState(res));
      }
      isFirst = false;
    });
    console.log(state);
  };

  return (
    <form onSubmit={searchHandler}>
      <input type="text" name="input" />
      <input type="submit" value="search" />
    </form>
  );
};

export default Demo;
