import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

// css
import "../styles/Navbar.css";

// navbar dropdown
import { NavDropdown } from "./NavDropdown";

interface NavbarProps {
  page: string;
}

const Navbar: React.FC<NavbarProps> = ({ page }) => {
  const [onCampus, setOnCampus] = useState(true);
  const [listings, setListings] = useState(true);

  const toggleOnCampus = () => {
    setOnCampus(true);
  };
  const toggleOffCampus = () => {
    setOnCampus(false);
  };

  const toggleListings = () => {
    setListings(true);
  };
  const toggleProfiles = () => {
    setListings(false);
  };

  return (
    <div className="banner">
      <div className="banner-logo">
        <strong>bunkmate</strong>
      </div>
      <div className="container">
        <div className="btn-group">
          {page === "Homepage" && (
            <>
              <button
                className={onCampus ? "btn-selected" : ""}
                onClick={toggleOnCampus}
              >
                {" "}
                On-Campus
              </button>
              <button
                className={!onCampus ? "btn-selected" : ""}
                onClick={toggleOffCampus}
              >
                {" "}
                Off-Campus
              </button>
            </>
          )}
          {page === "Listings" && (
            <>
              <button
                className={listings ? "btn-selected" : ""}
                onClick={toggleListings}
              >
                {" "}
                Listings
              </button>
              <button
                className={!listings ? "btn-selected" : ""}
                onClick={toggleProfiles}
              >
                {" "}
                Profiles
              </button>
            </>
          )}
        </div>
      </div>
      <NavDropdown />
    </div>
  );
};

export { Navbar };
