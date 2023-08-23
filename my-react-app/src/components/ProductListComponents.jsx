// eslint-disable-next-line no-unused-vars
import React from "react";
import { apartments } from "../data.jsx";

const ProductListComponent = () => {
  return (
    <div className="product-list">
      {apartments.map((apartment) => (
        <div key={apartment.id}>
          <h3>{apartment.name}</h3>
          <p>${apartment.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductListComponent;
