import "./CreatePost.css";
const CreatePost = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let post = {
      auhtor: e.target.username.value,
      description: e.target.description.value,
      title: e.target.title.value,
    };

    return fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(() => window.history.pushState(null, null, "/"));
  };
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={onSubmitHandler}>
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
