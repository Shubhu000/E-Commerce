import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactDropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem } from "../../Shop/store/action";
import Input from "../../../components/common/Input";

const ShoppingCart = () => {
  const { Cart, Price } = useSelector((state) => state.Shop);
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(Cart);
  }, [Cart, Price]);
  const CountryOptions = ["India", "Usa", "Uk"];
  return (
    <>
      <div className="bg0 p-t-65 p-b-60 m-t-10">
        <div className="container">
          <div className="flex-w p-l-25 p-r-15 p-lr-0-lg p-t-30">
            <Link to="/" className="stext-109 cl8 text-decoration-none hov-cl1">
              Home
              <i
                className="fa fa-angle-right m-l-9 m-r-10"
                aria-hidden="true"
              ></i>
            </Link>
            <span className="stext-109 cl14">Shopping-Cart</span>
          </div>
        </div>
        <form className="bg0 p-t-75 p-b-85">
          <div className="container">
            <div className="row">
              {cart.length > 0 && (
                <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                  <div className="m-l-25 m-r--38">
                    <div className="shop-cart">
                      <table className="table-shop-cart">
                        <tr className="table_head">
                          <th className="colum-1">Product</th>
                          <th className="colum-2"></th>
                          <th className="colum-3">Price</th>
                          <th className="colum-4">Quantity</th>
                          <th className="colum-5">Total </th>
                        </tr>
                        {cart.map((v, i) => (
                          <tr className="table_row" key={i}>
                            <td className="colum-1">
                              <div
                                className="remove-img"
                                onClick={() => dispatch(removeCartItem(v.id))}
                              >
                                <img src={v.image} alt="" />
                              </div>
                            </td>
                            <td className="colum-2">{v.title}</td>
                            <td className="colum-3">${v.price}</td>
                            <td className="colum-4">
                              <div className="wrap-num-product flex-w m-l-auto m-r-0">
                                <Input
                                  quantity={v.qty}
                                  id={v.id}
                                  price={v.productPrice}
                                />
                                {/* {v.qty} */}
                              </div>
                            </td>
                            <td className="colum-5">${v?.price * v?.qty}</td>
                          </tr>
                        ))}
                      </table>
                    </div>
                    <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                      <div className="flex-w flex-m m-r-20 m-tb-5">
                        <input
                          className="bor13 stext-104 size-117 cl2 m-r-10 p-lr-20 m-tb-5"
                          placeholder="Coupon Code"
                        />
                        <div className="flex-c-m stext-101 cl2 bor-13 bg8 size-118 trans-04 hov-btn3 pointer p-lr-20">
                          Apply Coupon
                        </div>
                      </div>
                      <div className="flex-c-m stext-101 cl2 size-119 bor-13 bg8 hov-btn3 pointer p-lr-15 m-tb-10 trans-04">
                        Update Cart
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {cart.length > 0 && (
                <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                  <div className="bor10 m-l-63 p-lr-40 p-b-40 p-t-30 m-r-40 m-lr-0-xl p-lr-15-sm">
                    <h4 className="mtext-109 cl2 p-b-30">Cart Total</h4>
                    <div className="flex-w flex-t bor12 p-b-13">
                      <div style={{ width: "34.6%" }}>
                        <span className="stext-110 cl2">SubTotal:</span>
                      </div>
                      <div style={{ width: "60.5%" }}>
                        <span className="mtext-110 cl2">
                          ${Price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="flex-w flex-t bor12 p-t-15 p-b-30">
                      <div className="w-full-ssm" style={{ width: "34.6%" }}>
                        <span className="stext-110 cl2">Shipping:</span>
                      </div>
                      <div
                        style={{ width: "60.5%" }}
                        className="p-r-18 p-r-0-sm w-full-ssm"
                      >
                        <p className="stext-111 cl6 p-t-2">
                          There are no shipping methods available. Please double
                          check your address, or contact us if you need any
                          help.
                        </p>
                        <div className="p-t-15">
                          <span className="stext-112 cl8">
                            Calculate Shipping
                          </span>
                          <div className="bor8 bg0 m-b-12 m-t-9">
                            <ReactDropdown
                              options={CountryOptions}
                              placeholder="Select a country"
                              // className="menu"
                            />
                          </div>
                          <div className="bor8-1 bg0 m-b-12">
                            <input
                              className="stext-111 cl8 plh3 p-lr-15 m-l-6"
                              placeholder="State / Country"
                              style={{
                                width: "166px",
                                padding: "6px",
                                borderRight: "1px solid #e6e6e6",
                              }}
                            />
                          </div>
                          <div className="bor8-1 bg0 m-b-12">
                            <input
                              className="stext-111 cl8 plh3 p-lr-15 m-l-6"
                              placeholder="Pincode"
                              style={{
                                width: "166px",
                                padding: "6px",
                                borderRight: "1px solid #e6e6e6",
                              }}
                            />
                          </div>
                          <div className="flex-w">
                            <div className="flex-c-m stext-101 cl2 size-115 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer">
                              Upadate Total
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-w flex-t p-t-27 p-b-30">
                      <div className="size-208">
                        <span className="mtext-101 cl2">Total:</span>
                      </div>
                      <div className="size-209 p-t-1">
                        <span className="mtext-110 cl2">
                          ${Price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ShoppingCart;
