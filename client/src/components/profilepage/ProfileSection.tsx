import React, { useState, useEffect } from 'react';
import UserDataAuth from "../../types/UserDataAuth";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare} from '@fortawesome/free-solid-svg-icons';

// CSS
import '../../styles/ProfileSection.css';

// Pfps
import benPfp from '../../media/ben-liu-pfp-400x400.png';
import defaultPfp from '../../media/empty-pfp-400x400.png';

// Google Auth
import UserData from "../../types/UserData";

import ProfileSectionRow from "./ProfileSectionRow";

let SectionToAttributes = {
    "Header": [
        "name", 
        "pronouns",
    ],
    "Personal": [
        "res_college", 
        "grad_year", 
        "email", 
        "major",
        "gender",
        "is_snorer",
        "smoking_pref",
        "is_morning_person",
        "outing_freq"
    ],
    "Preferences": [
        "bed_time_pref", 
        "cleaning_freq", 
        "room_temp_pref", 
        "has_overnight_guest",
        "relationship_pref",
        "roommate_smoking_pref",
        "drinking_pref",
        "roommate_gender_pref",
        "wake_time_pref"
    ],
    "Housing": [
        "housing_pref", 
        "roommate_count"
    ],
    "Additional Comments": [
        "additional_prefs",
        "additional_habit_info"
    ],
    // "Questions": [
    //     "accommodations",
    //     "room_usage"
    // ]
}



    


const ProfileSection = (props: {section_name: string, user: UserData, currUser: UserDataAuth}) => {
    const [loggedIn, setLoggedIn] = useState(true) 

    useEffect( () => {

       
        
        if (props.user.email == props.currUser.email){
            console.log("this is me")
            console.log(props.user.email)
            console.log(props.currUser.email)
            console.log("--end--")
            toggleLoggedIn()
        }
        else{
            console.log("this is NOT me")
            console.log(props.user.email)
            console.log("--middle-")
            console.log(props.currUser)
            console.log(props.currUser.email)
            console.log("--end--")
            toggleLoggedOut()
        }

        }, []
        )

        const toggleLoggedIn = ()=> {
            setLoggedIn(true);
            //this.style.backgroundColor = "red";
            
    
        }
        const toggleLoggedOut = ()=> {
            setLoggedIn(false);
        }

    return (
        <React.Fragment>
            <div className="profile-section" id={`${props.section_name}`}>
            <div className= "edit"> 
                <h1> {props.section_name} </h1>
                <div className={loggedIn?"attr-icon":""}> 
                <FontAwesomeIcon className="attr-icon" icon={faPencilSquare}/>
                </div>
                
                {/* <FontAwesomeIcon className="attr-icon" icon={faPencilSquare}/> */}
            </div>
                <div style={{display: "flex", flexFlow: "column nowrap"}}>
                    {(SectionToAttributes as any)[props.section_name].map((field : any) => {
                       
                        return <ProfileSectionRow field={field} user={props.user} />
                    })}
                </div>
            </div>
        </React.Fragment>
        // <React.Fragment>
        //     <div className="profile-section" id={`${props.section_name}`}>
        //         <div className= "edit"> 
        //         <h1> {props.section_name}  <FontAwesomeIcon className="attr-icon" icon={faPencilSquare}/> </h1>
        //         </div>
        //         <div style={{display: "flex", flexFlow: "column nowrap"}}>
        //             {(SectionToAttributes as any)[props.section_name].map((field : any) => {
        //                 console.log(field)
        //                 return <ProfileSectionRow field={field} user={props.user} />
        //             })}
        //         </div>
        //     </div>
        // </React.Fragment>
    )
}

export default ProfileSection;