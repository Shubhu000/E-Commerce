import React, { useEffect, useState } from "react";
import Heart1Jpg from "../../../assets/images/icons/icon-heart-01.png";
import Heart2Jpg from "../../../assets/images/icons/icon-heart-02.png";
import QuickViewModal from "../../../components/common/QuickViewModal";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchState } from "../store/action";
import { LikeButton } from "../../../components/common/LikeButton";

const ProductCard = ({ product, next = 1, isLength = 3, catagory, all }) => {
  const { State } = useSelector((state) => state.Home);
  const dispatch = useDispatch();
  const [quickViewModal, setQuickViewModal] = useState({
    show: false,
    id: 0,
  });
  const [products, setProducts] = useState([]);
  const [favorite, setFavorite] = useState([]);
  useEffect(() => {
    setProducts(product);
  }, [product, catagory, all]);
  const handleClick = (id) => {
    setFavorite([...favorite, id]);
  };
  const handleOnClose = () => {
    setQuickViewModal((prev) => ({
      ...prev,
      show: false,
      id: 0,
    }));
  };
  return (
    <div className="row isotope-grid justify-content-center">
      {products?.map((v, i) => (
        <>
          {(v.category === catagory || all === 1) && (
            <>
              {i <= isLength * next - 1 ? (
                <div
                  className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
                  style={{ border: "1px solid #e6e6e6", margin: "5px" }}
                  key={i}
                >
                  {/* <!-- Block2 --> */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img
                        src={v.image}
                        alt="IMG-PRODUCT"
                        style={{
                          maxWidth: "270px",
                          maxHeight: "334px",
                          minHeight: "334px",
                        }}
                      />

                      <button
                        to={"/"}
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                        style={{ textDecoration: "none" }}
                        onClick={() =>
                          setQuickViewModal((prev) => ({
                            ...prev,
                            show: true,
                            id: v.id,
                          }))
                        }
                      >
                        Quick View
                      </button>
                    </div>

                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <Link
                          to={"/product-details/" + v.id}
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                          style={{ textDecoration: "none" }}
                        >
                          {v.title}
                        </Link>

                        <span className="stext-105 cl3">${v.price}</span>
                      </div>

                      <div className="block2-txt-child2 flex-r p-t-3">
                        <LikeButton id={v} />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          )}
        </>
      ))}
      <QuickViewModal
        {...quickViewModal}
        onClose={handleOnClose}
        id={quickViewModal.id}
        qty={quickViewModal.qty}
        productPrice={quickViewModal.productPrice}
      />
    </div>
  );
};

export default ProductCard;
