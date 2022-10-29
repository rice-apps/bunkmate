import { useEffect } from "react";
import InputField from "./InputField";

interface input {
    id: number;
    label: string;
    type: string;
    options: string[];
    placeholder: string;
  }

interface FormProps {
    welcome: string;
    header: string;
    inputs: input[];
  }



const Form = ({welcome, header, inputs}: FormProps) => {

    useEffect(()=>{
        console.log(inputs)
    },[])
    return (
        <div className="onboarding-form">
            <h1>
                {welcome}
            </h1>
            <form>
                <h2>{header}</h2>
                {inputs.map(input=><InputField key={input["id"]} id={input.id} placeholder={input.placeholder} options={input.options} label={input["label"]} type={input.type}/>)}
            </form>
        </div>
    )
}

export default Form