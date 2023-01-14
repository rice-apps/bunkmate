import React from "react"
import "../../styles/SignIn.css"
import { useGoogleLogin } from '@react-oauth/google';
     
const SignIn = (props: any) => {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        });
        const LoginButton = (props: any) => {
           return (
               <button className="banner-login" onClick={props.onClick}>
                   {props.children}
               </button>
           )
       }
       const SignUpButton = (props: any) => {
        return (
            <button className="banner-signup" onClick={props.onClick}>
                {props.children}
            </button>
        )
    }
    return (
    <div className="sign-in">
         <div className="banner">
         <div className="banner-content">
                 <div className="banner-text">
                     <strong>bunkmate</strong> 
                 </div>
         </div>
         </div>
         <div className="body">
             <div className="body-header">
                     <strong>find a roommate. avoid the hassle.</strong> 
             </div>
             <div className="body-little-header">
             Rice’s very own easy-to-use digital solution for your roommate finding issues for both on and off-campus living.
             </div>
             <div className="body-buttons">
            <SignUpButton className="banner-signup" onClick={() => login()}>
                sign up
            </SignUpButton>
            <LoginButton className="banner-login" onClick={() => login()}>
                login
            </LoginButton>
            
             </div>
             </div>    
    </div>
    )
}

export default SignIn