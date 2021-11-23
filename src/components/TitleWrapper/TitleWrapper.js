import React from "react";

const TitleWrapper = ({ children }) => {
  return (
    <header className="relative bg-gray-900 flex flex-col items-center justify-center text-white py-20 px-16">
      <div className="max-w-screen-md">{children}</div>
    </header>
  );
};

export default TitleWrapper;
