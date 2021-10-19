import React from "react";
import { NavContact, NavContainer, NavItems } from "./navbar.styles";

export default function Navbar() {
  return (
    <NavContainer>
      <NavItems>
        <div className="logo">
          <img src="/assets1/Logo.png" alt="logo" />
        </div>

        <ul>
          <li>
            <a href="http://google.com">Home.</a>
          </li>
          <li>
            <a href="http://google.com">About Us.</a>
          </li>
          <li>
            <a href="http://google.com">Services.</a>
          </li>
          <li>
            <a href="http://google.com">Pages.</a>
          </li>
        </ul>
      </NavItems>
      <NavContact>
        <p>
          Call us <span>+880.762.009</span>
        </p>
        <select name="lang" id="lang">
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
        <button>Contact Us</button>
      </NavContact>
    </NavContainer>
  );
}
