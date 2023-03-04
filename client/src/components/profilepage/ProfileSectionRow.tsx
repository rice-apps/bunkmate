import React from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';

// CSS
import '../../styles/ProfileSectionRow.css';

// Pfps
import benPfp from '../../media/ben-liu-pfp-400x400.png';
import defaultPfp from '../../media/empty-pfp-400x400.png';

// Google Auth
import UserData from "../../types/UserData";

let KeyToDisplay = {
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
    "on_campus": "On Campus",
    "housing_pref": "Desired housing",
    "roommate_count": "Have found",
    "is_morning_person": "Internal Clock",
    "room_temp_pref": "Room Temp",
    "bed_time_pref": "Bedtime",
    "wake_time_pref": "Wake Time",
    "outing_freq": "Likes to go out",
    "relationship_pref": "Desired roommate dynamic",  
    "drinking_pref": "Drinking",
    "smoking_pref": "Smoking",
    "roommate_smoking_pref": "Prefers roommate(s) that",
    "roommate_gender_pref": "Roommate gender preference",
    "has_overnight_guest": "Has overnight guest",
    "cleaning_freq": "Cleaning frequency",
    "is_snorer": "Snores?",
    "accommodations": "Any accommodations?",
    "room_usage": "How much time do you expect to spend in your room?"
}

const ProfileSectionRow = (props: {field: string, user: UserData}) => {
    return (
        <React.Fragment>
            <div className="profile-section-row-content" style={{display: "flex", padding: "10px 0"}}>
                <div className="profile-section-row-key" style={{width: "50%"}}>
                    <p>{(KeyToDisplay as any)[props.field]}</p>
                </div> 
                <div className="profile-section-row-value" style={{width: "50%", textAlign: "right"}}>
                    <p>{(props.user as any)[props.field]}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfileSectionRow;