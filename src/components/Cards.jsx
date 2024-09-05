import React from "react";
import products from "./products.json";
const Cards = () => {
  console.log(products);
  return (
    <div className="d-flex ">
      {products.products.map((product, index) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
             {product.description}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
