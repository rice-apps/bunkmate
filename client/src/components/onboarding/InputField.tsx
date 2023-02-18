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
    max: number;
    min: number;
    step: number;
  }

const InputField = ({label, type, attribute, options, placeholder, max, min, step}: InputProps) => {

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
                <span>{min}</span>
                <span className="slider1-thumb" style={{left:(rangeValue1-min)*100/(max-min)<60?(rangeValue1-min)*100/(max-min)+"%":(rangeValue1-min)*100/(max-min)-6 +"%", display:rangeValue1===max || rangeValue1===min?"none":"block"}}>{rangeValue1}</span>
                <span className="slider1-thumb" style={{left:(rangeValue2-min)*100/(max-min)<65?(rangeValue2-min)*100/(max-min) +"%":(rangeValue2-min)*100/(max-min)-6 +"%", display:rangeValue2===max || rangeValue2===min?"none":"block"}}>{rangeValue2}</span>
                <input type="range" step={step} min={min} max={max}value={rangeValue1} onChange={(e)=>{setRangeValue1(parseInt(e.target.value))}} id="slider1"/>
                <input type="range" step={step} min={min} max={max}value={rangeValue2} onChange={(e)=>{setRangeValue2(parseInt(e.target.value))}} id="slider2"/>
                <span>{max}</span>
            </div>
            }
        </div>
    )
}

export default InputField