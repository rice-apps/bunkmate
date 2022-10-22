import React, { useState } from 'react';

import UserCard from '../components/homepage/UserCard';
import users from '../mock-database';

const HomePage = () => {
    return (
        <div>
            {users.map(user => {return (<UserCard id={user.id} name={user.name} pref_temp={user.pref_temp} bedtime={user.bedtime} gender_pref={user.gender_pref}/>)})}
        </div>
    )
}

export default HomePage;