import React, { useState } from "react";
import TitleWrapper from "../components/TitleWrapper/TitleWrapper";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import TextArea from "../components/TextArea/TextArea";
import Select from "../components/Select/Select";

function CreatePost() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Categorie 1",
    },
    { id: 2, title: "Categorie 2" },
    { id: 3, title: "Categorie 3" },
  ]);
  return (
    <>
      {/* Title Wrapper */}
      <TitleWrapper>
        <h1 className="text-6xl text-center font-light">Create a new post</h1>
      </TitleWrapper>
      {/* Add post */}
      <div className="w-6/12 mx-auto my-10">
        <form>
          {/* Image  */}
          <Input type="file" id="image" label="Post Image" />
          {/* Title */}
          <Input type="text" id="title" label="Title" />
          {/* Body */}
          <TextArea id="body" label="Body" />
          {/* Categories */}
          <Select options={categories} id="categories" label="Categories" />
          {/* Register Button*/}
          <Button
            style={{
              marginTop: "20px",
            }}
            type="submit"
            title="Create"
          />
        </form>
      </div>
    </>
  );
}

export default CreatePost;
