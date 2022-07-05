import React, { useState } from "react";

const FilterModal = () => {
  const [active, setActive] = useState(4);
  const [activePrice, setActivePrice] = useState(1);
  const [activeColor, setActiveColor] = useState(2);
  const [activeTags, setActiveTags] = useState();
  const SortBy = [
    { name: "Default", value: 1 },
    { name: "Popularity", value: 2 },
    { name: "Average rating", value: 3 },
    { name: "Newness", value: 4 },
    { name: "Price: Low to High", value: 5 },
    { name: "Price: High to Low", value: 6 },
  ];
  const Price = [
    { name: "All", value: 1 },
    { name: "$0.00 - $50.00", value: 2 },
    { name: "$50.00 - $100.00", value: 3 },
    { name: "$100.00 - $150.00", value: 4 },
    { name: "$150.00 - $200.00", value: 5 },
    { name: "$200.00+", value: 6 },
  ];
  const Color = [
    { name: "Black", value: 1 },
    { name: "Blue", value: 2 },
    { name: "Grey", value: 3 },
    { name: "Green", value: 4 },
    { name: "Red", value: 5 },
    { name: "White", value: 6 },
  ];
  const Tags = [
    { name: "Fashion", value: 1 },
    { name: "Lifestyle", value: 2 },
    { name: "Denim", value: 3 },
    { name: "Streetstyle", value: 4 },
    { name: "Crafts", value: 5 },
  ];
  return (
    <div className=" panel-filter w-full p-t-10">
      <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
        <div className="filter-col1 p-r-15 p-b-27">
          <div className="mtext-102 cl2 p-b-15">Sort By</div>

          <ul style={{ paddingLeft: "0px" }}>
            {SortBy.map((v, i) => (
              <li className="p-b-6" key={i}>
                <a
                  href="#"
                  className={`filter-link stext-106 trans-04 ${
                    active === v.value ? "filter-link-active" : ""
                  }`}
                  style={{ textDecoration: "none" }}
                  onClick={() => setActive(v.value)}
                >
                  {v.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-col2 p-r-15 p-b-27">
          <div className="mtext-102 cl2 p-b-15">Price</div>

          <ul style={{ paddingLeft: "0px" }}>
            {Price.map((v, i) => (
              <li className="p-b-6" key={i}>
                <a
                  href="#"
                  className={`filter-link stext-106 trans-04  ${
                    activePrice === v.value ? "filter-link-active" : ""
                  }`}
                  onClick={() => setActivePrice(v.value)}
                  style={{ textDecoration: "none" }}
                >
                  {v.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-col3 p-r-15 p-b-27">
          <div className="mtext-102 cl2 p-b-15">Color</div>

          <ul style={{ paddingLeft: "0px" }}>
            {Color.map((v, i) => (
              <li className="p-b-6" key={i}>
                <span className="fs-15 lh-12 m-r-6">
                  <i class="fas fa-circle" style={{ color: v.name }}></i>
                </span>

                <a
                  href="#"
                  className={`filter-link stext-106 trans-04 ${
                    activeColor === v.value ? "filter-link-active" : ""
                  }`}
                  onClick={() => setActiveColor(v.value)}
                  style={{ textDecoration: "none" }}
                >
                  {v.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-col4 p-b-27">
          <div className="mtext-102 cl2 p-b-15">Tags</div>

          <div className="flex-w p-t-4 m-r--5">
            {Tags.map((v, i) => (
              <a
                key={i}
                href="#"
                className={
                  "flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                }
                onClick={() => setActiveTags(v.value)}
                style={{ textDecoration: "none" }}
              >
                {v.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
