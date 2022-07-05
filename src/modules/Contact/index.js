import React, { useEffect, useState } from "react";
import Bg1 from "../../assets/images/bg-01.jpg";
import ContactMain from "./components/ContactMain";

const Contact = () => {
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
  const fullScreen = () => {
    let elem = document.getElementById("mapscreen");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  };
  return (
    <div className="m-t-85">
      <div className="">
        <img src={Bg1} alt="" style={{ width: "100%", height: "239px" }} />
        <h2
          className="ltext-105 cl0 txt-center"
          style={{ position: "relative", bottom: "135px" }}
        >
          Contact
        </h2>
      </div>
      <ContactMain />
      {/* <i class="fa-solid fa-compress exit-fullScreen"></i> */}
      <div className="bg-color">
        <i class="fa-solid fa-expand show-fullScreen" onClick={fullScreen}></i>
        <iframe
          id="mapscreen"
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1859.995966794579!2d72.78625430809487!3d21.192479396477488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d21.191065599999998!2d72.7875584!4m5!1s0x3be04e7a1bdbcb8b%3A0x6d99440e38057faa!2sdifferenzsystem!3m2!1d21.1938531!2d72.78638839999999!5e0!3m2!1sen!2sin!4v1656321097942!5m2!1sen!2sin"
          width="100%"
          height="390"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
          <div>
            <i class="fa-solid fa-compress exit-fullScreen"></i>
            <iframe
              id="mapscreen"
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1859.995966794579!2d72.78625430809487!3d21.192479396477488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d21.191065599999998!2d72.7875584!4m5!1s0x3be04e7a1bdbcb8b%3A0x6d99440e38057faa!2sdifferenzsystem!3m2!1d21.1938531!2d72.78638839999999!5e0!3m2!1sen!2sin!4v1656321097942!5m2!1sen!2sin"
              width="100%"
              height="390"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </iframe>
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
    </div>
  );
};

export default Contact;
