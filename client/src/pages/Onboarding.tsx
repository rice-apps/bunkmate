import { useState } from "react"
import "../styles/Onboarding.css"
import circle from "../media/Circle.svg" 
import Navlink from "../components/onboarding/NavLink"
import mockSections from "../mock"

const Onboarding = () => {

    const [activeSection, setActiveSection] = useState(0)

    return (
        <div className="onboarding">
            <div className="nav">
                {mockSections.map(mockSection=><Navlink activeSection={activeSection} id={mockSection.id} name = {mockSection.name} setActiveSection={setActiveSection}/>)}
            </div>
        </div>
    )
}

export default Onboarding