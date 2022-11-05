import React, { useState } from 'react';
import UserCard from '../components/homepage/UserCard';
import users from '../mock-database';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <svg className="heading-background">
                <ellipse cx="50%" cy="0px" rx="75%" ry="100%"></ellipse>
            </svg>
            <div className="page-header">
                <h1 className="page-title"></h1>
            </div>
            <div className="user-card-feed">
                {users.map(user => {return (<UserCard id={user.id} name={user.name} pref_temp={user.pref_temp} bedtime={user.bedtime} pref_gender={user.pref_gender} grad_year={user.grad_year} pronouns={user.pronouns} res_college={user.res_college} cleaning_freq={user.cleaning_freq}/>)})}
            </div>
        </div>

    )
}

export default HomePage;