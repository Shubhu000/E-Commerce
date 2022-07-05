import React, { useState } from "react";
import swal from "sweetalert";
import ReactDropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import CustomGallarey from "./CustomGallarey";
import { Link } from "react-router-dom";
import { addToCartSuccess, fetchProductPrice } from "../../Shop/store/action";
import Input from "../../../components/common/Input";
import { LikeButton } from "../../../components/common/LikeButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetailsSlider = ({ id }) => {
  const { Product } = useSelector((state) => state.Home);
  const { Cart } = useSelector((state) => state.Shop);
  const dispatch = useDispatch();
  const [lightBox, setLightBox] = useState(false);
  const [mediaAttachment, setMediaAttachment] = useState([]);
  const [sizeOption, setSizeOption] = useState("");
  const SizeOptions = [
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
  ];
  const handleSize = (e) => {
    setSizeOption(e.target?.value);
  };
  const ColorOptions = ["Red", "Blue", "White", "Grey"];
  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slideToScroll: 1,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
  };
  const handleOpen = (data) => {
    setLightBox(true);
    setMediaAttachment(data);
  };
  const addToCart = (e) => {
    if (sizeOption === "") {
      toast.error("Size is Required");
    } else if (Cart.map((i) => i.id).includes(e.id)) {
      swal("Sorry!!", "item already added!", "error");
      // toast.error("Size is Required");
    } else {
      dispatch(
        addToCartSuccess({
          id: e.id,
          price: e.price,
          image: e.image,
          qty: 1,
          title: e.title,
          productPrice: e.price,
        })
      );
      dispatch(fetchProductPrice(e.price));
      swal({
        text: `${Cart.map((i) => i.title)}`,
        title: "Added to Cart",
        type: "success",
      });
    }
  };
  console.log(sizeOption);
  return (
    <div>
      <ToastContainer />
      {Product.map((v, i) => (
        <div className="row" key={i}>
          {id === v.id && (
            <>
              <div className="col-md-6 col-lg-7 p-b-30">
                <div className="p-l-25 p-r-30 p-lr-0-lg">
                  <div className="d-flex">
                    <Slider {...settings2}>
                      <div className="SmallGameInfoSlider">
                        <div
                          className="test"
                          style={{ border: "2px solid #ccc" }}
                        >
                          <img src={v.image} alt="" />
                          {!settings2 && (
                            <Link
                              class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 expand hov-btn3 trans-04"
                              to="/"
                              onClick={() => handleOpen(v.image)}
                            >
                              <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                            </Link>
                          )}
                        </div>
                      </div>
                    </Slider>
                  </div>
                  <Slider {...settings}>
                    <div className="BottomSlider">
                      <img alt="" src={v.image} />
                      <Link
                        class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 expand hov-btn3 trans-04"
                        to="#"
                        onClick={() => handleOpen(v.image)}
                      >
                        <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                      </Link>
                    </div>
                  </Slider>
                </div>
              </div>

              <div className="col-md-6 col-lg-5 p-b-30">
                <div className="p-r-50 p-t-5 p-lr-0-lg">
                  <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                    {v.title}
                  </h4>

                  <span className="mtext-106 cl2">${v.price}</span>

                  <p className="stext-102 cl3 p-t-23">{v.description}</p>

                  {/* <!--  --> */}
                  <div className="p-t-33">
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Size</div>

                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <Select
                            options={SizeOptions}
                            placeholder="Choose an option"
                            className="menu"
                            value={sizeOption}
                            onChange={handleSize}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Color</div>

                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <Select
                            options={ColorOptions}
                            placeholder="Choose an option"
                            className="hov-btn3"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-204 flex-w flex-m respon6-next">
                        <div className="wrap-num-product flex-w m-r-20 m-tb-10 wrap-num-product-custom">
                          <Input
                            quantity={v.qty}
                            id={v.id}
                            price={v.productPrice}
                          />
                        </div>

                        <button
                          className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                          onClick={() => addToCart(v)}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <!--  --> */}
                  <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                    <div className="flex-m bor9 p-r-10 m-r-11">
                      <div
                        href="#"
                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                        data-tooltip="Add to Wishlist"
                      >
                        {/* <i
                          class="fa-solid fa-heart"
                          onClick={() =>
                            swal(
                              "Herschel supply",
                              "is added to wishlist !",
                              "success"
                            )
                          }
                        ></i> */}
                        <LikeButton id={v} />
                      </div>
                    </div>

                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Facebook"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>

                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>

                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Google Plus"
                    >
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
      {lightBox && (
        <CustomGallarey
          data={mediaAttachment}
          onClose={() => setLightBox(false)}
        />
      )}
    </div>
  );
};

export default ProductDetailsSlider;
