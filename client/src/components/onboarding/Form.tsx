import React from "react";
import { useEffect, useState } from "react";
import InputField from "./InputField";

interface field {
    id: number;
    attribute: string;
    label: string;
    type: string;
    options: string[];
    placeholder: string;
  }


interface FormProps {
    id: number;
    welcome: string;
    header: string;
    fields: field[];
    onChange: Function;
    setActiveSection: Function;
    show: boolean;
    activeSection: number;
  }



const Form = ({welcome, header, fields, onChange, setActiveSection, show, activeSection}: FormProps) => {


    return (
         
        <div className={show?"onboarding-form active": "onboarding-form"}>
            <h1>
                {welcome}
            </h1>
             
            <form>
                <h2>{header}</h2>
                {fields.map(field=><InputField onChange={onChange} attribute={field.attribute} key={field["id"]} id={field.id} placeholder={field.placeholder} options={field.options} label={field["label"]} type={field.type}/>)}
                <div className="navigation">
                { activeSection > 0 &&
                <div className="submit-div">
                    <button onClick={(e)=>{e.preventDefault();setActiveSection((prevState:number)=>prevState-1)}} className="submit-btn">Previous</button>
                </div>
                }
                <div className="submit-div">
                    <button onClick={(e)=>{e.preventDefault();setActiveSection((prevState:number)=>prevState+1)}} className="submit-btn">Next</button>
                </div>
                </div>
            </form>
            
        </div>
    )
}

export default Form