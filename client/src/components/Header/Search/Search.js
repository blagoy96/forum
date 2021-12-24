import { useState } from "react";
import Posts from "../Posts/Posts";
const Search = (props) => {
  const [state, setState] = useState([]);
  const [count, setCount] = useState(0);
  const searchHandler = (e) => {
    e.preventDefault();
    setState(() => []);
    props.posts.filter((value) => {
      if (value.title.toLowerCase() === e.target.input.value.toLowerCase()) {
        setCount((oldState) => (oldState += 1));
        setState((res) => [...res, value]);
      }
    });

    console.log(count);
    e.target.input.value = null;

    // props.posts.forEach((element) => {
    //   if (element.title === e.target.input.value) {
    //     setState((result) => [...result, element]);
    //   }
    // });
    // e.target.input.value = null;
    // console.log(state);
  };

  return (
    <>
      <Posts posts={state} />
      <form onSubmit={searchHandler}>
        <input type="text" name="input" />
        <input type="submit" value="search" />
      </form>
    </>
  );
};

export default Search;
