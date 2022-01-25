import { useState } from "react";
import Posts from "../Posts/Posts";
import { getDocs, collection, where, query } from "firebase/firestore";
import { db } from "../../../config/firebase";
const Search = (props) => {
  const [state, setState] = useState([]);
  const searchHandler = (e) => {
    let title = e.target.input.value.toLowerCase();
    e.preventDefault();

    setState(() => []);
    const postsRef = collection(db, "posts");
    const q = query(postsRef, where("title", "==", title));
    console.log(q);
    // getDocs(collection(db, "posts")).then((snapShot) => {
    //   snapShot.docs.filter((value) => {
    //     if (value.data().title.toLowerCase() === title) {
    //       setState((res) => [...res, value.data()]);
    //     }
    //   });
    // });
    e.target.input.value = null;
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
