import React, { useState, useEffect } from 'react';

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
        drinking_pref
        smoking_pref
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

const ProfilePage = (props: {userData: UserDataAuth, logout: any, }) => {
    // const [user, setUser] = useState<UserData[]>([])
    const [allUsers, setAllUsers] = useState<UserData[]>([])

    let { net_id } = useParams()
    let user_email = net_id + "@rice.edu"

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
        getUsers()
        // const { data, loading, error } = useQuery(GET_USERS)
        // if (loading) return null;
        console.log(allUsers)
        
    }, [])

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
                {/* <h1>{user_email}</h1> */}
                {/* <ProfileUserCard name={users[0].name} pref_temp={users[0].pref_temp} bedtime={users[0].bedtime} pref_gender={users[0].genderPref}
                    grad_year={users[0].grad_year} pronouns={users[0].pronouns} res_college={users[0].res_college} cleaning_freq={users[0].cleaning_freq} 
                major={users[0].major} minor={users[0].minor} smoking={users[0].smoking} dynamic={users[0].dynamic} overnight_guests={users[0].overnight_guests} drinking={users[0].drinking}/>
                <ProfileRoomCard room={users[0].room} num_search={users[0].num_search}/>
                <ProfilePrefsCard bedtime={users[0].bedtime} smoking={users[0].smoking} dynamic={users[0].dynamic} overnight_guests={users[0].overnight_guests} pref_temp={users[0].pref_temp}
                cleaning_freq={users[0].cleaning_freq} internal_clock={users[0].bedtime} snoring={users[0].snore} drinking={users[0].drinking}/>
                <ProfileContactCard phone={users[0].phoneNumber} email={ users[0].email }/> */}
                {allUsers.filter(user => user.email == user_email).map(user => 
                    <React.Fragment>
                        <ProfileUserCard name={user.name} 
                                    pref_temp={user.room_temp_pref}
                                    bedtime={user.bed_time_pref}
                                    pref_gender={user.roommate_gender_pref}
                                    grad_year={user.grad_year}
                                    pronouns={user.pronouns}
                                    res_college={user.res_college}
                                    cleaning_freq={user.cleaning_freq}
                                    major={user.major}
                                    minor={user.minor}
                                    smoking={user.smoking_pref}
                                    dynamic={user.relationship_pref}
                                    overnight_guests={user.has_overnight_guest}
                                    drinking={user.drinking_pref}/>
                        <ProfileRoomCard room={user.housing_pref}
                                    num_search={user.roommate_count}/>
                        <ProfilePrefsCard bedtime={user.bed_time_pref}
                                    smoking={user.smoking_pref}
                                    dynamic={user.relationship_pref}
                                    overnight_guests={user.has_overnight_guest}
                                    pref_temp={user.room_temp_pref}
                                    cleaning_freq={user.cleaning_freq}
                                    internal_clock={user.bed_time_pref}
                                    snoring={user.is_snorer}
                                    drinking={user.drinking_pref}/>
                        <ProfileContactCard phone={user.phone}
                                        email={ user.email }/>
                    </React.Fragment>)
                }
            </div>
        </div>
        )}

export default ProfilePage;
