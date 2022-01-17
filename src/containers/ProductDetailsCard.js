import React from "react";
import Profile from "../img/Profile.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ProductDetailsCard() {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  // console.log(response[0])
  // const{name, price} = response[0]
  const renderProducts = products.map((product) => (
    <Link to={`/profile/${product.id}`} state={product}>
    <div className="ui card" style={{ margin: "20px", height: "40rem" }}>
      <div className="image">
        <img
          style={{ cursor: "pointer", height: "100%" }}
          src={product.image}
        />
      </div>
      <div className="content">
        <a className="header">{product.title}</a>
        <div className="meta">{/* <span className="date">{name}</span> */}</div>
        <div className="description">{product.category}</div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon"></i>
          {`${product.price}`}
        </a>
      </div>
    </div>

    </Link>

  ));
  return (
    <div
      style={{ width: "90%", margin: "0 auto" }}
      className="ui three column grid"
    >
      {renderProducts}
    </div>
  );
}

export default ProductDetailsCard;
