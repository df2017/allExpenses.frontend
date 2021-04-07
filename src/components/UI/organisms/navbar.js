import React, { useState } from "react";
import MenuNav from "../molecules/menu-nav";

function NavBar() {
  const [isActive, setisActive] = useState(false);

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h4 className="navbar-item is-size-5 is-text-white">All Expenses</h4>

        {/* eslint-disable-next-line */}
        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <MenuNav />
      </div>
    </nav>
  );
}
export default NavBar;
