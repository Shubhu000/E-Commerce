import React, { useEffect, useState } from "react";
import Products from "../Home/coponents/Products";
import { fetchProducts } from "../Home/store/action";
import { useDispatch } from "react-redux";

const Shop = () => {
  
  const dispatch = useDispatch();
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
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="m-t-90">
      <Products location="shop" />
      <div
        className="btn-back-to-top"
        id="myBtn"
        style={{ display: `${scrollPosition > 100 ? "flex" : "none"}` }}
        onClick={scrollToTop}
      >
        <span className="symbol-btn-back-to-top">
          <i class="fa-solid fa-chevron-up"></i>
        </span>
      </div>
    </div>
  );
};

export default Shop;
