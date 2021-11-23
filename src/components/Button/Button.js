import React from "react";

function Button({ title, type, style, onClick, onSubmit }) {
  return (
    <button
      style={style}
      className="bg-gray-900 text-white w-full py-3 px-2 text-xl"
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {title}
    </button>
  );
}

export default Button;
