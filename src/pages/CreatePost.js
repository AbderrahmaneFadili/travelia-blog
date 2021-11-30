import React, { useEffect } from "react";
import TitleWrapper from "../components/TitleWrapper/TitleWrapper";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import TextArea from "../components/TextArea/TextArea";
import Select from "../components/Select/Select";
import ImageInput from "../components/ImageInput/ImageInput";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllCategoriesAction } from "../redux/store/actions/allCategoriesActions";

function CreatePost() {
  const state = useSelector((state) => ({
    categories: state.getAllCategoriesReducer.categories,
  }));

  const dispatch = useDispatch();

  //get all categories
  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, []);

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
          <ImageInput id="image" label="Post Image" />
          {/* Title */}
          <Input type="text" id="title" label="Title" />
          {/* Body */}
          <TextArea id="body" label="Body" />
          {/* Categories */}
          <Select
            options={state.categories}
            id="categories"
            label="Categories"
          />
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
