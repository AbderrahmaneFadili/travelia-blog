import React from "react";

const Input = ({ error, value, label, type, onChange, id }) => {
  return (
    <div className="flex flex-col py-2">
      <label className="mb-2 text-xl" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        id={id}
        onChange={onChange}
        className="outline-none border-2 border-gray-900 pl-3 py-2 text-xl"
      />
      {error && <span className={`text-lg text-red-700 py-1`}>{error}</span>}
    </div>
  );
};

export default Input;
