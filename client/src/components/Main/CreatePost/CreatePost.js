import "./CreatePost.css";

const CreatePost = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const post = {
      author: e.target.username.value,
      description: e.target.description.value,
      title: e.target.title.value,
    };
    props.onSubmitHandler(post);
  };

  return (
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
  );
};

export default CreatePost;
