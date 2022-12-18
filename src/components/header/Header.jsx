import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <img
            src="../assets/images/shared/desktop/logo.svg"
            alt=""
            className="logo"
          />
        </NavLink>
        <img
          src="../assets/images/shared/mobile/menu.svg"
          alt=""
          className="mobile"
        />

        <ul className="nav-big-screen">
          <NavLink to="/stories">
            <li>STORIES</li>
          </NavLink>
          <NavLink to="/features">
            <li>FEATURES</li>
          </NavLink>
          <NavLink to="/pricing">
            <li>PRICING</li>
          </NavLink>
        </ul>

        <button className="btn-big-screen">GET AN INVITE</button>
      </nav>
    </header>
  );
}
