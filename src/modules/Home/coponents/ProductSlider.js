import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Animated } from "react-animated-css";
import { useNavigate } from "react-router-dom";
import { Images } from "./Home1";

const ProductSlider = ({ location }) => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const SampleNextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <button
        className={
          location === "home3"
            ? "slide-arrow next-arrow-white"
            : "slide-arrow next-arrow"
        }
        style={{ ...style, display: "block" }}
        onClick={onClick}
      ></button>
    );
  };
  const SamplePrevArrow = (props) => {
    const { style, onClick } = props;
    setData(props.currentSlide);
    return (
      <button
        className={
          location === "home3"
            ? "slide-arrow prev-arrow-white"
            : "slide-arrow prev-arrow"
        }
        style={{ ...style, display: "block" }}
        onClick={onClick}
      ></button>
    );
  };
  const settings = {
    autoplay: true,
    speed: 200,
    autoplaySpeed: 5000,
    cssEase: "linear",
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slideToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settings2 = {
    speed: 200,
    slidesToShow: 3,
    slideToScroll: 1,
    dots: true,
  };
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
    <section className="section-slide">
      <Slider {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        {Images?.map(
          (v, i) =>
            v.home === location && (
              <div key={i}>
                <div className="container h-full">
                  <div
                    className={
                      location === "home3"
                        ? "flex-col-l-m h-full respon5 mydiv-home3 "
                        : "flex-col-l-m h-full respon5 mydiv"
                    }
                  >
                    <div className="flex-col-l-m  respon5">
                      {data === 0 && (
                        <Animated animationIn="fadeInDown" isVisible={true}>
                          <span
                            className={
                              location === "home3"
                                ? "small-text-animated  ltext-101-white cl0 "
                                : "small-text-animated  ltext-101 cl2 respon2"
                            }
                          >
                            {v.bodyName}
                          </span>
                        </Animated>
                      )}
                      {data === 1 && (
                        <Animated animationIn="rollIn" isVisible={true}>
                          <span
                            className={
                              location === "home3"
                                ? "small-text-animated  ltext-101-white cl0 "
                                : "small-text-animated  ltext-101 cl2 respon2"
                            }
                          >
                            {v.bodyName}
                          </span>
                        </Animated>
                      )}
                      {data === 2 && (
                        <Animated
                          animationIn="rotateInDownLeft"
                          isVisible={true}
                        >
                          <span
                            className={
                              location === "home3"
                                ? "small-text-animated  ltext-101-white cl0 "
                                : "small-text-animated  ltext-101 cl2 respon2"
                            }
                          >
                            {v.bodyName}
                          </span>
                        </Animated>
                      )}
                    </div>
                    <div className="flex-col-l-m   respon5">
                      {data === 0 && (
                        <Animated
                          animationIn="fadeInUp"
                          isVisible={true}
                          animationInDelay={800}
                        >
                          <h2
                            className={
                              location === "home3"
                                ? "text-animated ltext-201-white cl0 respon1"
                                : "text-animated ltext-201 cl2 respon1"
                            }
                          >
                            {v.heading}
                          </h2>
                        </Animated>
                      )}{" "}
                      {data === 1 && (
                        <Animated
                          animationIn="lightSpeedIn"
                          isVisible={true}
                          animationInDelay={800}
                        >
                          <h2
                            className={
                              location === "home3"
                                ? "text-animated ltext-201-white cl0 respon1"
                                : "text-animated ltext-201 cl2 respon1"
                            }
                          >
                            {v.heading}
                          </h2>
                        </Animated>
                      )}{" "}
                      {data === 2 && (
                        <Animated
                          animationIn="rotateInUpRight"
                          isVisible={true}
                          animationInDelay={800}
                        >
                          <h2
                            className={
                              location === "home3"
                                ? "text-animated ltext-201-white cl0 respon1"
                                : "text-animated ltext-201 cl2 respon1"
                            }
                          >
                            {v.heading}
                          </h2>
                        </Animated>
                      )}
                    </div>
                    <div className="flex-col-l-m  respon5">
                      {data === 0 && (
                        <Animated
                          animationIn="zoomIn"
                          isVisible={true}
                          animationInDelay={1600}
                        >
                          <button
                            className={
                              location === "home3"
                                ? "btn-animated  flex-c-m stext-101-white cl0 size-101 bg1 bor1 hovr-btn1-white p-lr-15 trans-04"
                                : "btn-animated  flex-c-m stext-101 cl0 size-101 bg1 bor1 hovr-btn1 p-lr-15 trans-04"
                            }
                            onClick={() => navigate("/shop")}
                          >
                            Shop Now
                          </button>
                        </Animated>
                      )}
                      {data === 1 && (
                        <Animated
                          // animationIn="slideInUp"
                          animationOut="slideInUp"
                          isVisible={true}
                          // animationOutDelay={1600}
                          animationInDelay={1600}
                        >
                          <button
                            className={
                              location === "home3"
                                ? "btn-animated  flex-c-m stext-101-white cl0 size-101 bg1 bor1 hovr-btn1-white p-lr-15 trans-04"
                                : "btn-animated  flex-c-m stext-101 cl0 size-101 bg1 bor1 hovr-btn1 p-lr-15 trans-04"
                            }
                            onClick={() => navigate("/shop")}
                          >
                            Shop Now
                          </button>
                        </Animated>
                      )}
                      {data === 2 && (
                        <Animated
                          animationIn="rotateIn"
                          isVisible={true}
                          animationInDelay={1600}
                        >
                          <button
                            className={
                              location === "home3"
                                ? "btn-animated  flex-c-m stext-101-white cl0 size-101 bg1 bor1 hovr-btn1-white p-lr-15 trans-04"
                                : "btn-animated  flex-c-m stext-101 cl0 size-101 bg1 bor1 hovr-btn1 p-lr-15 trans-04"
                            }
                            onClick={() => navigate("/shop")}
                          >
                            Shop Now
                          </button>
                        </Animated>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-cont ">
                  <img src={v.url} alt="" key={i} style={{ width: "100%" }} />
                </div>
              </div>
            )
        )}
      </Slider>
      {location === "home3" && (
        <Slider
          {...settings2}
          className="BottomSlider-home"
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {Images?.map(
            (v, i) =>
              v.home === location && (
                <div key={i}>
                  <div className="text-cont tests">
                    <img className="opacity-100" src={v.url} alt="" key={i} />
                    <span className="name-class">{v.card}</span>
                  </div>
                </div>
              )
          )}
        </Slider>
      )}
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
    </section>
  );
};

export default ProductSlider;
