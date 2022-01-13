import "./Post.css";
import Comment from "./Comment/Comment";
const Post = ({ id, author, description, title, comments }) => {
  return (
    <div key={id} className="post">
      <h1>{title}</h1>
      <span>{description}</span>
      <h3>
        <small>Author: </small>
        {author}
      </h3>
      <div className="comment">
        <span className="author">{comments.author}: </span>
        <span className="text">{comments.text}</span>
      </div>
      <Comment comment={comments} />
    </div>
  );
};

export default Post;
