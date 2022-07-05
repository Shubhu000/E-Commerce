import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../../assets/images/blog-04.jpg";
import blog2 from "../../../assets/images/blog-05.jpg";

const BlogLeftData = () => {
  return (
    <div className="col-md-8 col-lg-9 p-b-80">
      <div className="p-b-63">
        <Link to="" className="hov-blog">
          <img src={blog1} />
        </Link>
        <div className="p-t-32">
          <h4 className="p-b-15">
            <Link to="" className="ltext-108 cl2 trans-04 hov-text">
              8 Inspiring Ways to Wear Dresses in the Winter
            </Link>
          </h4>
          <p className="stext-117 cl6">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae
            sapien eu varius
          </p>
          <div className="flex-w flex-sb-m p-t-18">
            <span className="stext-111">
              <span className="cl4">By</span> Admin
              <span className="m-l-4 m-r-6 cl12">|</span>
              <span>StreetStyle, Fashion, Couple</span>
              <span className="m-l-4 m-r-6 cl12">|</span>
              <span> 8 Comments</span>
            </span>
            <Link
              to=""
              className="stext-101 cl2 trans-04 hov-cl1 m-b-10 text-decoration-none"
            >
              CONTINUE READING <i class="fa-solid fa-arrow-right"></i>{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="p-b-63">
        <Link to="" className="hov-blog">
          <img src={blog2} />
        </Link>
        <div className="p-t-32">
          <h4 className="p-b-15">
            <Link to="" className="ltext-108 cl2 trans-04 hov-text">
              The Great Big List of Men’s Gifts for the Holidays
            </Link>
          </h4>
          <p className="stext-117 cl6">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae
            sapien eu varius
          </p>
          <div className="flex-w flex-sb-m p-t-18">
            <span className="stext-111">
              <span className="cl4">By</span> Admin
              <span className="m-l-4 m-r-6 cl12">|</span>
              <span>StreetStyle, Fashion, Couple</span>
              <span className="m-l-4 m-r-6 cl12">|</span>
              <span> 8 Comments</span>
            </span>
            <Link
              to=""
              className="stext-101 cl2 trans-04 hov-cl1 m-b-10 text-decoration-none"
            >
              CONTINUE READING <i class="fa-solid fa-arrow-right"></i>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLeftData;
