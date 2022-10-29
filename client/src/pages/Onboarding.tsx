import { useState } from "react"
import "../styles/Onboarding.css"
import circle from "../media/Circle.svg" 
import Navlink from "../components/onboarding/NavLink"
import mock from "../mock"
import Form from "../components/onboarding/Form"

const Onboarding = () => {

    const [activeSection, setActiveSection] = useState(0)

    return (
        <div className="onboarding">
            <div className="nav">
                {mock.mockSections.map(mockSection=><Navlink activeSection={activeSection} id={mockSection.id} name = {mockSection.name}/>)}
            </div>
            {mock.mockForms.map(form=><Form key={form.id} welcome={form.welcome} header={form.header} inputs={form.inputs}/>)}
        </div>
    )
}   

export default Onboarding