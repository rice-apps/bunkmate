import React, { useState, useEffect } from 'react';

// Components
import UserCard from '../components/homepage/UserCard';

// Mock database
// import users from '../mock-database';

// Google Auth
import UserDataAuth from "../types/UserDataAuth"
import { googleLogout } from '@react-oauth/google';

//react router
import { Navigate } from "react-router-dom";

// CSS
import '../styles/HomePage.css';

import { gql, useQuery, useLazyQuery } from "@apollo/client";
import UserData from '../types/UserData';
// import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// navbar dropdown
import {Navbar} from './Navbar';

const GET_USERS = gql`
  query getUsers {
    getUsers {
        id
        name
        email
        phone
        grad_year
        res_college
        major
        minor
        pronouns
        gender
        accommodations
        on_campus
        housing_pref
        roommate_count
        additional_room_info
        personality_traits
        is_morning_person
        room_temp_pref
        bed_time_pref
        wake_time_pref
        room_usage
        outing_freq
        relationship_pref
        drinking_habits
        smoking_habits
        roommate_smoking_pref
        roommate_gender_pref
        has_overnight_guest
        cleaning_freq
        additional_prefs
        is_snorer
        additional_habit_info
        pfp
        new_user
    }
  }
`

// const GET_USERS = gql`
//   query getUsers {
//     getUsers {
//         id
//         name
//         email
//         phone
//         grad_year
//         res_college
//         major
//         minor
//         pronouns
//         gender
//         accommodations
//         on_campus
//         housing_pref
//         roommate_count
//         additional_room_info
//         personality_traits
//         is_morning_person
//         room_temp_pref
//         bed_time_pref
//         wake_time_pref
//         room_usage
//         outing_freq
//         relationship_pref
//         drinking_pref
//         smoking_pref
//         roommate_smoking_pref
//         roommate_gender_pref
//         has_overnight_guest
//         cleaning_freq
//         additional_prefs
//         is_snorer
//         additional_habit_info
//         pfp
//         new_user
//     }
//   }
// `

const HomePage = (props: {userData: UserDataAuth, logout: any}) => {
    const [allUsers, setAllUsers] = useState<UserData[]>([])
    const [onCampus, setOnCampus] = useState(true)

    const toggleOnCampus = ()=> {
        setOnCampus(true);
    }
    const toggleOffCampus = ()=> {
        setOnCampus(false);
    }
    
    const [getUsers, { data, loading, error }] = useLazyQuery(GET_USERS, {onCompleted: tempData => {
        console.log(tempData)
        if (tempData) {
            console.log("fetched other users")
            console.log(tempData)
            setAllUsers(tempData.getUsers.filter((user:any) => !user.newUser))
        }
    }})
    
    
    useEffect(() => {
        getUsers()
        // const { data, loading, error } = useQuery(GET_USERS)
        // if (loading) return null;
    }, [])

    const recommendationAlgorithm = () => {
        // console.log(data)
    }
    
    // Add this button to your logout button's onclick!
    const handleLogout = () => {
        googleLogout()
        props.logout()
    }

    return (
        <div className="homepage"> 
            <div className="banner">
                <Navbar page="Homepage"/>
            </div>
            <div className="page-header">
                <h1>Fellow bunkmates we found for you</h1>
            </div>
            <div className="user-card-feed">
                { allUsers.filter(user=>user.on_campus == onCampus).map(user => {return (<UserCard net_id={user.email.split("@")[0]}
                                                          user={user}/>)})}
            </div>
        </div> 
    )}

export default HomePage;