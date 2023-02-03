import React, { useState, useEffect } from 'react';

// Components
import UserCard from '../components/homepage/UserCard';

// Mock database
import users from '../mock-database';

// Google Auth
import UserDataAuth from "../types/UserDataAuth"
import { googleLogout } from '@react-oauth/google';

//react router
import { Navigate } from "react-router-dom";

// CSS
import '../styles/HomePage.css';

import { gql, useQuery, useLazyQuery } from "@apollo/client";
import UserData from '../types/UserData';

// const GET_USERS = gql`
//   query getUsers {
//     getUsers {
//         email
//     }
//   }
// `

const GET_USERS = gql`
  query getUsers {
    getUsers {
        id
        name
        email
        resCollege
        phoneNumber
        gradYear
        major
        minor
        pronouns
        sex
        accommodation
        onCampus
        roomType
        numRoommates
        additionalRoomInfo
        genderPref
        overnightGuests
        roomTemp
        bedTime
        wakeTime
        neatness
        presence
        additionalPrefInfo
        personality
        isMorningPerson
        personalSpace
        outingFrequency
        coexistCondition
        outgoingness
        smoker
        smokerPref
        additionalHabitInfo
        pfp
        newUser
    }
  }
`

const HomePage = (props: {userData: UserDataAuth, logout: any}) => {
    const [allUsers, setAllUsers] = useState<UserData[]>([])
    

    const [getUsers, { data, loading, error }] = useLazyQuery(GET_USERS, {onCompleted: tempData => {
        console.log(tempData)
        if (tempData) {
            console.log("fetched other users")
            console.log(tempData)
            setAllUsers(tempData.getUsers)
        }
    }})
    
    
    useEffect(() => {
        // getUsers({variables: {}, onCompleted: recommendationAlgorithm})
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
                                                    pref_temp={user.roomTemp} 
                                                    bedtime={user.bedTime} 
                                                    pref_gender={user.genderPref} 
                                                    grad_year={user.gradYear} 
                                                    pronouns={user.pronouns} 
                                                    res_college={user.resCollege} 
                                                    cleaning_freq={user.neatness}/>)})}
            </div>
        </div> 
            //: <Navigate to="/" replace />
    )}

export default HomePage;