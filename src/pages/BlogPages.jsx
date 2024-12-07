import React from "react";
 import BlogList from "../components/core/BlogRelated/BlogList";
import { useSelector } from "react-redux";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const {user}=useSelector((state)=>state.profile);
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row justify-between">
      <h1 className="text-3xl font-bold mb-6 text-richblack-25  ">Explore All Blogs</h1>
     <div className="flex flex-row">
           {(user?.accountType === "Doctor" || user?.accountType === "Instructor") && <Link to="/createBlog"><button className="border-2 bg-yellow-100 py-2  px-5 rounded-xl">
      
        <div className="flex flex-row gap-1">
        <IoAdd className="mt-1" />
        <h3 >Create Blog</h3>
        </div>
        
        
        </button></Link>}
        {(user?.accountType === "Doctor" || user?.accountType === "Instructor" )&& <Link to="/my-blogs"><button className="border-2 bg-yellow-100 py-2  px-5 rounded-xl">
      
      <div className="flex flex-row gap-1">
      
      <h3 >My Blog</h3>
      </div>
      
      
      </button></Link>}



        </div>

      </div>
      <BlogList />
    </div>
  );
};

export default AllBlogs;
