import "./App.css";
import Navigation from "./components/Header/Navigation/Navigation";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./components/Header/About/About";
import ContactUs from "./components/Header/ContactUs/ContactUs";
import Demo from "./components/Header/Demo/Demo";
import Posts from "./components/Header/Posts/Posts";
import Footer from "./components/Footer/Footer";
import Login from "./components/Header/Login/Login";
import Register from "./components/Header/Register/Register";
import CreatePost from "./components/Main/CreatePost/CreatePost";
import { useState, useEffect } from "react";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";
const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "posts")).then((snapShot) =>
      snapShot.forEach((doc) => posts.push(doc.data()))
    );
    console.log(posts);
  }, [posts]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/posts")
  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

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
      <Navigation posts={posts} />
      <Routes>
        <Route path="/" element={<Posts posts={posts} />} />
        <Route path="/about-us" element={<About />} />
        <Route
          path="/create-post"
          element={<CreatePost onSubmitHandler={onSubmitHandler} post={post} />}
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" />
        <Route path="/demo" element={<Demo posts={posts} />} />
        <Route path="*" element={<h1>Error Page</h1>}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
