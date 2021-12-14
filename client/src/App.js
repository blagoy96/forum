import "./App.css";
import Navigation from "./components/Header/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
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
      snapShot.forEach((doc) => {
        posts.push(doc.data());
      })
    );
  }, []);
  console.log(posts);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Posts posts={posts} />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/create-post" element={<CreatePost />} />
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
