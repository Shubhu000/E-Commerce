import React from "react";
import Products from "../coponents/Products";
import ProductSlider from "../coponents/ProductSlider";
import ProductType from "../coponents/ProductType";

const HomePage3 = () => {
  return (
    <div>
      <ProductSlider location="home3" />
      <ProductType location="home3" smallCard="small" />
      <Products location="home3" />
    </div>
  );
};

export default HomePage3;
