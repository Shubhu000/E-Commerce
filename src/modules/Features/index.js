import React, { useEffect, useState } from "react";
import ShoppingCart from "./components/ShoppingCart";
const Features = () => {
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
    <div>
      <ShoppingCart />
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

export default Features;
