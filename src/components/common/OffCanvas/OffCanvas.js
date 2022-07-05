import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem } from "../../../store/actions";

const OffCanvas = ({ isOpenSideBar, handleOpenSideBar }) => {
  const { Cart, Price } = useSelector((state) => state.Shop);
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(Cart);
  }, [Cart, Price]);
  return (
    <Offcanvas className="p-r-26" isOpen={isOpenSideBar} direction="end">
      <OffcanvasHeader>
        Your Cart
        <i class="fa-solid fa-xmark icon-close" onClick={handleOpenSideBar}></i>
      </OffcanvasHeader>
      {cart.length > 0 ? (
        <OffcanvasBody>
          {cart.map((v, i) => (
            <ul className="header-cart-wrapitem w-full" key={i}>
              <li className="header-cart-item flex-w flex-t m-b-12">
                <div
                  className="header-cart-item-img"
                  onClick={() => dispatch(removeCartItem(v.id))}
                >
                  <img src={v.image} />
                </div>
                <div className="header-cart-item-txt p-t-8">
                  <Link
                    className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                    to="features"
                  >
                    {v.title}
                  </Link>
                  <span className="header-cart-item-info">1 x ${v.price}</span>
                </div>
              </li>
            </ul>
          ))}
          <div className="w-full">
            <div className="header-cart-total w-full p-tb-40">
              Total: ${Price.toFixed(2)}
            </div>
            <div className="header-cart-buttons flex-w w-full">
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
            </div>
          </div>
        </OffcanvasBody>
      ) : (
        <OffcanvasBody>
          <h5 className="p-l-28">No Items In Cart</h5>
        </OffcanvasBody>
      )}
    </Offcanvas>
  );
};

export default OffCanvas;
