import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../../../services/operations/blogsApi";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getAllBlogs();
        console.log("API Response:", response);
        // Adjust based on the actual response structure
        setBlogs(response.data.blogs || []);
        
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]); // Set empty array in case of error
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-richblack-50">All Blogs</h1>
      <div className="grid gap-4 mt-4 ">
        {Array.isArray(blogs) && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="border p-4 rounded shadow bg-richblack-700 text-richblack-100 flex flex-col gap-2"
            >
              <h2 className="text-lg font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.content.slice(0, 100)}...</p>
              <div className="flex justify-between items-center">
                <Link
                  to={`/blogs/${blog._id}`}
                  className="text-blue-400 font-bold hover:underline"
                >
                  Read More
                </Link>
                <span className="text-gray-500 text-sm">
                  By {blog.author?.firstName + " " + blog?.author?.lastName || "Anonymous"}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
