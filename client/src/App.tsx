import React, {useState} from 'react';
// import UserData from "./types/UserData"
import UserDataAuth from "./types/UserDataAuth"
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import Onboarding from './pages/Onboarding';
import jwtDecode from 'jwt-decode';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gql, useMutation } from "@apollo/client";

interface MyToken {
  name: string;
  email: string;
  exp: number;
  // whatever else is in the JWT.
}

// interface UserData {
//   email: string,
//   name: string,
//   newUser: boolean
// }

const UPSERT_AUTH_USER = gql`
  mutation authGoogle($email: String!) {
    authGoogle(email: $email){
      email
      name
      newUser
    }
  }
`

function App() {
      const [loggedIn, setLoggedIn] = useState(false)
      const [userInfo, setUserInfo] = useState<UserDataAuth>({
        email: "",
        name: "",
        newUser: false
      })

      //can add reset function
      const [authGoogle, { data, loading, error }] = useMutation(UPSERT_AUTH_USER);

      const login = (response: any) => {
        //call mutation
        console.log(response) //response.credential is the encoded JWT token
        const userObj = jwtDecode<MyToken>(response.credential)
        const email = userObj.email
        try {
          authGoogle({ variables: { email }, onCompleted: validateUser })
        } catch(e) {
          console.log(e)
        }
      }
      const logout = () => {
        setLoggedIn(false)
      }
      const validateUser = (userInfo: any) => {
        console.log('mutation success!')
        console.log(userInfo)
        setLoggedIn(true)
        setUserInfo(userInfo.authGoogle)
      }

    return (
      // <Router>
      //   {/* <div className="App"> */}
      //   <Routes>
      //     <Route path={`/home`} element={<HomePage />} />
      //     <Route path={`/`} element={<LoginPage />} />
      //   </Routes>
      //   {/* </div> */}
      // </Router>
      <div>
{/*         {loggedIn ? <HomePage userData={userInfo} logout={logout}/> : <LoginPage login={login}/>}
 */}
      <Onboarding/> 
      </div>
    );
}

export default App;
