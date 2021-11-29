const Post = ({ author, description, title, id }) => {
  return (
    <div>
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
