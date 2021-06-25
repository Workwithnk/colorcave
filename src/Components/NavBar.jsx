import React from "react";
import { FaDev, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import "../CSS/NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <a className="NavBar_Title" href="https://color-cave.web.app">
        ColorCave
      </a>

      <div className="NavBar_Follow">
        <a
          href="https://www.facebook.com/nikhil.kavathiya.378"
          className="socialIcons"
        >
          <FaFacebook className=" icon" />
        </a>
        <a
          href="https://www.instagram.com/i._.am._.nk/?igshid=1hevhi9xzvwul"
          className="socialIcons"
        >
          <FaInstagram className=" icon" />
        </a>
        <a href="https://dev.to/workwithnk" className="socialIcons">
          <FaDev className=" icon" />
        </a>
        <a href="https://github.com/workwithnk/" className="socialIcons">
          <FaGithub className="icon" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
