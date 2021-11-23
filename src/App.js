import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Footer
import Footer from "./components/Footer/Footer";
//Header
import Header from "./components/Header/Header";
//Home
import Home from "./pages/Home";
//About
import About from "./pages/About";
//Register
import Register from "./pages/Register";
//Login
import Login from "./pages/Login";
//Post
import Post from "./pages/Post";
//User profile
import UserProfile from "./pages/UserProfile";
import CreatePost from "./pages/CreatePost";

const App = () => {
  return (
    <Router>
      {/* Header */}
      <Header />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="create/post" element={<CreatePost />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
