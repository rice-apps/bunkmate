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
    const [rangeValue1, setRangeValue1] = useState(min+1)
    const [rangeValue2, setRangeValue2] = useState(max+1)
    const [selectedOpts, setSelectedOps] = useState([""])
    const {onboardingChange, setUser} = useContext(UserContext)

    const updateUserRangeInput = ()=> {
        if (rangeValue1<rangeValue2) {
            setUser((prev:object)=>{return {...prev, [attribute]:rangeValue1.toString()+"-"+rangeValue2.toString()}})
        }
        else {
            setUser((prev:object)=>{return {...prev, [attribute]:rangeValue2.toString()+"-"+rangeValue1.toString()}})
        }
    }


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
                <span className="slider1-thumb" style={{left:(rangeValue1-min-1)*100/(max-min+0.5)+"%", display:rangeValue1===max+1 || rangeValue1===min+1?"none":"block"}}>{rangeValue1-1}</span>
                <span className="slider1-thumb" style={{left:(rangeValue2-min-1)*100/(max-min+0.5)+"%", display:rangeValue2===max+1 || rangeValue2===min+1?"none":"block"}}>{rangeValue2-1}</span>
                <input  type="range" step={step} min={min+1} max={max+1}value={rangeValue1} onChange={(e)=>{setRangeValue1(parseInt(e.target.value));updateUserRangeInput()}} id="slider1"/>
                <input type="range" step={step} min={min+1} max={max+1}value={rangeValue2} onChange={(e)=>{setRangeValue2(parseInt(e.target.value));updateUserRangeInput()}} id="slider2"/>
                <span>{max}</span>
            </div>
            }
        </div>
    )
}

export default InputField