import React from "react";
import "../App.scss";

const Header = () => {
  return (
    <div>
      <div className="upper-bar">
        <div className="container">
          <div className="row ">
            <div className="col-sm ">
              {" "}
              Phone: +216 28719238 email:haythem@gmail.com
            </div>
            <div className="col-sm text-right">full stack developer </div>
          </div>
        </div>
      </div>
      <div className="row header ">
        <div className="col-sm ">
          Home
        </div>
        <div className="col-sm text-right">full stack developer </div>
      </div>
    </div>
  );
};

export default Header;
