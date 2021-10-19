import React, { useState } from "react";
import { NavContact, NavContainer, NavItems } from "./navbar.styles";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <NavContainer>
      <NavItems active={active}>
        <div className="logo">
          <img src="/assets1/Logo.png" alt="logo" />
        </div>
        <button className="menu" onClick={() => setActive((active) => !active)}>
          <img
            src={active ? "/assets1/IconsClose.png" : "/assets1/Menu.png"}
            alt="logo"
          />
        </button>
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
