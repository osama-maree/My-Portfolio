import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "animate.css";
import "./navbar.css";
const NavBar = () => {
  const navigate = useNavigate();
  let content = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About Me" },
    { path: "/know", text: "knowledge" },
    { path: "/work", text: "My Work" },
    { path: "/contact", text: "Contact Me" },
  ];
  return (
    <div className="mynavbar animate__animated animate__bounce fexid-top">
      <div className="first-items">
        <img
          src="/assets/back.jpg"
          alt="myImg"
          onClick={() => navigate("/")}
          className="w-100 h-100 mt-1 "
        />
      </div>
      <div className="items">
        {content.map((item, index) => {
          return (
            <div key={index} className="iitem">
              <Link to={item.path} className="btn btn-primary fw-bold">
                {item.text}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="first-items">
        <img
          src="/assets/back.jpg"
          alt="myImg"
          onClick={() => navigate("/")}
          className="w-100 h-100 mt-1"
        />
      </div>
    </div>
  );
};

export default NavBar;
