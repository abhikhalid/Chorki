import React, { useState, useEffect } from "react";

import "./Nav.css";


import { Link, NavLink ,useHistory } from "react-router-dom";

import Nav from "./Nav";

import UserDropDownMenu from "./UserDropDownMenu";


let profile_picture_base_url = "http://127.0.0.1:8000/";

function NavForWatchLater() {
	const [show, handleShow] = useState(false);

	const obj = JSON.parse(localStorage.getItem("user-info"));

	const profilePicture = profile_picture_base_url + obj.profileImage;

	return (
		<div className="nav">
			<a href="#">
				<img
					className="nav__logo"
					src="https://appcmsprod.viewlift.com/dd078ff5-b16e-45e4-9723-501b56b9df0a/images/Desktop Logo without BG.png"
					alt="Chorki"
				/>
			</a>

			<ul class="navigation">
				{localStorage.getItem("user-info") ? (
					<>
						<li>
							<NavLink exact activeStyle={{color: "tomato"}} className="link" to="/">
								Home
							</NavLink>
						</li>

						<li>
							<NavLink exact activeStyle={{color: "tomato"}} className="link" to="">
								TV Shows
							</NavLink>
						</li>
						<li>
							<NavLink exact activeStyle={{color: "tomato"}} className="link" to="">
								Movies
							</NavLink>
						</li>
						<li>
							<NavLink exact activeStyle={{color: "tomato"}} className="link" to="/watchLaterList">
								Watch Later
							</NavLink>
						</li>
					</>
				) : null}
			</ul>

			<div>
			
		    	<Nav />

				<Link to="/chatWithAdmin">
					<img
						className="nav__avatar2"
						src="https://thumbs.dreamstime.com/b/customer-support-service-agent-headset-flat-vector-icon-design-designs-153069368.jpg"
						alt="Avatar Logo"
					/>
				</Link>

				{localStorage.getItem("user-info") ? (
					// <img
					// 	className="nav__avatar"
					// 	src={`${profilePicture}`}
					// 	alt="Avatar Logo"
					// />

					<UserDropDownMenu
							profilePicture={profilePicture}
							username={obj.username}
							useremail={obj.useremail}
						
						/>




				) : (
					<img
						className="nav__avatar"
						src="https://pbs.twimg.com/profile_images/1398399796667244549/oZeQQEzC_400x400.png"
						alt="Avatar Logo"
					/>
				)}
			</div>
		</div>
	);
}

export default NavForWatchLater;
