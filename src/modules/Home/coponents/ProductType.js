import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CardType } from "./Card1";

// const CardType = [
//   { imageUrl: Banner1jpg, gender: "Women", trendYear: "Spring 2018" },
//   { imageUrl: Banner2jpg, gender: "Men", trendYear: "Spring 2018" },
//   { imageUrl: Banner3jpg, gender: "Accessories", trendYear: "New Trend" },
//   { imageUrl: Banner4jpg, gender: "Bags", trendYear: "New Trend" },
// ];

const ProductType = ({ location, smallCard }) => {
  const navigate = useNavigate();
  return (
    <>
      <>
        {location === "home3" && (
          <div className="sec-banner bg0 p-b-55">
            <div className="container">
              <div className="row">
                {CardType.map(
                  (v, i) =>
                    v.home === location &&
                    v.smallCard !== smallCard && (
                      <div key={i} className="col-md-6 p-b-30 m-lr-auto">
                        <div className="block3-home wrap-pic-w">
                          <img src={v.imageUrl} alt="" />
                          <Link
                            to=""
                            className="block3-main text-decoration-none s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03"
                          >
                            <div className="flex-col-l">
                              <span className="block3-txt">{v.gender}</span>
                              <span className="block3-sub-txt">
                                {v.trendYear}
                              </span>
                            </div>
                            <div className="block3-btn text-decoration-none p-b-4 trans-05">
                              <div
                                className="block3-btn-link"
                                onClick={navigate("/shop")}
                              >
                                Shop Now
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    )
                )}
                {CardType.map(
                  (v, i) =>
                    v.home === location &&
                    v.smallCard === smallCard && (
                      <div className="col-md-6 col-lg-4">
                        <div className="block3-home wrap-pic-w">
                          <img alt="" src={v.imageUrl} />
                          <Link
                            to=""
                            className="block3-main text-decoration-none s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03"
                          >
                            <div className="flex-col-l">
                              <span className="block3-txt">{v.gender}</span>
                              <span className="block3-sub-txt">
                                {v.trendYear}
                              </span>
                            </div>
                            <div className="block3-btn text-decoration-none p-b-4 trans-05">
                              <div
                                className="block3-btn-link"
                                onClick={navigate("/shop")}
                              >
                                Shop Now
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default ProductType;
