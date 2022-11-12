import React, { useState } from 'react';

// Components
import ProfileUserCard from '../components/profilepage/ProfileUserCard';

// Mock database
import users from '../mock-database';

// Google Auth
import UserDataAuth from "../types/UserDataAuth"
import { googleLogout } from '@react-oauth/google';

// CSS
import '../styles/ProfilePage.css';

const ProfilePage = (props: {userData: UserDataAuth, logout: any, }) => {
    
    //add this button to your logout button's onclick!
    const handleLogout = () => {
        googleLogout()
        props.logout()
    }

    return (
        <div className="profilepage">
            <div className="profile-content">
                <div className="profile-user-card">
                    <ProfileUserCard id={users[0].id} name={users[0].name} pref_temp={users[0].pref_temp} bedtime={users[0].bedtime} pref_gender={users[0].pref_gender}
                    grad_year={users[0].grad_year} pronouns={users[0].pronouns} res_college={users[0].res_college} cleaning_freq={users[0].cleaning_freq} 
                    major={users[0].major} minor={users[0].minor} drinking={users[0].drinking} smoking={users[0].smoking} dynamic={users[0].dynamic} overnight_guests={users[0].overnight_guests}/>
                </div>
            </div>
        </div>
        )}

export default ProfilePage;