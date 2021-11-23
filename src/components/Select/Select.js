import React from "react";

const Select = ({ error, label, options, onChange, id }) => {
  return (
    <div className="flex flex-col py-2">
      <label className="mb-2 text-xl" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        onChange={onChange}
        className="outline-none border-2 border-gray-900 pl-3 py-2 text-xl"
      >
        {options.map((option, i) => (
          <option value={option.id}>{option.title}</option>
        ))}
      </select>
      {error && <span className={`text-lg text-red-700 py-1`}>{error}</span>}
    </div>
  );
};
export default Select;
