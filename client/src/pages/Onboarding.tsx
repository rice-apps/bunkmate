import { useState } from "react"
import "../styles/Onboarding.css"
import Navlink from "../components/onboarding/NavLink"
import mock from "../mock"
import Form from "../components/onboarding/Form"
import React from "react"

const Onboarding = () => {

    const [activeSection, setActiveSection] = useState(0)
    const [user, setUser] = useState({})

    const onChange = (e:any) => {
        e.preventDefault()
        setUser(prevState=>({
            ...prevState,
            [e.target.id.split(" ").join("")[0].toLowerCase() + e.target.id.split(" ").join("").slice(1)]: e.target.value?e.target.value:e.target.innerHTML
        }))
    }

    return (
        <div className="onboarding">
             <div className="nav">
                {mock.mockSections.map(mockSection=><Navlink activeSection={activeSection} id={mockSection.id} name = {mockSection.name}/>)}
            </div>
            {mock.mockForms.map(form=><Form show={activeSection===form.id} setActiveSection={setActiveSection} onChange={onChange} key={form.id} id={form.id} welcome={form.welcome} header={form.header} fields={form.fields}/>)}
        </div>
    )
}   

export default Onboarding