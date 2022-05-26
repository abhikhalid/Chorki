import React, { useState, useEffect } from 'react'




import './Register.css'

import { Link, useHistory } from "react-router-dom";

import { auth } from "./firebase";

import NavForLoginRegister from "./NavForLoginRegister"

function Login() {

    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	const [errorMessage,setErrorMessage] = useState("");

	useEffect(() => {
		if (localStorage.getItem("user-info")) {
			history.push("/");
		}
	}, []);

	async function login() {

		auth.signInWithEmailAndPassword(email, password)
			.then((authUser) => {
            
				console.log(authUser);
	
			})
			.catch((error) => setErrorMessage(error.message));
		
		
		if (errorMessage.length < 1)
		{
			return;
		}	
		


		console.warn(email, password);	

		let item = { email, password };
		

		//it'll also write that customer is online by making 
		//acivestatus =1 

        let result = await fetch("http://127.0.0.1:8000/api/customerLogin", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });

        result = await result.json();

        localStorage.setItem("user-info", JSON.stringify(result));

		

		history.push("/otp");

		// history.push("/");

        
        
	}

	

	return (
		<>
			{/* <Nav /> */}

			{/* <NavForLoginRegister/> */}


			<div class="body">
				<div className="login">
					<h1 className="login__title">Sign In</h1>
				

					<div className="login__group">
						<input
							className="login__group__inputak47"
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required="true"
						/>

						<label className="login__group__label">Email or phone number</label>
					</div>
					<div className="login__group">
						<input
							className="login__group__inputak47"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required="true"
						/>

						<label className="login__group__label">Password</label>
					</div>
					<button onClick={login} className="login__sign-in" type="button">
						Sign In
					</button>

                    <div className="login__secondary-cta">
                        

						<Link className="login__secondary-cta__text2" to="/register">
							New User? Click here to Register!
						</Link>
					
					</div>

					{/* <p style={{ color: 'red', marginLeft: '210px', marginTop: '20px' }}>Hello World</p> */}
					{errorMessage.length > 1 && <p style={{color: 'red', marginLeft: '160px', marginTop: '20px'}}>Email or Password is wrong!</p>}
				</div>
			</div>
		</>
	);
}

export default Login
