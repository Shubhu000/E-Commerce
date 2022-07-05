import React from "react";
import closeIcon from "../../../assets/images/icons/icon-close.png";
import { Carousel } from "react-responsive-carousel";

const CustomGallarey = ({ data, onClose }) => {
  return (
    <div className="custom-gallery-lightbox">
      <div className="container">
        <div>
          <img
            src={closeIcon}
            onClick={onClose}
            className="close-btn gallery-closePopUp pointer p-0"
            alt=""
          />
        </div>
        <Carousel
          showArrows={true}
          useKeyboardArrows={true}
          showThumbs={false}
          autoFocus={true}
        >
          <div
          // className="container"
          // style={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          //   flexDirection: "column",
          // }}
          >
            <img alt="" src={data} className="lightbox-img" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CustomGallarey;
