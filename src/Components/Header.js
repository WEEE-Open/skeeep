import React from "react";
import LogoSvg from "./LogoSvg";
import "./Header.css";

function Header(props) {
  return (
    <div className={"header"}>
      <LogoSvg />
    </div>
  );
}

export default Header;
