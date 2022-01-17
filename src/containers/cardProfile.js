import React from "react";
import { useParams } from 'react-router-dom'
const CardProfile = () => {
    const param = useParams()
    console.log(param)
  return (
    <div style={{width:'80%', margin:'25px auto'}}>
      <div className="ui card" style={{width:'100%', height:'60vh'}}>
        <div className="ui slide masked reveal image">
          <img src="/images/avatar/large/jenny.jpg" className="visible content" />
          {/* <img src="/images/avatar/large/elliot.jpg" className="hidden content" /> */}
        </div>
        <div className="content">
          <a className="header">Team Fu &amp; Hess</a>
          <div className="meta">
            <span className="date">Create in Sep 2014</span>
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="users icon"></i>2 Members
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
