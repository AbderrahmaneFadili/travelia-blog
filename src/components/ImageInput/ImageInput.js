import React, { useState } from "react";

function ImageInput({ error, value, label, onChange, id, placeholder }) {
  const [image, setImage] = useState(null);

  return (
    <div className="flex flex-col py-2">
      <label className="mb-2 text-xl" htmlFor={id}>
        {label}
      </label>
      <input
        type="file"
        id={id}
        placeholder={placeholder}
        className="outline-none border-2 border-gray-900 pl-3 py-2 text-xl"
      />
      {value && (
        <img
          src={value}
          className="mt-2"
          alt="image"
          style={{
            width: 100,
            height: 100,
          }}
        />
      )}
      {image && (
        <img
          src={image}
          className="mt-2"
          alt="image"
          style={{
            width: 100,
            height: 100,
          }}
        />
      )}

      {error && <span className={`text-lg text-red-700 py-1`}>{error}</span>}
    </div>
  );
}

export default ImageInput;
