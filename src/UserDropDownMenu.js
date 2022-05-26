import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import "./UserDropDownMenu.css";

import { auth } from "./firebase";

function UserDropDownMenu({profilePicture,name,useremail}) {

	const [show, setShow] = useState(false);

	const history = useHistory();

	const obj = JSON.parse(localStorage.getItem("user-info"));

	
	
	

	function menuToggle()
	{
		setShow(!show);
		// console.log(show);
	}

   async function logOut()
   {
	   let email = obj.email;
	   let password = obj.password;

	   let item = { email,password };
	   
	   console.log(item);

		let result = await fetch("http://127.0.0.1:8000/api/customerLogout", {
			method: "POST",
			body: JSON.stringify(item),
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			}
		});

	    result = await result.json();
    
		
		auth.signOut();

		localStorage.clear();

		history.push("/login");
	}


	return (
		<div className="action">

			<div className="profile" onClick={menuToggle}>
				
				
				<img src={profilePicture}></img>
				
				
			</div>

			<div className={`menu ${show && "active"}`}>
				<h3>
					{name} <br />
					<span>{useremail}</span>
				</h3>

				<ul>
					<li>
					
						<img src="user.png" />
						<Link to="/userProfile">My Profile</Link>

					</li>

					
					
					<div onClick={logOut}>
					<li >

				   		
					<img src="log-out.png"  />
						<a>Logout </a>
						
					</li>
					</div>
				  

					
				</ul>
			</div>
		</div>
	);
}

export default UserDropDownMenu;
