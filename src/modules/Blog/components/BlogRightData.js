import React from "react";
import { Link } from "react-router-dom";
import product1 from "../../../assets/images/product-min-01.jpg";
import product2 from "../../../assets/images/product-min-02.jpg";
import product3 from "../../../assets/images/product-min-03.jpg";

const BlogRightData = () => {
  return (
    <div className="col-md-4 col-lg-3 p-b-80">
      <div>
        <div className="border of-hidden pos-relative">
          <input
            className="stext-103 cl2 p-r-55 p-l-28 size"
            placeholder="Search"
          />
          <i class="fa-solid fa-magnifying-glass cl4 hov-cl1 ab-t-r flex-c-m size-icon pointer"></i>
        </div>
        <div className="p-t-55">
          <h4 className="mtext-112 cl2 p-b-33">Catagories</h4>
          <ul className="p-0">
            <li className="bor-top ">
              <Link
                to=""
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 text"
              >
                Fashion
              </Link>
            </li>
            <li className="bor-top ">
              <Link
                to=""
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 text"
              >
                Beauty
              </Link>
            </li>
            <li className="bor-top ">
              <Link
                to=""
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 text"
              >
                Street Style
              </Link>
            </li>
            <li className="bor-top ">
              <Link
                to=""
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 text"
              >
                Life Style
              </Link>
            </li>{" "}
            <li className="bor-top bor-bottom">
              <Link
                to=""
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 text"
              >
                DIY & Crafts
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-t-65">
          <h4 className="mtext-112 cl2 p-b-33">Featured Products</h4>
          <ul className="p-0">
            <li className="list flex-t flex-w p-b-33">
              <Link to="" className="img-hov">
                <img src={product1} />
              </Link>
              <div className="flex-col-t size-215 p-l-27">
                <Link to="" className="text stext-116 cl8 hov-cl1 trans-04">
                  White Shirt With Pleat Detail Back
                </Link>
                <span className="stext-116 cl6 p-t-20">$19.00</span>
              </div>
            </li>
            <li className="list flex-t flex-w p-b-33">
              <Link to="" className="img-hov">
                <img src={product2} />
              </Link>
              <div className="flex-col-t size-215 p-l-27">
                <Link to="" className="text stext-116 cl8 hov-cl1 trans-04">
                  Converse All Star Hi Black Canvas
                </Link>
                <span className="stext-116 cl6 p-t-20">$39.00</span>
              </div>
            </li>
            <li className="list flex-t flex-w p-b-33">
              <Link to="" className="img-hov">
                <img src={product3} />
              </Link>
              <div className="flex-col-t size-215 p-l-27">
                <Link to="" className="text stext-116 cl8 hov-cl1 trans-04">
                  Nixon Porter Leather Watch In Tan
                </Link>
                <span className="stext-116 cl6 p-t-20">$17.00</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="p-t-55">
          <h4 className="mtext-112 cl2 p-b-20">Archive</h4>
          <ul className="p-0">
            <li className="list p-b-7">
              <Link
                to=""
                className="text flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>July 2018</span>
                <span> (9) </span>
              </Link>
            </li>
            <li className="list p-b-7">
              <Link
                to=""
                className="text flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>June 2018</span>
                <span> (39) </span>
              </Link>
            </li>
            <li className="list p-b-7">
              <Link
                to=""
                className="text flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>May 2018</span>
                <span> (29) </span>
              </Link>
            </li>
            <li className="list p-b-7">
              <Link
                to=""
                className="text flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>April 2018</span>
                <span> (35) </span>
              </Link>
            </li>{" "}
            <li className="list p-b-7">
              <Link
                to=""
                className="text flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>March 2018</span>
                <span> (22) </span>
              </Link>
            </li>{" "}
            <li className="list p-b-7">
              <Link
                to=""
                className="text flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>Febuary 2018</span>
                <span> (32) </span>
              </Link>
            </li>{" "}
            <li className="list p-b-7">
              <Link
                to=""
                className="text flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>January 2018</span>
                <span> (21) </span>
              </Link>
            </li>
            <li className="list p-b-7">
              <Link
                to=""
                className="text flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>December 2018</span>
                <span> (26) </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-t-50">
          <h4 className="mtext-112 cl2 p-b-27">Tags</h4>
          <div className="flex-w m-r--5">
            <Link
              to=""
              className="text bor7 flex-c-m size-301 stext-107 cl6 hov-tag1 trans-04 m-r-5 m-b-5 p-lr-15"
            >
              Fashion
            </Link>
            <Link
              to=""
              className="text bor7 flex-c-m size-301 stext-107 cl6 hov-tag1 trans-04 m-r-5 m-b-5 p-lr-15"
            >
              LifeStyle
            </Link>
            <Link
              to=""
              className="text bor7 flex-c-m size-301 stext-107 cl6 hov-tag1 trans-04 m-r-5 m-b-5 p-lr-15"
            >
              Denim
            </Link>
            <Link
              to=""
              className="text bor7 flex-c-m size-301 stext-107 cl6 hov-tag1 trans-04 m-r-5 m-b-5 p-lr-15"
            >
              StreetStyle
            </Link>
            <Link
              to=""
              className="text bor7 flex-c-m size-301 stext-107 cl6 hov-tag1 trans-04 m-r-5 m-b-5 p-lr-15"
            >
              Crafts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogRightData;
