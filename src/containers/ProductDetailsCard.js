import React from "react";
import Profile from "../img/Profile.png"
import { useSelector } from "react-redux"
function ProductDetailsCard() {
  const response = useSelector((state) => state.allProducts.products)
  // console.log(response[0])
  const{name, price} = response[0]
  return (
    <div style={{width:'90%', margin:'0 auto'}}>
      <div className="ui card" style={{marginTop:'20px'}}>
        <div className="image">
          <img src={Profile} />
        </div>
        <div className="content">
          <a className="header">Kristy</a>
          <div className="meta">
            {/* <span className="date">{name}</span> */}
          </div>
          <div className="description">
            Kristy is an art director living in New York.
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon"></i>
          {/* {price} */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsCard;
