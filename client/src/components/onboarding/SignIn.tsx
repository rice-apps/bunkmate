import React from "react"
import "../../styles/SignIn.css"
import { useGoogleLogin, GoogleLogin } from '@react-oauth/google';

     
const SignIn = (props: any) => {

    // if (window.google) {
    // google.accounts.id.initialize({
    //     client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    //     callback: handleGoogle,
    // });

    // google.accounts.id.renderButton(document.getElementById("loginDiv"), {
    //     // type: "standard",
    //     theme: "filled_black",
    //     // size: "small",
    //     text: "signin_with",
    //     shape: "pill",
    // });

    const login = useGoogleLogin({
        onSuccess: tokenResponse => props.login(tokenResponse),
        flow: 'auth-code'
        });
    // const LoginButton = (props: any) => {
    //     return (
    //         <button className="banner-login" onClick={props.onClick}>
    //             {props.children}
    //         </button>
    //     )
    // }
    // const SignUpButton = (props: any) => {
    // return (
    //     <button className="banner-signup" onClick={props.onClick}>
    //         {props.children}
    //     </button>
    //         )
    // }
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
        
                {/* <button className="banner-signup" onClick={() => login()}> */}
                <button className="banner-signup">
                    <p style={{"width": "60%"}}>sign up with</p>
                    <div>
                        <GoogleLogin
                            onSuccess={token => props.login(token)}
                            size='large'
                            shape='pill'
                            type='icon'
                        />
                    </div>
                    
                </button>
                <button className="banner-login">
                        <p style={{ "width": "60%" }}>login with</p>
                        <div>
                            <GoogleLogin
                                onSuccess={token => props.login(token)}
                                size='large'
                                shape='pill'
                                type='icon'
                            />
                        </div>
                </button>
            
             </div>
             </div>    
    </div>
    )
}

export default SignIn