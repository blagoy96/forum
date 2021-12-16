import { useState } from "react";
const Demo = (props) => {
  const [state, setState] = useState({});
  const searchHandler = (e) => {
    
  }

  return (
    <form onSubmit={searchHandler}>
      <input type="text" name="input" />
      <input type="submit" value="search" />
    </form>
  );
};

export default Demo;
