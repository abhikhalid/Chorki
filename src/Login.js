import React, { useState, useEffect } from "react";

import { useHistory,Link} from "react-router-dom";

import Header from "./Header";

import "./Register.css";

import axios from "axios";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");



	const [emailRequired, setEmailRequired] = useState(false);
	const [emailValid, setEmailValid] = useState(false);
	const [passwordRequired, setPasswordRequired] = useState(false);
	const [passwordValid, setPasswordValid] = useState(false);

	let history = useHistory();

	useEffect(() => {
		if (localStorage.getItem("user-info")) {
			history.push("/");
		}
	}, []);

	async function Login() {
		console.warn(email, password);

        let item = { email, password };

        // let result = await fetch("http://127.0.0.1:8000/auth/api/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify(item)
        // });

        // result = await result.json();

		if (email == "")
		{
			//  alert("Email is required!");
			setEmailRequired(true);
			 return;
		}
		else if (!email.includes("@"))
		{
			// alert("Email is not valid!");
			setEmailValid(true);
			 return;
		}	
		 if (password == "")
		{
			//  alert("Passower is required!");
			 setPasswordRequired(true);
			  return;
		}
		else if (password.length < 6)
		{
			// alert("Password must be 6 characters in length");
			 setPasswordValid(true);
			return;
		}

		if (emailRequired || emailValid || passwordRequired || passwordValid )
		{
			return;
		}
		else
		{
			setEmailRequired(false);
			setEmailValid(false);
			setPasswordRequired(false);
			setPasswordValid(false);

		}	
		

		const formData = new FormData();

		// formData.append("name", item.name);
		formData.append("email", item.email);
		formData.append("password", item.password);

		const result = await axios.post('http://127.0.0.1:8000/api/auth/login',formData);
 
            if(result.data.status === 200){ 

                		

                localStorage.setItem('access_token',result.data.access_token);
			
			
				localStorage.setItem("user-info", JSON.stringify(result.data));

				localStorage.setItem('is_login','1');
				localStorage.setItem('login_email',email);
				// localStorage.setItem('type',result.data.user.user_type);
				localStorage.setItem('access_token',result.data.access_token);


				history.push("/otp");
				// history.push('/');

       			
 
			}
			else if (result.data.status == 401)
			{

				alert("Login failed!");
                
            }

      
        
	}

	return (
		<>
			<Header />

			<div class="body">
				<div className="login">
					<h1 className="login__title">Sign In</h1>
				

					<div className="login__group">
						<input
							className="login__group__input"
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required="true"
						/>

						<label className="login__group__label">Email or phone number</label>
						
					</div>

				   <p className={`warning ${emailRequired && "emailRequiredWarning"}`}>Email is required!</p>
					 

					<p className={`warning ${emailValid && "emailRequiredWarning"}`}>Email is not valid!</p>

					<div className="login__group">
						<input
							className="login__group__input"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required="true"
						/>

						<label className="login__group__label">Password</label>
					</div>

				  	<p className={`warning ${passwordRequired && "emailRequiredWarning"}`}>Passower is required!</p>
					<p className={`warning ${passwordValid && "emailRequiredWarning"}`}>Password must be 6 characters in length</p>

					<button onClick={Login} className="login__sign-in" type="button">
						Sign In
					</button>

					<div className="login__secondary-cta">
						<Link to="/resetPassword" className="login__secondary-cta__text" href="#">
							Reset Password
						</Link>
						<a
							className="login__secondary-cta__text login__secondary-cta__text--need-help"
							href="#"
						>
							Need help?
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
