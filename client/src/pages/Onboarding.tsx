import { useState } from "react"
import "../styles/Onboarding.css"
import Navlink from "../components/onboarding/NavLink"
import mock from "../mock"
import Form from "../components/onboarding/Form"
import React from "react"

const Onboarding = () => {

    const [activeSection, setActiveSection] = useState(0)
    const [user, setUser] = useState({fullName:""})
    const [showing, setShowing] = useState(false)
    const onChange = (e:any, attribute:string) => {
        e.preventDefault()
        setUser(prevState=>({
            ...prevState,
            /* [e.target.id.split(" ").join("")[0].toLowerCase() + e.target.id.split(" ").join("").slice(1)] */
            [attribute]: e.target.value?e.target.value:e.target.innerHTML
        }))
    }
    const selectLiving = (e:any) => {
        e.preventDefault()
        setUser(prevState=>({
            ...prevState,
            "living": e.target.innerHTML.split(" ").join("")[0].toLowerCase() + e.target.innerHTML.split(" ").join("").slice(1)
        }))
        setShowing(true)
    }
    //called when submit button is pressed on last section
    const onFinish = () => {
        //TODO: perform update mutation to backend


    }

    return (
        <div className="onboarding">
             <div className="nav">
                {mock.mockSections.map(mockSection=><Navlink activeSection={activeSection} id={mockSection.id} name = {mockSection.name}/>)}
            </div>
            
            {/* TODO: add finish page at the end 
            just confirms that user has beeen created 
            and button to go to or automatical go to home page  */}
            {(showing || activeSection!==1)? mock.mockForms.map(form=><Form  show={activeSection===form.id} activeSection={activeSection} setActiveSection={setActiveSection} onChange={onChange} key={form.id} id={form.id} welcome={form.welcome} header={form.header} fields={form.fields}/>): 
            <div className="living">
                <h1>
                    Nice to meet you, <span className="name">{user.fullName}</span>
                </h1>
                <h2 >
                    Where will you be living?
                </h2>
                <div className="bubbles">
                    <button onClick={(e)=>{selectLiving(e)}}>
                        On Campus
                    </button>
                    <button onClick={(e)=>{selectLiving(e)}}>
                        Off Campus
                    </button>
                </div>
            </div> } 
        </div>
    )
}   

export default Onboarding