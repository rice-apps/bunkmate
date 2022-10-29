import React, { useState } from 'react';
import UserCard from '../components/homepage/UserCard';
import users from '../mock-database';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="feed">
            {users.map(user => {return (<UserCard id={user.id} name={user.name} pref_temp={user.pref_temp} bedtime={user.bedtime} pref_gender={user.pref_gender}/>)})}
        </div>
    )
}

export default HomePage;