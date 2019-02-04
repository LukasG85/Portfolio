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

    // <ProductWrapper>
    //   <Img fixed={fixed} className="img" />
    //   <div className="text">
    //     <div className="product-content">
    //       <h3 className="name">{name}</h3>
    //       <h3 className="price">{price} zł</h3>
    //     </div>
    //     <p className="info">{ingridients}</p>
    //   </div>
    // </ProductWrapper>
  );
}
