import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incementQty, decementQty } from "../../store/actions";

const Input = ({ id, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
        onClick={() => dispatch(decementQty({ id: id, price: price }))}
      >
        <i class="fas fa-minus"></i>
      </div>
      <input
        className="mtext-104 cl3 txt-center num-product"
        type="number"
        value={quantity}
      />
      <div
        className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
        onClick={() => dispatch(incementQty({ id: id, price: price }))}
      >
        <i class="fas fa-plus"></i>
      </div>
    </>
  );
};

export default Input;
