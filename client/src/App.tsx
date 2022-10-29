import React, {useState} from 'react';
import UserData from "./types/UserData"
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import Onboarding from './pages/Onboarding';


function App() {
      {/* <Onboarding/>
      <HomePage/> */}
      const [loggedIn, setLoggedIn] = useState(false)
      const [profile, setProfile] = useState<UserData | null>(null)

      const login = (userData:UserData) => {
        setLoggedIn(true)
        setProfile(userData)
      };

      const logout = () => {
        setLoggedIn(false)
        setProfile(null)
      };

    return (
      <>
      <Onboarding/>
        {/* <h1>Hello</h1>
        {loggedIn ? (
          // <HomePage />
          <Onboarding />
        ) : (
          <LoginPage login={login} />
        )} */}
      </>
    );
    

}

export default App;
