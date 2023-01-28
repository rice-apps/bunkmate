import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../context/UserContext";

interface InputProps {
    id: number;
    label: string;
    attribute: string;
    type: string;
    options: string[];
    placeholder: string;
  }

const InputField = ({label, type, attribute, options, placeholder}: InputProps) => {

    const [selected, setSelected] = useState("")
    const [rangeValue1, setRangeValue1] = useState(0)
    const [rangeValue2, setRangeValue2] = useState(0)
    const [selectedOpts, setSelectedOps] = useState([""])
    const {onboardingChange} = useContext(UserContext)

    return (
        <div className="input-field">
            
            <label htmlFor=""> {label}</label>
            { type==="text" &&
                <input onChange={(e)=>onboardingChange(e, attribute)} id={label} type="text" placeholder={placeholder}/>
            }
            { type==="select" &&
            <div className="options">
            {options.map(option=><button className={selected===option?"selected-btn":""} id={label} onClick={e=>{onboardingChange(e, attribute);setSelected(option)}} >{option}</button>)}
            </div>
            }
            { type==="multiple-select" &&
            <div className="options">
            {options.map(option=><button className={selectedOpts.includes(option)?"selected-btn":""} id={label} onClick={e=>{setSelectedOps(prevState=>(prevState.includes(option)?prevState.filter(item=>item!==option):[...prevState, option]));onboardingChange(e, attribute, [...selectedOpts, option].slice(1));}} >{option}</button>)}
            </div>
            }
            {type==="dropdown" &&
            <select id={label} onChange={(e)=>onboardingChange(e, attribute)}  className="">
                <option selected disabled>  </option>
                {options.map(opt=><option id="" value={opt}>{opt}</option>)} 
            </select>
            }
            { type==="textarea" &&
                <textarea rows={5} onChange={(e)=>onboardingChange(e, attribute)} id={label} placeholder={placeholder}>

                </textarea>
            }
            {type==="range" && 
            <div className="range-slider">
                <span></span>
                <input type="range" step="1" min="0" max="10" value={rangeValue1} onChange={(e)=>{setRangeValue1(parseInt(e.target.value))}} id="slider1"/>
                <input type="range" step="1" min="0" max="10" value={rangeValue2} onChange={(e)=>{setRangeValue2(parseInt(e.target.value))}} id="slider2"/>
                <span></span>
            </div>
            }
        </div>
    )
}

export default InputField