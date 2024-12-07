import React, { useState } from "react";
import {createBlog} from "../../../services/operations/blogsApi";
import { useSelector } from "react-redux";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const {token} = useSelector((state)=>state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBlog({ title, content }, token);
     
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 w-[50%] mx-auto border-2 bg-richblack-700 text-richblack-50 rounded-xl">
      <h1 className="text-2xl font-bold">Create Blog</h1>
      <div className="mt-4">
        <label className="block">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded text-richblack-800"
        />
      </div>
      <div className="mt-4">
        <label className="block">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 w-full rounded text-richblack-800"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-400 text-white rounded mt-4"
      >
        Create Blog
      </button>
    </form>
  );
};

export default BlogForm;
