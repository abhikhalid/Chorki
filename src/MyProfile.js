import React from 'react'

import Nav from './Nav'

import './MyProfile.css'

import { auth } from "./firebase";
import {useHistory} from "react-router-dom"

function MyProfile() {

	const history = useHistory();

	function logOut()
	{
		auth.signOut();

		localStorage.clear();

		history.push("/login");
	}



	return (
		<div className="profileScreen">

			<Nav />
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>

			<div className="profileScreen__body">

				<h1>Edit Profile</h1>

				<div className="profileScreen__info">

					<img src="/1615013653618.jpg" alt="" />

					<div className="profileScreen__details">

						<h2>User Email</h2>

						<div className="profileScreen__plans">

							<h3>Plans</h3>

							

							 <button onClick={logOut}  className="profileScreen__signOut">Sign Out</button>
						</div>

					</div>

				</div>


			</div>




			
			
		</div>
	)
}

export default MyProfile
