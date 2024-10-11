import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
    const [show, setShow] = useState(false)
    function showMore() {
        setShow(!show)
    }
  return (
    <div>
      <NavLink className='font-bold underline' to={`/blog/${post.id}`}>
        <span>{post.title}</span>
      </NavLink>
      <p>
        <span className="mr-[5px]">By</span>
        <span className="italic">{post.author}</span>
        <span className="mx-[5px]">on</span>
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="underline font-bold text-[15px]">{post.category}</span>
        </NavLink>
      </p>
      <p>Posted on {post.date}</p>
      <p>{show ? post.content : (post.content.substring(0,150))}  <span className="text-blue-700 cursor-pointer" onClick={showMore}>
        {
            show ? "Read Less....." : "Read More....."
        }
        </span> </p>
      <div>
        {post.tags.map((tag, index) => (
          <NavLink key={index} className='mr-3' to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="underline text-blue-600 text-[12px] font-bold">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;