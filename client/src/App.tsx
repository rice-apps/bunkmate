import React, {useState, useEffect, useContext} from 'react';
// import UserData from "./types/UserData"
import UserDataAuth from "./types/UserDataAuth"
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from "./pages/LoginPage";
import Onboarding from './pages/Onboarding';
import jwtDecode from 'jwt-decode';

import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { gql, useMutation } from "@apollo/client";
import { UserContext } from './components/context/UserContext';

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
      token
      newUser
    }
  }
`

function App() {

  const {user, setUser} = useContext(UserContext)

      useEffect(()=>{
        console.log(user)
      },[])
      let { userId } = useParams();

      const [loggedIn, setLoggedIn] = useState(false)
      const [userInfo, setUserInfo] = useState<UserDataAuth>({
        email: "",
        name: "",
        newUser: false
      })

      const navigate = useNavigate();

      //can add reset function
      const [authGoogle, { data, loading, error }] = useMutation(UPSERT_AUTH_USER);

      const login = (response: any) => {
        //call mutation
        console.log("running login")
        console.log(response) //response.credential is the encoded JWT token
        // console.log(response.access_token)
        const userObj = jwtDecode<MyToken>(response.credential)
        // const userObj = jwtDecode<MyToken>(response.access_token)
        const email = userObj.email
        // const email = ""
        // console.log(userObj)
        // const email = response.cre
        console.log(email)
        try {
          console.log("running mutation")
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
        
        
        if (userInfo.authGoogle.newUser) {
          console.log("onboarding")
          //render onboarding + update with email and newUser=False
          navigate("/onboarding")

        } else {
          //render homepage
          setUserInfo(userInfo.authGoogle)
          console.log("homepage")
          navigate("/home")
        }

      }

    return (
      // <Router>
        <div>
        <Routes>
          {/* <Route path={`/profile/:id`} element={<ProfilePage userData={userInfo} logout={logout} />}/> */}
          <Route path={`/home`} element={<HomePage userData={userInfo} logout={logout}/>} />
          <Route path={`/onboarding`} element={<Onboarding />} />
          <Route path={`/profile`} element={<ProfilePage userData={userInfo} logout={logout} />} />
          <Route path={`/`} element={<LoginPage login={login}/>} />
        </Routes>
        </div>
    );
}

export default App;
