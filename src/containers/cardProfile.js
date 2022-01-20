import React from "react";
import { useParams, useLocation} from 'react-router-dom'
const CardProfile = () => {
    // const param = useParams()
    const location = useLocation()
    console.log(location)
    const{category, description, image, price} = location.state
  return (
    <div style={{width:'80%', margin:'25px auto'}}>
      <div className="ui card" style={{width:'60%', height:'70vh'}}>
        <div className="ui slide masked reveal image">
          <img src={image} style={{height:'70%', width:'100%'}} className=" content" />
          {/* <img src="/images/avatar/large/elliot.jpg" className="hidden content" /> */}
        </div>
        <div className="content">
          <a className="header">{category}</a>
          <div className="meta">
            <span className="date">{description}</span>
          </div>
        </div>
        <div className="extra content">
          <a>
            PRICE ${price}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
