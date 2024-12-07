import React from "react";
import BlogForm from "../components/core/BlogRelated/BlogForm"

const CreateBlog = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-5">
      <h1 className="text-3xl font-bold text-richblack-50 mx-auto">Create a New Blog</h1>
      <BlogForm />
    </div>
  );
};

export default CreateBlog;
