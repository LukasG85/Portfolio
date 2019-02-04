import React from "react";
import Img from "gatsby-image";

export default function Product({ product }) {
  const { title, url } = product;
  const { fluid } = product.img;

  return (
    <div className="item">
      <a className="image" href={url} target="_blank" rel="noopener noreferrer">
        <p>{title}</p>
        <Img fluid={fluid} alt="Project" />
      </a>
    </div>
  );
}
