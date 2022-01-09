import Post from "../../Main/Post";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import "..//Posts//Posts.css";
const Posts = ({ posts }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const postsPerPage = 1;
  const pagesVisited = pageNumber * postsPerPage;
  const displayPosts = posts.slice(pagesVisited, pagesVisited + postsPerPage);
  console.log(pagesVisited);

  const pageCount = Math.ceil(posts.length / postsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      {displayPosts.map((x) => (
        <Post
          key={x.id}
          author={x.author}
          description={x.description}
          title={x.title}
        />
      ))}
      {posts.length > 2 ? (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="paginationBttns"
          previousLinkClassName="previousBttn"
          nextLinkClassName="nextBttn"
          disabledClassName="paginationDisabled"
          activeClassName="paginationActive"
        />
      ) : null}
    </div>
  );
};

export default Posts;
