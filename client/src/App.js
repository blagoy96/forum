import "./App.css";
import Navigation from "./components/Header/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Header/Home/Home";
import About from "./components/Header/About/About";
import ContactUs from "./components/Header/ContactUs/ContactUs";
import Posts from "./components/Header/Posts/Posts";
import { Component } from "react";
import Footer from "./components/Footer/Footer";
import Login from "./components/Header/Login/Login";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((posts) => this.setState({ posts }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/posts" element={<Posts posts={this.state.posts} />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Error Page</h1>}></Route>
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
