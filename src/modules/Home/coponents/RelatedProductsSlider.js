import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import CarouselCard from "../../../components/common/CarouselCard";

const RelatedProductsSlider = () => {
  const { Product } = useSelector((state) => state.Home);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(Product);
  }, [Product]);
  return (
    <div className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>
      </div>
      <div className="container-fluid">
        <Slider>
          <CarouselCard product={product} />
        </Slider>
      </div>
    </div>
  );
};

export default RelatedProductsSlider;
