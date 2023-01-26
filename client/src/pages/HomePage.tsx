import React, { useState } from 'react';

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

const HomePage = (props: {userData: UserDataAuth, logout: any}) => {
    
    //add this button to your logout button's onclick!
    const handleLogout = () => {
        googleLogout()
        props.logout()
    }

    return (
        //props.userData.email
         true ? <div className="homepage"> 
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