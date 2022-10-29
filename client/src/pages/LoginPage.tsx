import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { login } from "../api/GoogleAuth"

const LoginPage = (props: any) => {

  const client_id = "10547820426-g94ke317qjsssctc8epuear86u5tf7vp.apps.googleusercontent.com"

  const responseGoogle = useGoogleLogin({
    onSuccess: codeResponse => login(codeResponse),
    flow: 'auth-code',
  });

  // const responseGoogle = async (authResult: any) => {
  //   console.log(authResult)
  //   try {
  //     if (authResult['credential']) {
  //       const result = await login(authResult['credential']);
  //       console.log(authResult);
  //       props.login(result);
  //     } else {
  //       throw new Error(authResult);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const responseError = () => {
  //   console.log("Error Logging In")
  // }

    
  return (
    <div>
        <GoogleLogin
          onSuccess={responseGoogle}
          // onError={responseError}
        // onFailure={responseGoogle}
        />
      
    </div>
  )
}

export default LoginPage