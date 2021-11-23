import React from "react";

const TextArea = ({ error, value, label, onChange, id, placeholder }) => {
  return (
    <div className="flex flex-col py-2">
      <label className="mb-2 text-xl" htmlFor={id}>
        {label}
      </label>
      <textarea
        rows="5"
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        className="outline-none border-2 border-gray-900 pl-3 py-2 text-xl"
      >
        {value}
      </textarea>
      {error && <span className={`text-lg text-red-700 py-1`}>{error}</span>}
    </div>
  );
};
export default TextArea;
