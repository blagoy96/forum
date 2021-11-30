import "./App.css";
import Navigation from "./components/Header/Navigation/Navigation";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./components/Header/About/About";
import ContactUs from "./components/Header/ContactUs/ContactUs";
import Posts from "./components/Header/Posts/Posts";
import Footer from "./components/Footer/Footer";
import Login from "./components/Header/Login/Login";
import CreatePost from "./components/Main/CreatePost/CreatePost";
import { useState, useEffect } from "react";
const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => console.log(err));
  }, []);

  let post = {};

  let navigate = useNavigate();
  const onSubmitHandler = (post) => {
    return fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then(() => {
        posts.push(post);
      })
      .then(() => navigate("/"));
  };
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Posts posts={posts} />} />
        <Route path="/about-us" element={<About />} />
        <Route
          path="/create-post"
          element={<CreatePost onSubmitHandler={onSubmitHandler} post={post} />}
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Error Page</h1>}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
