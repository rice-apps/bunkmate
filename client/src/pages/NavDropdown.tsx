import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

//CSS
import '../styles/NavDropdown.css';

const styles = {
  hline: {
    border: "1px solid gray"
  }
}

const NavDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="dropdown-container">
      {/* onclick event for profile icon in navbar */}
      <div className="nav-profile" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faCircleUser}/>
      </div>

      {isDropdownOpen && (
        <div className="dropdown-content">
            <ul>
                <li>account</li>
                <li>favorites</li>
                <li>messages</li>
                <li>notifications</li>
                <li style={styles.hline}> </li>
                <li>manage roommate profile</li>
                <li>manage your listings</li>
                <li style={styles.hline}> </li>
                <li>settings</li>
                <li>log out</li>
            </ul>
        </div>
      )}
    </div>
  );
};

export {NavDropdown};