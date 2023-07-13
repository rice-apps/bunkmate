import React from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faGraduationCap, faEnvelope, faPhone, faBookOpen, faVenusMars, faV, } from '@fortawesome/free-solid-svg-icons';

// CSS
import '../../styles/ProfileSectionRow.css';

// Pfps
import benPfp from '../../media/ben-liu-pfp-400x400.png';
import defaultPfp from '../../media/empty-pfp-400x400.png';

// Google Auth
import UserData from "../../types/UserData";
import { useState } from 'react';
import { useEffect } from 'react';

const ProfileSectionRow = (props: {field: string, user: UserData}) => {

    const [KeyToIcon, setKeyToIcon] = useState({
        "id": null,
        "name": null,
        "email": faEnvelope,
        "phone": faPhone,
        "grad_year": faGraduationCap,
        "res_college": faLocationDot,
        "major": faBookOpen,
        "minor": null,
        "pronouns": null,
        "gender": faVenusMars,
        "on_campus": null,
        "housing_pref": null,
        "roommate_count": null,
        "is_morning_person": null,
        "room_temp_pref": null,
        "bed_time_pref": null,
        "wake_time_pref": null,
        "outing_freq": null,
        "relationship_pref": null,  
        "drinking_habits": null,
        "smoking_habits": null,
        "roommate_smoking_pref": null,
        "roommate_gender_pref": null,
        "has_overnight_guest": null,
        "cleaning_freq": null,
        "is_snorer": null,
        "accommodations": null,
        "room_usage": null,
    })

   const [KeyToDisplay, setKeyToDisplay] = useState({
        "id": "ID",
        "name": "Name",
        "email": "Email",
        "phone": "Phone",
        "grad_year": "Year",
        "res_college": "College",
        "major": "Major",
        "minor": "Minor",
        "pronouns": "Pronouns",
        "gender": "Gender",
        "on_campus": "On campus",
        "housing_pref": "Desired housing",
        "roommate_count": "Have found",
        "is_morning_person": "Is a morning person?",
        "room_temp_pref": "Room temp",
        "bed_time_pref": "Bedtime",
        "wake_time_pref": "Wake-time",
        "outing_freq": "Likes to go out",
        "relationship_pref": "Desired roommate dynamic",  
        "drinking_habits": "Drinks?",
        "smoking_habits": "Smokes?",
        "roommate_smoking_pref": "Roommate smoking preference?",
        "roommate_gender_pref": "Roommate gender preference",
        "has_overnight_guest": "Has overnight guest",
        "cleaning_freq": "Cleaning frequency",
        "is_snorer": "Snores?",
        "accommodations": "Any accommodations?",
        "room_usage": "How much time do you expect to spend in your room?",
    })

    return (
        <div className="profile-section-row-content">
            
            <div className="profile-section-row-key">
                {(KeyToIcon as any)[props.field] != null ? <div className="profile-section-row-icon">
                    <FontAwesomeIcon icon={(KeyToIcon as any)[props.field]}/>
                </div> : <div></div>}
                <p>{(KeyToDisplay as any)[props.field]}</p>
            </div> 
            <div className="profile-section-row-value">
                <p>{(props.user as any)[props.field]}</p>
                {props.field == "room_temp_pref" ? <p>℉</p> : <div></div>}
                {typeof (props.user as any)[props.field] == "boolean" && (props.user as any)[props.field] ? <p>Yes</p> : <div></div>}
                {typeof (props.user as any)[props.field] == "boolean" && !(props.user as any)[props.field] ? <p>No</p> : <div></div>}
            </div>
        </div>
    )
}

export default ProfileSectionRow;