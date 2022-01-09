import "./Post.css";
const Post = ({ id, author, description, title }) => {
  return (
    <div key={id} className="post">
      <h1>{title}</h1>
      <span>{description}</span>
      <h4>
        <small>Author: </small>
        {author}
      </h4>
    </div>
  );
};

export default Post;
