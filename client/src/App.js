import "./App.css";
import Navigation from "./components/Header/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import About from "./components/Header/About/About";
import ContactUs from "./components/Header/ContactUs/ContactUs";
import Search from "./components/Header/Search/Search";
import Posts from "./components/Header/Posts/Posts";
import Footer from "./components/Footer/Footer";
import Login from "./components/Header/Login/Login";
import Register from "./components/Header/Register/Register";
import CreatePost from "./components/Main/CreatePost/CreatePost";
import React, { useState, useEffect } from "react";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";
import context from "..//src/components/Context/Context";
import Pagination from "react-pagination-js";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  // const [postsPerPage] = useState(3);

  const postsPerPage = 3;
  const pagesVisited = pageNumber * postsPerPage;
  const displayPosts = posts.slice(pagesVisited, pagesVisited + postsPerPage);

  const pageCount = Math.ceil(posts.length / postsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    getDocs(collection(db, "posts")).then((snapShot) =>
      snapShot.forEach((doc) => {
        setPosts((result) => [...result, doc.data()]);
      })
    );
  }, []);

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Posts posts={displayPosts} />} />
        <Route path="/about-us" element={<About />} />

        <Route
          path="/create-post"
          element={
            <context.Provider value={{ posts, setPosts }}>
              <CreatePost />
            </context.Provider>
          }
        />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" />
        <Route path="/search" element={<Search posts={posts} />} />
        <Route path="*" element={<h1>Error Page</h1>}></Route>
      </Routes>
      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /> */}
      <Pagination
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
      />
      <Footer />
    </>
  );
};

export default App;
