import { createContext, useState } from "react"

export const UserContext = createContext()

const UserContextProvider = (props) => {

    const [user, setUser] = useState({"name":"Adrian"})

    const onboardingChange = (e, attribute) => {
        e.preventDefault()
        setUser(prevState=>({
            ...prevState,
            /* [e.target.id.split(" ").join("")[0].toLowerCase() + e.target.id.split(" ").join("").slice(1)] */
            [attribute]: e.target.value?e.target.value:e.target.innerHTML
        }))
    }

    return (
        <UserContext.Provider value={{user, setUser, onboardingChange}}>
            {props.children}
        </UserContext.Provider>
 )

}

export default UserContextProvider