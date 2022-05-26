import React, {useState, useEffect} from 'react'
import Nav from './Nav'


import { Link, useHistory } from "react-router-dom";


import './Register.css';

import { auth } from "./firebase";

import NavForLoginRegister from "./NavForLoginRegister"



function Register() {

    useEffect(() => {
		if (localStorage.getItem("user-info")) {
			history.push("/");
		}
	}, []);

	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [profileImage, setProfileImage] = useState("");

    const history = useHistory();

    const [errorMessage,setErrorMessage] = useState("");
    
   async function signUp()
   {

       auth.createUserWithEmailAndPassword(email, password)
           .then((authUser) => {
            
               console.log(authUser);
       
           })
           .catch((error) => {

            //    alert(error.message);
               setErrorMessage(error.message)

           });
       
     
       
       
       
       
        console.warn(name, profileImage, email, password);

        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('profileImage', profileImage);

        let result = await fetch("http://127.0.0.1:8000/api/customerRegister" , {
            method: 'POST',
            body: formData,
        });
        

        result = await result.json();
        
        localStorage.setItem("user-info",JSON.stringify(result));


        history.push("/login");

    }








    return (
        <>
            
            <NavForLoginRegister/>
          
          
            
            
            
            <div class="body">

                

			<div className="login">
				<h1 className="login__title">Sign Up</h1>
                    <div className="login__group">
                        
                        <input className="login__group__inputak47"
                            type="text"
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            required="true" />
                        
					<label className="login__group__label">Name</label>
                    </div>
                    
                    <div className="login__group">
                        
                        <input
                            className="login__group__inputak47"
                            type="text"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            required="true" />
                        
					<label className="login__group__label">Email or phone number</label>
				</div>
                    <div className="login__group">
                        
                        <input className="login__group__inputak47" type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}    
                        required="true" />
                        
					<label className="login__group__label">Password</label>
                    </div>

                    <div className="login__group">
                       
                        <label style={{ color: 'white',fontWeight: 'bold',marginLeft:'4px'}} >Upload Profile Photo</label>
                        
                        <input style={{ marginLeft: '58px' }} type="file"

                           onChange={(e)=>setProfileImage(e.target.files[0])} 
                           placeholder="Upload Profile Photo"
                        />
                        
					
                    </div>
                    

                    
				<button onClick={signUp} className="login__sign-in" type="button">
					Sign Up
                    </button>
                    
				

            
				<div className="login__secondary-cta">
					
					<Link
						
						to="/login"
					>
					<h1 style={{color:'white'}} className="login__secondary-cta__text login__secondary-cta__text--need-help">	Already have an account? Click here to Sign In </h1>
					</Link>
                    </div>
                    
                    {errorMessage.length > 1 && <p style={{ color: 'red', marginLeft: '160px', marginTop: '25px' }}>Registration Failed!</p>}

                    {/* <p style={{ color: 'red', marginLeft: '160px', marginTop: '25px' }}>Registration Failed!</p> */}
                    
                    
                </div>
                </div>
		</>
    )
}

export default Register
