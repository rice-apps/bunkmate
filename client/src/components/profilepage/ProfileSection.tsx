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
        "phone",
        "major",
        "gender",
        
    ],
    "Preferences": [
        "bed_time_pref",
        "wake_time_pref",
        "cleaning_freq", 
        "room_temp_pref", 
        "has_overnight_guest",
        "relationship_pref",
        "roommate_smoking_pref",
        "drinking_pref",
        "roommate_gender_pref",
        "is_snorer",
        "smoking_pref",
        "is_morning_person",
        "outing_freq"
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



    


const ProfileSection = (props: {section_name: string, user: UserData, currUser: UserDataAuth, editable: boolean}) => {
    const [ownAcc, setOwnAcc] = useState(true) 
    const [edit, setEdit] = useState(true) 

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
            setOwnAcc(true);
            //this.style.backgroundColor = "red";
            
    
        }
        const toggleLoggedOut = ()=> {
            setOwnAcc(false);
        }
         const toggleEdit = ()=> {
            setOwnAcc(true);
            //this.style.backgroundColor = "red";
            
    
        }
        const toggleNotEdit = ()=> {
            setOwnAcc(false);
        }

    return (
        <div className="profile-section" id={`${props.section_name}`}>
            {/* <div className= "edit"> 
                <h1> {props.section_name} </h1>
                <div className={loggedIn?"attr-icon":""}> 
                <FontAwesomeIcon className="attr-icon" icon={faPencilSquare}/>
                </div>
                
                {/* <FontAwesomeIcon className="attr-icon" icon={faPencilSquare}/> 
            </div> */}
            <div className="profile-section-header">
                <h1>{props.section_name}
                <div className={ownAcc?"":""}> 
                        {/* <button className={ownAcc?"attr-icon":""}> to edit</button> */}
                        <FontAwesomeIcon className={ownAcc?"attr-icon":""} icon={faPencilSquare}  onClick= {toggleEdit}/>
                        <FontAwesomeIcon className={!ownAcc?"attr-icon":""} icon={faPencilSquare}  onClick= {toggleNotEdit}/>
                </div>
                </div>
                </h1>
            </div>
            <div className="profile-section-body">
                {(SectionToAttributes as any)[props.section_name].map((field : any) => {
                    console.log(field)
                    return <ProfileSectionRow field={field} user={props.user} />
                })}
            </div>
        </div>
    )
}

export default ProfileSection;

