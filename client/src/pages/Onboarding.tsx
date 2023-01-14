import { useState } from "react"
import "../styles/Onboarding.css"
import circle from "../media/Circle.svg" 
import Navlink from "../components/onboarding/NavLink"
import mock from "../mock"
import Form from "../components/onboarding/Form"

const Onboarding = () => {

    const [activeSection, setActiveSection] = useState(0)
    const [user, setUser] = useState({fullName:""})
    const [showing, setShowing] = useState(false)
    const onChange = (e:any) => {
        e.preventDefault()
        setUser(prevState=>({
            ...prevState,
            [e.target.id.split(" ").join("")[0].toLowerCase() + e.target.id.split(" ").join("").slice(1)]: e.target.value?e.target.value:e.target.innerHTML
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

    return (
        <div className="onboarding">
            <div className="nav">
                {mock.mockSections.map(mockSection=><Navlink activeSection={activeSection} id={mockSection.id} name = {mockSection.name}/>)}
            </div>
            
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