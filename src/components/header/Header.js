import React from "react";
import haythem1 from "../../assets/haythem1.png";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Haythem Said</h1>
      <p>
        I am a passionate and talented developer, working with enthusiasm at
        dataBiz. As a developer at dataBiz, I have the opportunity to utilize my
        full stack development skills to create innovative and efficient
        solutions. I am constantly staying up-to-date with the latest
        technologies and best development practices, allowing me to deliver
        high-quality results for every project. I take pride in contributing to
        the dataBiz team by bringing my technical expertise and a genuine
        passion for computer programming.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
      {/* 
      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src={haythem1} />
    </div>
  </div>
);

export default Header;
