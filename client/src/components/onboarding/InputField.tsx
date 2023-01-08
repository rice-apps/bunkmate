import React from "react";
import { useState } from "react";

interface InputProps {
    id: number;
    label: string;
    type: string;
    options: string[];
    placeholder: string;
    onChange: Function
  }

const InputField = ({label, type, options, placeholder, onChange}: InputProps) => {

    const [selected, setSelected] = useState("")

    return (
        <div className="input-field">
            
            <label htmlFor=""> {label}</label>
            { type==="text" &&
                <input onChange={(e)=>onChange(e)} id={label} type="text" placeholder={placeholder}/>
            }
            <div className="options">
            {options.map(option=><button className={selected===option?"selected-btn":""} id={label} onClick={e=>{onChange(e);setSelected(option)}} >{option}</button>)}
            </div>
        </div>
    )
}

export default InputField