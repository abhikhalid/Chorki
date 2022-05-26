import React,{useState,useEffect} from 'react'
import { auth } from "./firebase";

import firebase from "firebase/compat/app";

import { getAuth, RecaptchaVerifier } from "firebase/auth";

import { useHistory,Link} from "react-router-dom";

import Header from './Header'

import './OTP.css'



function OTP () {

    let history = useHistory();



    const [mobileNumber, setMobileNumber] = useState("");

    const [otp, setOtpNumber] = useState("");


   function configureCaptcha (){
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log("Recaptca varified")
        },
        defaultCountry: "BD"
      });
    }

    function onSignInSubmit (e)  {
        e.preventDefault();
        
      configureCaptcha()
      const phoneNumber = "+88" + mobileNumber
      console.log(phoneNumber)
      const appVerifier = window.recaptchaVerifier;
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
          .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            console.log("OTP has been sent")
            // ...
          }).catch((error) => {
            // Error; SMS not sent
            // ...
            console.log("SMS not sent")
          });
    }
    function onSubmitOTP (e) {
      e.preventDefault()
        const code = otp;

      console.log(code)
      window.confirmationResult.confirm(code).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user))
          alert("User is verified")
          
          history.push('/');
          
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
          alert("wrong OTP")
      });
    }
    
    return (
        
        <>
            <Header/>

         <div className="body">
            <div className="login">
                <h2 className="login__title">OTP Form</h2>
                
           <form onSubmit={onSignInSubmit} >
            <div id="sign-in-button"></div>
                        <input className="login__group__input"
                            placeholder="Enter your mobile number"
                            type="number" name="mobile" required onChange={(e) => setMobileNumber(e.target.value)} />
                        <button className="login__sign-in" type="submit">Submit</button>
                        
                       


                    </form>
                     
          
          
                    <form onSubmit={onSubmitOTP}>
                    <div id="sign-in-button"></div>
                  <input className="login__group__input" type="number" name="otp" placeholder="OTP Number" required onChange={(e) => setOtpNumber(e.target.value)} />
                  
            <button className="login__sign-in" type="submit">Submit</button>
            </form>
            </div>
          </div>

        </>




      )
    }
  
  export default OTP;