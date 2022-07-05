import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      {<Header locationType="home" />}
      <div>{children}</div>
      {<Footer />}
    </>
  );
};

export default Layout;
