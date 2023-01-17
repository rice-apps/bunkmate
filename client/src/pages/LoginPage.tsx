import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import SignIn from '../components/onboarding/SignIn';

const LoginPage = (props: any) => {

  return (
    <div>
        <SignIn login={props.login}></SignIn>
        
        {/* <GoogleLogin
          onSuccess={props.login}
          onError={() => {
            console.log('Login Failed');
          }}
        /> */}
    </div>
    
  )
}

export default LoginPage