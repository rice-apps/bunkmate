import React, { useState } from 'react';

// Components
import ProfileUserCard from '../components/profilepage/ProfileUserCard';
import ProfileRoomCard from '../components/profilepage/ProfileRoomCard';
import ProfilePrefsCard from '../components/profilepage/ProfilePrefsCard';
import ProfileContactCard from '../components/profilepage/ProfileContactCard';

// Mock database
import users from '../mock-database';

// Google Auth
import UserDataAuth from "../types/UserDataAuth"
import { googleLogout } from '@react-oauth/google';

// CSS
import '../styles/ProfilePage.css';
import { Navigate } from 'react-router-dom';

import { gql, useQuery, useLazyQuery } from "@apollo/client";
import UserData from '../types/UserData';
import { useRouteLoaderData, useParams } from "react-router-dom";
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

const ProfilePage = (props: {userData: UserDataAuth, logout: any, }) => {

    const [user, setUser] = useState<UserData[]>([])
    

    const [getUsers, { data, loading, error }] = useLazyQuery(GET_USERS, {onCompleted: tempData => {
        console.log(tempData)
        if (tempData) {
            console.log("fetched other users")
            console.log(tempData)
            let { id } = useParams()
            console.log(id)
            setUser(tempData.getUsers.filter((user:any) => id))
        }
    }})
    
    //add this button to your logout button's onclick!
    const handleLogout = () => {
        googleLogout()
        props.logout()
    }

    const GoBackButton = () => {
        // <button onClick={() => navigate()}>Go Back</button>
    }




    return (
        <div className="profile-page">
            {/* <ProfileGoBack /> */}
            <div className="profile-content">
                <ProfileUserCard name={user[0].name} pref_temp={user[0].roomTemp} bedtime={user[0].bedTime} pref_gender={users[0].genderPref}
                    grad_year={user[0].gradYear} pronouns={user[0].pronouns} res_college={user[0].resCollege} cleaning_freq={user[0].neatness} 
                major={user[0].major} minor={user[0].minor} smoking={user[0].smoker} dynamic={user[0].outgoingness} overnight_guests={user[0].overnightGuests}/>
                <ProfileRoomCard room={user[0].roomType} num_search={user[0].numRoommates}/>
                <ProfilePrefsCard bedtime={user[0].bedTime} smoking={user[0].smoker} dynamic={user[0].outgoingness} overnight_guests={user[0].overnightGuests} pref_temp={user[0].roomTemp}
                cleaning_freq={user[0].neatness} internal_clock={user[0].bedTime} />
                <ProfileContactCard phone={user[0].phoneNumber} email={ user[0].email }/>
            </div>
        </div>
        )}

export default ProfilePage;