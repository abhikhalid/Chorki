import React, { useState, useEffect } from "react";
import { useHistory,Link} from "react-router-dom";
import Header from "./Header";
import { useParams } from "react-router";
import "./Register.css";

import axios from "axios";

function SetResetPassword() {

	let history = useHistory();
    const params = useParams();
	
    const [newPassword, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const ResetPassword = async(e) =>{ 

        e.preventDefault();

        if(newPassword=='' || confirmPassword==''){
            alert("Fill up all the field");
        }else if(newPassword.length <6){
            alert("New password length at least 6!");
        }else if(newPassword!=confirmPassword){ 
            alert("New password and confirm password not match!"); 
        }

		else {
			const formData = new FormData();

			formData.append("new_password", newPassword);
			formData.append("confirm_password", confirmPassword); 
			formData.append("email", params.email);                   
			formData.append("reset_token", params.reset_token);                                                    


            const r = await axios.post('http://127.0.0.1:8000/api/auth/reset-password', formData)
            .then((res)=>{
				if (res.data.status === 200) {
					
					alert("password updated"); 

					localStorage.clear();
                    history.push('/login');

                }else if(res.data.status === 500){

                    alert('something wrong')

                }else{
					alert("issue");
                } 
            })
            .catch((r)=>{
                alert("error");
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
							type="password"
							value={newPassword}
							onChange={(e) => setPassword(e.target.value)}
							required="true"
						/>

						<label className="login__group__label">New Password</label>
					</div>
					<div className="login__group">
						<input
							className="login__group__input"
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required="true"
						/>

						<label className="login__group__label">Confirm Password</label>
                    </div>
                    
					<button onClick={ResetPassword} className="login__sign-in" type="button">
						Reset Password
					</button>

					
				</div>
			</div>
		</>
	);
}

export default SetResetPassword;
