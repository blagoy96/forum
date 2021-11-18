import Post from "../../Main/Post/Post";
const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      {posts.map((x) => (
        <Post
          key={x.id}
          title={x.title}
          author={x.author}
          description={x.description}
        />
      ))}
    </div>
  );
};

export default Posts;
