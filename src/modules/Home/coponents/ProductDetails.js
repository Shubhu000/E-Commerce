import React, { useEffect, useState } from "react";
import ProductDetailsSlider from "./ProductDetailsSlider";
import { Link, useParams } from "react-router-dom";
import Iconimg from "../../../assets/images/avatar-01.jpg";
import StarRatings from "react-star-ratings/build/star-ratings";
import { useSelector } from "react-redux";
import RelatedProductsSlider from "./RelatedProductsSlider";

const ProductDetails = () => {
  const [active, setActive] = useState(1);
  const Detais = [
    { name: "Description", value: 1, path: "/description" },
    { name: "Additional information", value: 2, path: "/info" },
    { name: "Reviews", value: 3, path: "/review" },
  ];
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const params = useParams();
  return (
    <>
      <div className="sec-product-detail bg0 p-t-65 p-b-60 m-t-10">
        <div className="container">
          <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
            <div className="m-b-20">
              <Link
                to="/"
                className="stext-109 cl8 hov-cl1 trans-04"
                style={{ textDecoration: "none" }}
              >
                Home
                <i
                  className="fa fa-angle-right m-l-9 m-r-10"
                  aria-hidden="true"
                ></i>
              </Link>

              <Link
                to="/shop"
                className="stext-109 cl8 hov-cl1 trans-04"
                style={{ textDecoration: "none" }}
              >
                Men
                <i
                  className="fa fa-angle-right m-l-9 m-r-10"
                  aria-hidden="true"
                ></i>
              </Link>
              <span className="stext-109 cl4">Lightweight Jacket</span>
            </div>
          </div>
          {+params.id && <ProductDetailsSlider id={+params.id} />}

          <div className="bor10 m-t-50 p-t-43 p-b-40">
            {/* <!-- Tab01 --> */}
            <div className="tab01">
              {/* <!-- Nav tabs --> */}
              <ul className="nav nav-tabs" role="tablist">
                {Detais.map((v, i) => (
                  <li className="nav-item p-b-10" key={i}>
                    <Link
                      className={
                        active === v.value ? "nav-link active" : "nav-link"
                      }
                      data-toggle="tab"
                      //   to={"/" + v.path}
                      to="#"
                      role="tab"
                      onClick={() => setActive(v.value)}
                    >
                      {v.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* <!-- Tab panes --> */}

              <div className="tab-content p-t-43">
                {/* <!-- - --> */}
                <d
                  className={
                    active === 1 ? "tab-pane fade show active" : "tab-pane fade"
                  }
                  id="/description"
                  role="tabpanel"
                >
                  <div className="how-pos2 p-lr-15-md">
                    <p className="stext-102 cl6">
                      Aenean sit amet gravida nisi. Nam fermentum est felis,
                      quis feugiat nunc fringilla sit amet. Ut in blandit ipsum.
                      Quisque luctus dui at ante aliquet, in hendrerit lectus
                      interdum. Morbi elementum sapien rhoncus pretium maximus.
                      Nulla lectus enim, cursus et elementum sed, sodales vitae
                      eros. Ut ex quam, porta consequat interdum in, faucibus eu
                      velit. Quisque rhoncus ex ac libero varius molestie.
                      Aenean tempor sit amet orci nec iaculis. Cras sit amet
                      nulla libero. Curabitur dignissim, nunc nec laoreet
                      consequat, purus nunc porta lacus, vel efficitur tellus
                      augue in ipsum. Cras in arcu sed metus rutrum iaculis.
                      Nulla non tempor erat. Duis in egestas nunc.
                    </p>
                  </div>
                </d>
                {/* <!-- - --> */}
                <div
                  className={
                    active === 2 ? "tab-pane fade show active" : "tab-pane fade"
                  }
                  id="/info"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                      <ul className="p-lr-28 p-lr-15-sm">
                        <li className="flex-w flex-t p-b-7">
                          <span className="stext-102 cl3 size-205">Weight</span>

                          <span className="stext-102 cl6 size-206">
                            0.79 kg
                          </span>
                        </li>

                        <li className="flex-w flex-t p-b-7">
                          <span className="stext-102 cl3 size-205">
                            Dimensions
                          </span>

                          <span className="stext-102 cl6 size-206">
                            110 x 33 x 100 cm
                          </span>
                        </li>

                        <li className="flex-w flex-t p-b-7">
                          <span className="stext-102 cl3 size-205">
                            Materials
                          </span>

                          <span className="stext-102 cl6 size-206">
                            60% cotton
                          </span>
                        </li>

                        <li className="flex-w flex-t p-b-7">
                          <span className="stext-102 cl3 size-205">Color</span>

                          <span className="stext-102 cl6 size-206">
                            Black, Blue, Grey, Green, Red, White
                          </span>
                        </li>

                        <li className="flex-w flex-t p-b-7">
                          <span className="stext-102 cl3 size-205">Size</span>

                          <span className="stext-102 cl6 size-206">
                            XL, L, M, S
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- - --> */}
                <div
                  className={
                    active == 3 ? "tab-pane fade show active" : "tab-pane fade"
                  }
                  id="/reviews"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                      <div className="p-b-30 m-lr-15-sm">
                        {/* <!-- Review --> */}
                        <div className="flex-w flex-t p-b-68">
                          <div className="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                            <img src={Iconimg} alt="AVATAR" />
                          </div>

                          <div className="size-207">
                            <div className="flex-w flex-sb-m p-b-17">
                              <span className="mtext-107 cl2 p-r-20">
                                Ariana Grande
                              </span>

                              <span className="fs-18 cl11">
                                <StarRatings
                                  numberOfStars={5}
                                  starDimension="18px"
                                  starSpacing="2px"
                                  className="pointer"
                                />
                              </span>
                            </div>

                            <p className="stext-102 cl6">
                              Quod autem in homine praestantissimum atque
                              optimum est, id deseruit. Apud ceteros autem
                              philosophos
                            </p>
                          </div>
                        </div>

                        {/* <!-- Add review --> */}
                        <form className="w-full">
                          <h5 className="mtext-108 cl2 p-b-7">Add a review</h5>

                          <p className="stext-102 cl6">
                            Your email address will not be published. Required
                            fields are marked *
                          </p>

                          <div className="flex-w flex-m p-t-50 p-b-23">
                            <span className="stext-102 cl3 m-r-16">
                              Your Rating
                            </span>

                            <span className="wrap-rating fs-18 cl11 pointer">
                              <StarRatings
                                numberOfStars={5}
                                starDimension="18px"
                                starSpacing="2px"
                                className="pointer"
                              />
                              <input
                                className="dis-none"
                                type="number"
                                name="rating"
                              />
                            </span>
                          </div>

                          <div className="row p-b-25">
                            <div className="col-12 p-b-5">
                              <label className="stext-102 cl3" for="review">
                                Your review
                              </label>
                              <textarea
                                className="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10"
                                id="review"
                                name="review"
                              ></textarea>
                            </div>

                            <div className="col-sm-6 p-b-5">
                              <label className="stext-102 cl3" for="name">
                                Name
                              </label>
                              <input
                                className="size-111 bor8 stext-102 cl2 p-lr-20"
                                id="name"
                                type="text"
                                name="name"
                              />
                            </div>

                            <div className="col-sm-6 p-b-5">
                              <label className="stext-102 cl3" for="email">
                                Email
                              </label>
                              <input
                                className="size-111 bor8 stext-102 cl2 p-lr-20"
                                id="email"
                                type="text"
                                name="email"
                              />
                            </div>
                          </div>

                          <button className="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
          <span className="stext-107 cl6 p-lr-25">SKU: JAK-01</span>

          <span className="stext-107 cl6 p-lr-25">Categories: Jacket, Men</span>
        </div>
      </div>
      {/* <ProductCard /> */}
      <RelatedProductsSlider />
    </>
  );
};

export default ProductDetails;
