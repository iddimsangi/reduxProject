import React from "react";

function Header() {
  return (
    <div>
      <div className="ui inverted segment">
        <div className="ui inverted secondary pointing menu">
          <a className="item">Home</a>
          <a className="item">Messages</a>
          <a className="item active">Friends</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
