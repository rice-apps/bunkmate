import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

const LoginPage = (props: any) => {

  return (
    <div>
        <h1>Login Page</h1>
        <GoogleLogin
          onSuccess={props.login}
          onError={() => {
            console.log('Login Failed');
          }}
        />
    </div>
  )
}

export default LoginPage