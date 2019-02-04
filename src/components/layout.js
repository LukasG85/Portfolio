import React from "react";

import Navigation from "./global/Navigation";
import "../components/layout.css";
import "../scss/style.scss";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-img">
        <Navigation />
        {children}
        <footer className="main-footer">
          <p>Copyright &copy; 2018</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
