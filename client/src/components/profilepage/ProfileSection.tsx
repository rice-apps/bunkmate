import React from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';

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
        "drinking_habits",
        "roommate_gender_pref",
        "is_snorer",
        "smoking_habits",
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

const ProfileSection = (props: {section_name: string, user: UserData}) => {
    return (
        <div className="profile-section" id={`${props.section_name}`}>
            <div className="profile-section-header">
                <h1>{props.section_name}</h1>
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