import React from "react";
import Tilt from "react-tilt";

import Img from "gatsby-image";

export default function Product({ product }) {
  const { title, url } = product;
  const { fluid } = product.img;

  return (
    <Tilt className="Tilt" options={{ max: 20, scale: 1, reverse: true }}>
      <div className="Tilt-inner item">
        <a
          className="image"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{title}</p>
          <Img fluid={fluid} alt="Project" />
        </a>
      </div>
    </Tilt>
  );
}
