import React, { useState, useEffect } from 'react';

// Components
import ProfileUserCard from '../components/profilepage/ProfileUserCard';
import ProfileRoomCard from '../components/profilepage/ProfileRoomCard';
import ProfilePrefsCard from '../components/profilepage/ProfilePrefsCard';
import ProfileContactCard from '../components/profilepage/ProfileContactCard';
import ProfileSection from '../components/profilepage/ProfileSection';

// Mock database
import users from '../mock-database';

// Pfps
import benPfp from '../media/ben-liu-pfp-400x400.png';
import defaultPfp from '../media/empty-pfp-400x400.png';

// Google Auth
import UserDataAuth from "../types/UserDataAuth"
import { googleLogout } from '@react-oauth/google';

// CSS
import '../styles/ProfilePage.css';
import { Link, Navigate } from 'react-router-dom';

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

let pfps = new Map();

pfps.set("Ben Liu", benPfp);
pfps.set("Gabriel Ong", defaultPfp);
pfps.set("defaultName", defaultPfp);
pfps.set("ANthony Yan", defaultPfp);

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
                <Link to="/home" className="profile-go-back">
                    <div className="profile-back-button">
                        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.5 46.75C37.236 46.75 46.75 37.236 46.75 25.5C46.75 13.7639 37.236 4.25 25.5 4.25C13.7639 4.25 4.25 13.7639 4.25 25.5C4.25 37.236 13.7639 46.75 25.5 46.75Z" fill="white"/>
                            <path d="M25.5 17L17 25.5L25.5 34" stroke="#25335D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M34 25.5H17" stroke="#25335D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>Back to Home</p>
                    </div>
                </Link>
                <div className="profile-resume-content">
                    {allUsers.filter(user => user.email == user_email).map(user => 
                        <React.Fragment>
                            <div className="profile-header">
                                <img className="profile-user-pfp" src={pfps.get(user.name)} alt={user.name}/>
                                <div className="profile-user-name">
                                    <div className="profile-user-title">
                                        <h1>{user.name}</h1>
                                        <p className="profile-user-pronouns">{user.pronouns}</p>
                                    </div>
                                    <div className="profile-user-desc">
                                        <p>I love spikeball and playing the clarinet! Kanye is bae but I've recently been getting into Ice Spice! I like to go thrifting. I am pretty chill and don't mind sharing with my roommate. Let me know if you would like to room! Excited to get to know you!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-body">
                                <div className="profile-body-col" id="profile-body-col-left">
                                    <ProfileSection section_name="Personal" user={user} />
                                    <ProfileSection section_name="Preferences" user={user} />
                                </div>
                                <div className="profile-body-col" id="profile-body-col-right">
                                    <ProfileSection section_name="Housing" user={user} />
                                </div>
                            </div>
                            <div className="profile-footer">
                                <ProfileSection section_name="Additional Comments" user={user} />
                            </div>
                        </React.Fragment>)
                    }
                </div>
            </div>
        </div>
        )}

export default ProfilePage;
