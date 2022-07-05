import React, { useEffect, useState } from "react";
import Bg1 from "../../assets/images/bg-01.jpg";
import AboutMain from "./components/AboutMain";

const About = () => {
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
    <div className="m-t-85">
      <div className="">
        <img src={Bg1} alt="" style={{ width: "100%", height: "239px" }} />
        <h2
          className="ltext-105 cl0 txt-center"
          style={{ position: "relative", bottom: "135px" }}
        >
          About
        </h2>
      </div>
      <AboutMain />
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
    </div>
  );
};

export default About;
