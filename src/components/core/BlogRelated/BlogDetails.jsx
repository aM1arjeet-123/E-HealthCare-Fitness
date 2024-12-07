import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {commentOnBlog, getBlogsById} from "../../../services/operations/blogsApi";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { likeAndDislike } from "../../../services/operations/blogsApi";
import { useSelector } from "react-redux";


const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState("");
  const [like,setLike]=useState("")

  const {token} = useSelector((state)=>state.auth); // Retrieve user token

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getBlogsById(id);
        console.log(id);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id,like,comment]);

  const handleLikeDislike = async (action) => {
    try {
      await likeAndDislike(id, action, token);
      setLike(action);
   
    } catch (error) {
      console.error("Error liking/disliking blog:", error);
    }
  };

  const handleComment = async () => {
    try {
      await commentOnBlog(id, comment, token);
      setComment(""); // Clear comment box
     
    } catch (error) {
      console.error("Error commenting:", error);
    }
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="p-4 w-[60%] mx-auto mt-10 bg-richblack-600 rounded-lg">
      <h1 className="text-2xl font-bold">{blog.data.title}</h1>
      <p className="mt-2">{blog.data.content}</p>
      
      <div className="flex gap-4 mt-4">
        <button
         onClick={() => handleLikeDislike("like")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
            <div className="flex flex-row gap-2">
          <BiSolidLike  className="mt-1"/> ({blog.data.likes.length})
          </div>
        </button>
        <button
        onClick={() => handleLikeDislike("dislike")}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
             <div className="flex flex-row gap-2">
          <BiSolidDislike className="mt-1" /> ({blog.data.dislikes.length})
          </div>
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-bold">Comments</h2>
        <ul className="mt-2">
            {console.log(blog.data)}
          { blog.data.comments.map((cmt, index) => (
            <li key={index} className="border-b py-2">
                <div className="flex flex-row justify-between">
              {cmt.content}
              <span>by {cmt.user.firstName + " " + cmt.user.lastName}</span>
              </div>
            </li>
          ))}
        </ul>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full mt-4 p-2 border rounded"
          placeholder="Add a comment..."
        />
        <button
          onClick={handleComment}
          className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
