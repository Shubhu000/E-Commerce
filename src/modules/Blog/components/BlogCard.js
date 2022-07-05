import React from "react";
import { Link } from "react-router-dom";
import { BlogImages } from "./BlogImages";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const BlogCard = () => {
  return (
    <div className="row">
      {BlogImages.map((v, i) => (
        <div className="col-lg-4">
          <Link
            key={i}
            to="/blog"
            className="hov-img0 how-pos4-parent"
            style={{ textDecoration: "none" }}
          >
            <div className="blog_img">
              <img src={v.url} alt="" />
            </div>
            <div className="p-t-15 p-b-12">
              <span className="cl4 m-r-3">By</span>
              <span className="cl5">Nancy Ward</span>
              <span>
                <span className="cl4 m-r-3"> on </span>
                <span className="cl5"> July 22, 2017</span>
              </span>
            </div>
            <div className="p-b-15">
              <h4>
                <span className="title-tetx">{v.title}</span>
              </h4>
              <p className="dis-text cl4 p-t-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
