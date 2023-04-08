import { createContext, useState } from "react"

export const UserContext = createContext()

const UserContextProvider = (props) => {

    const [user, setUser] = useState({"pfp":"placeholder"})

    const onboardingChange = (e, attribute, value) => {
        e.preventDefault()

        setUser(prevState=>{
            var inner = e.target.innerHTML
            if (attribute==="on_campus"){
                if (e.target.innerHTML === "Off Campus")
                {
                    inner = false
                }
                else {
                    inner = true
                }
            }
            if (attribute==="has_overnight_guest"){
                if (e.target.innerHTML === "No")
                {
                    inner = false
                }
                else {
                    inner = true
                }
            }
            if (attribute==="is_morning_person"){
                if (e.target.innerHTML === "Night person")
                {
                    inner = false
                }
                else {
                    inner = true
                }
            }
            if (value){
                inner = value
            }
            return {
            ...prevState,
            /* [e.target.id.split(" ").join("")[0].toLowerCase() + e.target.id.split(" ").join("").slice(1)] */
            [attribute]: e.target.value?e.target.value:inner
        }})
    }

    return (
        <UserContext.Provider value={{user, setUser, onboardingChange}}>
            {props.children}
        </UserContext.Provider>
 )

}

export default UserContextProvider