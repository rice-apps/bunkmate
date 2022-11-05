import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

const LoginPage = (props: any) => {
  const client_id = "10547820426-g94ke317qjsssctc8epuear86u5tf7vp.apps.googleusercontent.com"

  return (
    <div>
        {/* <GoogleLogin
          onSuccess={responseGoogle}
          // onError={responseError}
        // onFailure={responseGoogle}
        /> */}
        <h1>Login Page</h1>
        <GoogleLogin
          onSuccess={props.login}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        
        {/* <GoogleLogin
          clientId="XXXXXXXXXX"
          buttonText="Login"
          onSuccess={googleResponse}
          onFailure={googleResponse}
        /> */}

      
    </div>
  )
}

export default LoginPage