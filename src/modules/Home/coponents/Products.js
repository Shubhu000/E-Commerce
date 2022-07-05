import React, { useEffect, useState } from "react";
import FilterModal from "../../../components/common/FilterModal";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/action";

const Products = ({ location }) => {
  const { Product, State } = useSelector((state) => state.Home);
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);
  const [catagory, setCategory] = useState("All");
  const [show, setShow] = useState(true);
  const [showSearch, setShowSearch] = useState(true);
  const [product, setProduct] = useState([]);
  const [next, setNext] = useState(1);

  useEffect(() => {
    setProduct(Product);
  }, [Product]);
  useEffect(() => {
    if (Product.category === undefined) {
      setProduct(Product);
    }
  }, [Product.category]);
  const ProductsOverview = [
    { name: "All Products", value: 1, category: "All" },
    { name: "Women", value: 2, category: "women's clothing" },
    { name: "Men", value: 3, category: "men's clothing" },
    { name: "Jewelery", value: 4, category: "jewelery" },
    { name: "Electronics", value: 5, category: "electronics" },
  ];
  const handleSearch = (e) => {
    setProduct(
      Product.filter((item) => {
        if (item.title.toUpperCase().includes(e.target.value.toUpperCase())) {
          return item.title;
        } else {
          return null;
        }
      })
    );
  };
  const handleData = () => {
    setNext(next + 1);
    // setIsLength(isLength + 5);
  };
  const handleClearSearch = () => {
    setShowSearch(showSearch ? false : true);
    if (showSearch === false) {
      dispatch(fetchProducts());
    }
  };
  const handleActive = (e) => {
    console.log(e.value);
    if (e.value) {
      dispatch(fetchProducts());
    }
    setActive(e.value);
    setCategory(e.category);
  };

  return (
    <div className="bg0 m-t-23 p-b-140">
      <div className="container">
        {(location === "products" || location === "home3") && (
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">Product Overview</h3>
          </div>
        )}
        <div className="flex-w flex-sb-m p-b-52">
          <div className="flex-w flex-l-m filter-tope-group m-tb-10">
            {ProductsOverview.map((v, i) => (
              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5  ${
                  active === v.value ? "how-active1" : ""
                }`}
                data-filter={v.name}
                onClick={() => handleActive(v)}
                key={i}
              >
                {v.name}
              </button>
            ))}
          </div>

          <div className="flex-w flex-c-m m-tb-10">
            <div
              className=" flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter"
              onClick={() => setShow(show ? false : true)}
            >
              {show ? (
                <>
                  <i className="icon-filter cl2 m-r-6 fs-15 trans-04 m-r-6 fa-solid fa-filter"></i>
                </>
              ) : (
                <>
                  <i class="icon-close-filter cl2 m-r-6 fs-15 trans-04 m-r-6 fa-solid fa-xmark"></i>
                </>
              )}
              Filter
            </div>

            <div
              className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search"
              onClick={handleClearSearch}
            >
              {showSearch ? (
                <i className="fa-solid fa-magnifying-glass"></i>
              ) : (
                <i class="m-r-6 fa-solid fa-xmark"></i>
              )}
              Search
            </div>
          </div>

          {/* <!-- Search product --> */}
          <div className=" panel-search w-full p-t-10 p-b-15">
            {!showSearch && (
              <div className="bor8 dis-flex p-l-15">
                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>

                <input
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                  onChange={handleSearch}
                />
              </div>
            )}
          </div>

          {/* <!-- Filter --> */}
          {!show && <FilterModal />}
        </div>
        <ProductCard
          product={product}
          next={next}
          catagory={catagory}
          all={active}
        />

        <div className="flex-c-m flex-w w-full p-t-45">
          <button
            className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            style={{ textDecoration: "none" }}
            onClick={() => handleData()}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
