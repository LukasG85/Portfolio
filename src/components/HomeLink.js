import React from "react";
import { Link } from "gatsby";

const HomeLink = () => {
  return (
    <div className="home-link">
      <p>Back to home</p>
      <Link to="/">ŁG</Link>
    </div>
  );
};

export default HomeLink;
