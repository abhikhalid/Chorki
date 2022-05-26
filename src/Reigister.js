import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import Header from "./Header";

import './Register.css';


import VerfiyEmail from "./VerfiyEmail";

function Reigister() {
    
	useEffect(() => {
		if (localStorage.getItem("user-info")) {
			history.push("/");
		}
	}, []);

	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

    const history = useHistory();
    
   async function signUp()
   {
        // alert("hello world!");
       
        let item = { name , email, password };
        
       console.log(item.email);
       
       const formData = new FormData();

       formData.append("name", item.name);
       formData.append("email", item.email);
       formData.append("password", item.password);

        //  let result = await fetch("http://127.0.0.1:8000/api/auth/register", {
        //         method: "POST",
        //         body: JSON.stringify(formData),
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json',
        //         }
        //     },formData);
        
        const result = await axios.post('http://127.0.0.1:8000/api/auth/register', formData);

        // result = await result.json();
       
         console.warn(result);

         if(result.data.status === 200){ 
                alert("hello")
            // set auth user data in local storage after signup
            localStorage.setItem('is_login','1');
            localStorage.setItem('login_email',email);
            // localStorage.setItem('type',result.data.user.user_type);
            localStorage.setItem('access_token', result.data.access_token);
             
            localStorage.setItem("user-info", JSON.stringify(result.data));

            if(result.data.user.email_verified_at==null){

             // send him email virify page
            
             history.push('/verifyEmail');
              
                
                
            }

         } else {
             
            history.push('/login');
              
           
        }
        
    }

    

	return (
		<>
            <Header />
            
           
            <div class="body">
                
            {/* <form onSubmit = {e => signUp(e)} >  */}

			<div className="login">
				<h1 className="login__title">Sign Up</h1>
                    <div className="login__group">
                        
                        <input className="login__group__input"
                            type="text"
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            required="true" />
                        
					<label className="login__group__label">Name</label>
                    </div>
                    
                    <div className="login__group">
                        
                        <input
                            className="login__group__input"
                            type="text"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            required="true" />
                        
					<label className="login__group__label">Email or phone number</label>
				</div>
                    <div className="login__group">
                        
                        <input className="login__group__input" type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}    
                        required="true" />
                        
					<label className="login__group__label">Password</label>
                    </div>
                    
				<button onClick={signUp}  className="login__sign-in" type="button">
					Sign Up
                </button>
                    
               {/* <button type="submit" className="main_btn"><i className="fas fa-lock"></i> Sign up</button> */}

            
                    

				<div className="login__secondary-cta">
					<a className="login__secondary-cta__text" href="#">
						Remember me
					</a>
					<a
						className="login__secondary-cta__text login__secondary-cta__text--need-help"
						href="#"
					>
						Need help?
					</a>
				</div>
                </div>
                {/* </form>  */}
                </div>

                
		</>
	);
}

export default Reigister;
