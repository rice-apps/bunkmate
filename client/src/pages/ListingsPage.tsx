import React, { useState, useEffect } from 'react';

// Components
import ListingCard from '../components/listingspage/ListingCard';

// Mock database
import listings from '../mock-database';

// Google Auth
import UserDataAuth from "../types/UserDataAuth"
import { googleLogout } from '@react-oauth/google';

//react router
import { Navigate } from "react-router-dom";

// CSS
import '../styles/ListingsPage.css';

import { gql, useQuery, useLazyQuery } from "@apollo/client";

// const GET_USERS = gql`
//   query getUsers {
//     getUsers {
//         email
//     }
//   }
// `

const ListingsPage = (props: {userData: UserDataAuth, logout: any}) => { 
    //add this button to your logout button's onclick!
    const handleLogout = () => {
        googleLogout()
        props.logout()
    }

    return (
        //props.userData.email
        <div className="ListingsPage"> 
            <div className="page-header">
                <h1 className="page-title">Listings!</h1>
            </div>
            {/* <button onClick={getUsers()}> Do Func A</button> */}
            <div className="listing-card-feed">
                {/* TODO: update UserData type to include all fields */}
                {/* {allUsers.map(user => { return (<UserCard name={user.name} pref_temp={user.roomTemp} bedtime={user.bedTime} pref_gender={user.genderPref} grad_year={user.grad_year} pronouns={user.pronouns} res_college={user.res_college} cleaning_freq={user.cleaning_freq} />) })} */}
                { listings.map((listing : any) => {return (<ListingCard id={listing.id}
                                                                title={listing.title}
                                                                address={listing.address}
                                                                total_rent={listing.total_rent}
                                                                rent_per_person={listing.rent_per_person}
                                                                capacity={listing.capacity}
                                                                bedrooms={listing.bedrooms}
                                                                bathrooms={listing.bathrooms}
                                                                has_kitchen={listing.has_kitchen}
                                                                has_washer_dryer={listing.has_washer_dryer}
                                                                has_pets={listing.has_pets}
                                                                miles_from_campus={listing.miles_from_campus}
                                                                />)})}
            </div>
        </div> 
            //: <Navigate to="/" replace />
    )}

export default ListingsPage;