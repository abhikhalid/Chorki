import React, { useState, useEffect } from "react";

import { useHistory,Link} from "react-router-dom";

import Header from "./Header";

import "./Register.css";

import axios from "axios";

function ResetPassword() {

    const [user, setUser] = useState({
        email: ''
	});
	
	const {email} = user;

    const handleInput = (e) => {

        setUser({
			...user, [e.target.name]: e.target.value
			
        })
	}
	
	

	const reset_password_email_send = async(e) =>{ 

		e.preventDefault();
		

        if(email==''){
            
            alert('email not found');
        }
		else {
			
            const r = await axios.post('http://127.0.0.1:8000/api/auth/forgot-password', user)  
            .then((res)=>{
                if(res.data.status === 200){ 
                
                    alert('email sended!');
                    
                }else if(res.data.status === 500){
                   alert('Email not found');
                }else{
                    alert('error');
                }
            })
            .catch((r)=>{
				// toast.error(r.status);
				
				alert(r.staus);
            })
        }
    }
	

	return (
		<>
			<Header />

			<div class="body">
				<div className="login">
					<h1 className="login__title">Reset Password</h1>
				

					<div className="login__group">
						<input
							className="login__group__input"
							type="email"
							name="email"
							value={email}
							onChange={e => handleInput(e)}
							required="true"
						/>

						<label className="login__group__label">Email</label>
					</div>
					
					<button onClick={e => reset_password_email_send(e)} className="login__sign-in" type="button">
						Send Reset Link
					</button>

				
				</div>
			</div>
		</>
	);
}

export default ResetPassword;
