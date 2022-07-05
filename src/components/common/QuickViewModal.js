import React from "react";
import { Modal } from "reactstrap";
import closeIcon from "../../assets/images/icons/icon-close.png";

import ProductDetailsSlider from "../../modules/Home/coponents/ProductDetailsSlider";
const QuickViewModal = ({ show, onClose, id, productPrice, qty }) => {
  return (
    <Modal
      isOpen={show}
      toggle={onClose}
      className="modal-dialog modal-dialog-centered"
      style={{ maxWidth: "1170px" }}
    >
      <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
          <button className="how-pos3 hov3 trans-04 ">
            <img src={closeIcon} alt="CLOSE" onClick={onClose} />
          </button>
          <ProductDetailsSlider id={id} />
        </div>
      </div>
    </Modal>
  );
};

export default QuickViewModal;
