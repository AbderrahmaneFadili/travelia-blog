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
      </Routes>
      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
