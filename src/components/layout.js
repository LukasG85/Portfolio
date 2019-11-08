import React from "react";

import Navigation from "./global/Navigation";
import "../components/layout.css";
import "../scss/style.scss";
import HomeLink from "./HomeLink";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-img">
        <HomeLink />
        <Navigation />
        {children}
      </div>
    </>
  );
};

export default Layout;
