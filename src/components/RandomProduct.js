import React from "react";
import ReactStars from "react-rating-stars-component";

const RandomProduct = (props) => {
  const { product } = props;

  return (
    <div className="random-products mb-3 d-flex">
      <div className="w-50">
        <img
          src={product.images.edges[0]?.node.originalSrc}
          className="img-fluid"
          alt={product.images.edges[0]?.node.altText}
        />
      </div>
      <div className="w-50">
        <h5>
          {product.title}
        </h5>
        <ReactStars
          count={5}
          size={24}
          value={4}
          edit={false}
          activeColor="#ffd700"
        />
        <b>{product.priceRange.maxVariantPrice.currencyCode === 'USD' ? '$' : '€'} {product.priceRange.maxVariantPrice.amount}</b>
      </div>
    </div>
  );
};

export default RandomProduct;
