import React from "react";
import NavbarComponent from "../UI/Navbar";
import HelmetComponent from "./SEO";

function Header() {
  return (
    <header>
      <HelmetComponent />
      <NavbarComponent />
    </header>
  );
}

export default Header;
