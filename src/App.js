import React from "react";
import { Route, Routes } from "react-router-dom";
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
//Create Post
import CreatePost from "./pages/CreatePost";
//Edit Post
import EditPost from "./pages/EditPost";
//Edit User
import EditUser from "./pages/EditUser";

const App = () => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/post/:id" element={<Post />} />
        <Route exact path="/user/:id" element={<UserProfile />} />
        <Route exact path="/create/post" element={<CreatePost />} />
        <Route exact path="/edit/post" element={<EditPost />} />
        <Route exact path="/edit/user/:id" element={<EditUser />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
