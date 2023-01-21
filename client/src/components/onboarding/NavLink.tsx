import React from "react";

interface SectionProps {
    name: string;
    id: number;
    activeSection: number;  
  }

const NavLink = ({name, id, activeSection}: SectionProps) => {

    return (
        <div className="nav-link">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className={id<=activeSection?"svg-active":"svg-inactive"}  cx="15" cy="15" r="13" fill="#25335D" stroke="#25335D" stroke-width="4"/>
            </svg>
        <p className={id===activeSection?"link-active":"link-inactive"}>{name}</p>
        </div>
    )
}

export default NavLink

/* setSection:{setSection: function} */