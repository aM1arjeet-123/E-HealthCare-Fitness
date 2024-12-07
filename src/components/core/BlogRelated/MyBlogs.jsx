import React, { useEffect, useState } from "react";
import {getMyBlogs} from "../../../services/operations/blogsApi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const {token} = useSelector((state)=>state.auth);

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const response = await getMyBlogs(token);
        console.log(response?.data?.blogs)
        setBlogs(response?.data?.blogs);
        console.log(blogs)
      } catch (error) {
        console.error("Error fetching user blogs:", error);
      }
    };

    fetchMyBlogs();
  }, [token]);

  return (
    <div className="container mx-auto p-4 w-[60%] ">
      <h1 className="text-3xl font-bold mb-6 text-richblack-50 mx-auto">My Blogs</h1>
      {blogs !== undefined && blogs.length === 0 ? (
        <p className="text-richblack-50">You haven’t created any blogs yet.</p>
      ) : (
        <div className="grid gap-4">
          { blogs !== undefined && blogs.map((blog) => (
            <div
              key={blog._id}
              className="border p-4 rounded shadow bg-richblack-300 flex flex-col gap-2"
            >
              <h2 className="text-lg font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.content.slice(0, 100)}...</p>
              <span className="text-gray-500 text-sm">
                Created on: {new Date(blog.createdAt).toLocaleDateString()}
              </span>
              <div className="flex flex-row gap-2">
                <span className="flex flex-row gap-2"><BiSolidLike  className="mt-1"/> ({blog.likes.length})</span>
                <span className="flex flex-row gap-2">  <BiSolidDislike className="mt-1" /> ({blog.dislikes.length})</span>
              <Link
                  to={`/blogs/${blog._id}`}
                  className="text-blue-400 font-bold hover:underline"
                >
                  Read More(for Comment)
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBlogs;
