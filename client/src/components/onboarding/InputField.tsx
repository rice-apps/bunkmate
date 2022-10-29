interface InputProps {
    id: number;
    label: string;
    type: string;
    options: string[];
    placeholder: string;
  }

const InputField = ({label, type, options, placeholder}: InputProps) => {

    return (
        <div className="input-field">
            
            <label htmlFor=""> {label}</label>
            { type==="text" &&
                <input type="text" placeholder={placeholder}/>
            }
            <div className="options">
            {options.map(option=><button className="option-btn">{option}</button>)}
            </div>
        </div>
    )
}

export default InputField