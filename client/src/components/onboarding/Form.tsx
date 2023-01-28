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
    setActiveSection: Function;
    show: boolean;
    activeSection: number;
    onFinished: Function;
  }



const Form = ({welcome, header, fields, setActiveSection, show, activeSection, onFinished}: FormProps) => {


    return (
         
        <div className={show?"onboarding-form active": "onboarding-form"}>
            <h1>
                {welcome}
            </h1>
             
            <form>
                <h2>{header}</h2>
                {fields.map(field=><InputField attribute={field.attribute} key={field["id"]} id={field.id} placeholder={field.placeholder} options={field.options} label={field["label"]} type={field.type}/>)}
                <div className="navigation">
                { activeSection > 0 &&
                <div className="submit-div">
                    <button onClick={(e)=>{e.preventDefault();setActiveSection((prevState:number)=>prevState-1)}} className="submit-btn">Previous</button>
                </div>
                }
                {/* show submit button or next button depending on section */}
                {activeSection == 3 ? <div className="submit-div">
                        <button onClick={(e) => { e.preventDefault(); onFinished()}} className="submit-btn">Submit</button>
                    </div> : <div className="submit-div">
                        <button onClick={(e) => { e.preventDefault(); setActiveSection((prevState: number) => prevState + 1) }} className="submit-btn">Next</button>
                    </div>
                }
                {/* <div className="submit-div">
                    <button onClick={(e)=>{e.preventDefault(); if (activeSection===3) onFinished(); setActiveSection((prevState:number)=>prevState+1)}} className="submit-btn">Next</button>
                </div> */}
                </div>
            </form>
            
        </div>
    )
}

export default Form