import React from "react";
import BlogLeftData from "./BlogLeftData";
import BlogRightData from "./BlogRightData";

const BlogMain = () => {
  return (
    <div className="row">
      <BlogLeftData />
      <BlogRightData />
    </div>
  );
};

export default BlogMain;
