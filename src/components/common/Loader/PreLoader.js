import React from "react";
import Gif from "../../../assets/media/512x512.gif";
const Preloader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Gif} alt="" style={{ marginTop: "200px", width: "20%" }} />
    </div>
  );
};

export default Preloader;
