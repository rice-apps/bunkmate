interface SectionProps {
    name: string;
    id: number;
    activeSection: number;
    setActiveSection: Function;
  }

const NavLink = ({name, id, activeSection, setActiveSection}: SectionProps) => {

    return (
        <div className={id===activeSection?"svg-active":"svg-inactive"} onClick={()=>{setActiveSection(id)}}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle  cx="15" cy="15" r="13" fill="#FAA986" stroke="#FAA986" stroke-width="4"/>
            </svg>
        <p>{name}</p>
        </div>
    )
}

export default NavLink

/* setSection:{setSection: function} */