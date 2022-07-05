import React, { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";
import Bg1 from "../../assets/images/bg-02.jpg";
import BlogMain from "./components/Blog";

const Blog = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="bg-img1 txt-center p-lr-15 p-tb-92">
        <img src={Bg1} alt="" style={{ width: "100%" }} />
        <h2
          className="ltext-105 cl0 txt-center"
          style={{ position: "relative", bottom: "132px" }}
        >
          Blog
        </h2>
      </div>
      <div className="bg0  p-b-60">
        <div className="container">
          <BlogMain />
        </div>
      </div>
      <div
        className="btn-back-to-top"
        id="myBtn"
        style={{ display: `${scrollPosition > 150 ? "flex" : "none"}` }}
        onClick={scrollToTop}
      >
        <span className="symbol-btn-back-to-top">
          <i class="fa-solid fa-chevron-up"></i>
        </span>
      </div>
    </>
  );
};

export default Blog;
