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

import { gql, useMutation } from "@apollo/client";

const GET_USERS = gql`
  query getUsers() {
    updateUsers {
        id
        name
        email
        resCollege
        phonenumber
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
    }
  }
`

const HomePage = (props: {userData: UserDataAuth, logout: any}) => {
    const [getUsers, {data, loading, error}] = useMutation(GET_USERS)
    
    useEffect(() => {
        getUsers({variables: {}, onCompleted: recommendationAlgorithm})
    })

    const recommendationAlgorithm = () => {
        console.log(data)
    }
    
    //add this button to your logout button's onclick!
    const handleLogout = () => {
        googleLogout()
        props.logout()
    }

    return (
        props.userData.email ? <div className="homepage">
            <svg className="heading-background">
                <ellipse cx="50%" cy="0px" rx="75%" ry="100%"></ellipse>
            </svg>
            <div className="page-header">
                <h1 className="page-title">fellow bunkmates!</h1>
            </div>
            <div className="user-card-feed">
                {users.map(user => {return (<UserCard  name={user.name} pref_temp={user.pref_temp} bedtime={user.bedtime} pref_gender={user.genderPref} grad_year={user.grad_year} pronouns={user.pronouns} res_college={user.res_college} cleaning_freq={user.cleaning_freq}/>)})}
            </div>
        </div> 
            : <Navigate to="/" replace />
    )}

export default HomePage;