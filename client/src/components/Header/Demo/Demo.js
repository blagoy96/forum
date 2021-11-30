const Demo = (props) => {
  const searchHandler = (e) => {
    e.preventDefault();

    props.posts.forEach((element) => {
      if (element.title === e.target.input.value) {
        console.log(element.title);
      }
    });
  };

  return (
    <form onSubmit={searchHandler}>
      <input type="text" name="input" />
      <input type="submit" value="search" />
    </form>
  );
};

export default Demo;
