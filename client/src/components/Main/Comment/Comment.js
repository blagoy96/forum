import "..//Comment/Comment.css";

const Comment = () => {
  return (
    <div>
      <form>
        <textarea
          type="text"
          rows="1"
          cols="100"
          name="comment"
          placeholder="Write here...."
        />
        <input type="submit" value="post" />
      </form>
    </div>
  );
};

export default Comment;
