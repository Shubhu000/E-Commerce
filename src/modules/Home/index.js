import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./store/action";
import HomePage3 from "./HomePage/HomePage3";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="wrap-header-cart js-panel-cart">
      <HomePage3 />
    </div>
  );
};

export default Home;
