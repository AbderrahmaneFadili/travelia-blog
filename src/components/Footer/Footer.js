import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-20">
      <p className="text-center">
        <span className="text-2xl mr-4">Travelia</span>
        <span>Copyright &copy; {new Date().getFullYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;
