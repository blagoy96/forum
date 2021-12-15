import "./CreatePost.css";
import { db } from "../../../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../../../App";

const CreatePost = () => {
  const context = useContext(PostsContext);
  let navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const post = {
      author: e.target.username.value,
      description: e.target.description.value,
      title: e.target.title.value,
      id:
        e.target.description.value +
        e.target.title.value +
        e.target.description.value,
    };
    setDoc(doc(db, "posts", `${e.target.username.value}`), post)
      .then(PostsContext(post))
      .then(navigate("/"));
  };

  return (
    <PostsContext.Consumer>
      <div>
        <h1>Create Post</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <input type="text" name="title" placeholder="Title" />
          <textarea
            type="text"
            rows="20"
            cols="100"
            name="description"
            placeholder="Write here...."
          />

          <input type="submit" name="submit" value="Send" />
        </form>
      </div>
    </PostsContext.Consumer>
  );
};

export default CreatePost;
