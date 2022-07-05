import React from "react";
import { Link } from "react-router-dom";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

const FavouriteItem = ({ isOpenSideBar, handleOpenSideBar }) => {
  return (
    <Offcanvas className="p-r-26" isOpen={isOpenSideBar} direction="end">
      <OffcanvasHeader>
        WishList
        <i class="fa-solid fa-xmark icon-close" onClick={handleOpenSideBar}></i>
      </OffcanvasHeader>
      <OffcanvasBody>
        <ul className="header-cart-wrapitem w-full">
          <li className="header-cart-item flex-w flex-t m-b-12">
            <div
              className="header-cart-item-img"
              //   onClick={() => dispatch(removeCartItem(v.id))}
            >
              <img />
            </div>
            <div className="header-cart-item-txt p-t-8">
              <Link
                className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                to="features"
              >
                fdfgfd
              </Link>
              <span className="header-cart-item-info">1 x $12</span>
            </div>
          </li>
        </ul>
        <div className="w-full">
          <div className="header-cart-total w-full p-tb-40">
            {/* Total: ${Price.toFixed(2)} */}
          </div>
          {/* <div className="header-cart-buttons flex-w w-full">
            <Link
              style={{ textDecoration: "none" }}
              to="/features"
              className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
            >
              View Cart
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="#"
              className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
            >
              Checout
            </Link>
          </div> */}
        </div>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default FavouriteItem;
