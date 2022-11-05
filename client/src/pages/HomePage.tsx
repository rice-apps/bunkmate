import React, { useState } from 'react';

import UserCard from '../components/homepage/UserCard';
import users from '../mock-database';
import UserDataAuth from "../types/UserDataAuth"
import { googleLogout } from '@react-oauth/google';



const HomePage = (props: {userData: UserDataAuth, logout: any}) => {
    console.log('on home page')
    console.log(props.userData)

    const handleLogout = () => {
        googleLogout()
        props.logout()
    }
    return (
        <div>
            Home page!!
            Logged in
            <h3>{props.userData.name}</h3>
            <h3>{props.userData.email}</h3>
            <button onClick={handleLogout}>logout</button>
            
            {/* <h3>{props.userData.name}</h3> */}
            
            {/* {userData.map(item => {return {item}})} */}
            {/* {users.map(user => {return (<UserCard id={user.id} name={user.name} pref_temp={user.pref_temp} bedtime={user.bedtime} gender_pref={user.gender_pref}/>)})} */}
        </div>
    )
}

export default HomePage;