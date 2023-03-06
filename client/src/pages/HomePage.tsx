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

const GET_USERS = gql`
  query getUsers {
    getUsers {
        id
        name
        email
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

    const [getUsers, { data, loading, error }] = useLazyQuery(GET_USERS, {onCompleted: tempData => {
        console.log(tempData)
        if (tempData) {
            console.log("fetched other users")
            console.log(tempData)
            setAllUsers(tempData.getUsers.filter((user:any) => !user.newUser))
        }
    }})
    
    
    useEffect(() => {
        // getUsers({variables: {}, onCompleted: recommendationAlgorithm})
        console.log("fetching")
        getUsers()
        // const { data, loading, error } = useQuery(GET_USERS)
        // if (loading) return null;
        
    }, [])

    const funcA = () => {
        //do something
    }

    const recommendationAlgorithm = () => {
        // console.log(data)
    }
    
    //add this button to your logout button's onclick!
    const handleLogout = () => {
        googleLogout()
        props.logout()
    }

    return (
        //props.userData.email
        <div className="homepage"> 
            <svg className="heading-background">
                <ellipse cx="50%" cy="0px" rx="75%" ry="100%"></ellipse>
            </svg>
            <div className="page-header">
                <h1 className="page-title">fellow bunkmates!</h1>
            </div>
            {/* <button onClick={getUsers()}> Do Func A</button> */}
            <div className="user-card-feed">
                {/* TODO: update UserData type to include all fields */}
                {/* {allUsers.map(user => { return (<UserCard name={user.name} pref_temp={user.roomTemp} bedtime={user.bedTime} pref_gender={user.genderPref} grad_year={user.grad_year} pronouns={user.pronouns} res_college={user.res_college} cleaning_freq={user.cleaning_freq} />) })} */}
                { allUsers.map(user => {return (<UserCard name={user.name} 
                                                    pref_temp={user.room_temp_pref} 
                                                    bedtime={user.bed_time_pref} 
                                                    pref_gender={user.roommate_gender_pref} 
                                                    grad_year={user.grad_year} 
                                                    pronouns={user.pronouns} 
                                                    res_college={user.res_college} 
                                                    cleaning_freq={user.cleaning_freq}
                                                    net_id={user.email.split("@")[0]}/>)})}
            </div>
        </div> 
            //: <Navigate to="/" replace />
    )}

export default HomePage;