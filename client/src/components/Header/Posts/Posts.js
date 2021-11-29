import Post from "../../Main/Post";
const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((x) => (
        <Post
          key={x.id}
          author={x.author}
          description={x.description}
          title={x.title}
        />
      ))}
    </div>
  );
};

export default Posts;
