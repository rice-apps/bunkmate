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
            { type==="select" &&
            <div className="options">
            {options.map(option=><button className={selected===option?"selected-btn":""} id={label} onClick={e=>{onChange(e);setSelected(option)}} >{option}</button>)}
            </div>
            }
            {type==="dropdown" &&
            <select id={label} onChange={(e)=>onChange(e)}  className="">
                <option selected disabled>  </option>
                {options.map(opt=><option value={opt}>{opt}</option>)} 
            </select>
            }
            { type==="textarea" &&
                <textarea rows={5} onChange={(e)=>onChange(e)} id={label} placeholder={placeholder}>

                </textarea>
            }
        </div>
    )
}

export default InputField