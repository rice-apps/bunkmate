import React from "react"
import "../../styles/SignIn.css"
import { GoogleLogin } from '@react-oauth/google';

const SignIn = (props: any) => {
    return (
    <div className="sign-in">
        <div className="banner">
            <div className="banner-content">
                <div className="banner-text">
                    <strong>bunkmate</strong> 
                </div>
                <div className="banner-right">
                    {/* <div className="banner-login">
                        Log in
                        
                    </div> */}
                    <GoogleLogin
                        onSuccess={props.login}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        />
                    {/* <div className="banner-signup">
                        Sign up
                    </div> */}
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
                {/* <div className="banner-login">
                    Log in
                </div>
                <div className="banner-signup">
                        Sign up
                </div> */}
                {/* <GoogleLogin
                        onSuccess={props.login}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        /> */}
            </div>
        </div>
        <div>
        <div className="main-img">
            </div>
        <div className="wavy-border">
        </div>
        </div>
       
        <div className="lower-body">
            <div className="lower-body-header">
                <strong>Bunkmate optimizes your roommate finding experience so you can avoid the hassle.</strong> 
            </div>
            <div className="auth-block">
                <div className="auth-img">
                </div>
                <div className="auth-header">
                    <strong>Authentication</strong> 
                </div>
                <div className="auth-text">
                Every profile is approved, so you can feel secure and safe when using the service. 
                </div>
            </div>
            
            
        </div>
    </div>
    
    )
}

export default SignIn

