import React, { useState, useEffect } from "react";

// css
import "../styles/Navbar.css";

// navbar dropdown
import { NavDropdown } from "./NavDropdown";
import { Link } from "react-router-dom";

interface NavbarProps {
  page: string;
}

const useActiveButton = (): [string, (button: string) => void] => {
  const [activeButton, setActiveButton] = React.useState("A");

  const handleLinkClick = (button: string) => {
    setActiveButton(button);
  };

  return [activeButton, handleLinkClick];
};

const Navbar: React.FC<NavbarProps> = () => {
  const [activeButton, setActiveButton] = useActiveButton();

  return (
    <div className="banner">
      <div className="banner-logo">
        <strong>bunkmate</strong>
      </div>
      <div className="container">
        <div className="btn-group">
          <div className="link-container">
            <>
              <Link
              to="/listings"
              className={activeButton === "listings" ? "btn-selected" : ""}
              onClick={() => setActiveButton("listings")}
              >
              {" "}
              Listings
              
              </Link>
              <Link
              to="/profiles"
              className={activeButton === "profiles" ? "btn-selected" : ""}
              onClick={() => setActiveButton("profiles")}
              >
              {" "}
              Profiles
              </Link>

            </>
          </div>
        </div>
      </div>
      <NavDropdown />

    </div>
  );
};

export { Navbar };
