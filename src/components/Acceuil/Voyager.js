import React from "react";
import { Link, Route } from "react-router-dom";
import Product from "../Acceuil/Product";

export default function Products({ match }) {
  
  const productsData = [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available"
    },
    
  ];
  return (
    <div className="product-page">
      <div className="product-list">
        <h1> Products</h1>
        <ul>
          {productsData.map((product, index) => (
            <li key={index}>
              <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="product-details">
        <Route
          path={`${match.url}/:productId`}
          render={props => <Product data={productsData} {...props} />}
        />
        <Route
          exact
          path={match.url}
          render={() => <div>Please select a product.</div>}
        />
      </div>
    </div>
  );
}
