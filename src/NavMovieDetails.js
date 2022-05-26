import React, { useState, useEffect } from "react";

import "./Nav.css";

import { Link, NavLink ,useHistory } from "react-router-dom";


import './NavMovieDetails.css'

let profile_picture_base_url = "http://127.0.0.1:8000/";

function NavMovieDetails() {
	
	const [show, handleShow] = useState(false);

	const obj = JSON.parse(localStorage.getItem("user-info"));

	// console.log(obj);
	// console.log(profile_picture_base_url + obj.profileImage);
	

	


	const profilePicture = profile_picture_base_url + obj.profileImage;
	

	


    useEffect(() => {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 100) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        });

        //clean-up
        return () => {
			
			window.removeEventListener("scroll",null);

		
			
        };

    },[])



	return (
		<div className={`nav ${show && "nav__black"}`}>
			<NavLink exact activeStyle={{color: "tomato"}} className="link" to="/">
				<img
					className="nav__logo"
					src="https://appcmsprod.viewlift.com/dd078ff5-b16e-45e4-9723-501b56b9df0a/images/Desktop Logo without BG.png"
					alt="Chorki"
				/>
			</NavLink>


           

			<ul class="navigation">

				
			{
					localStorage.getItem("user-info") ? (
					<>
						<li>
					<NavLink exact activeStyle={{color: "tomato"}} className="link" to="/">
						Home
					</NavLink>
						</li>
						
						<li>
						<NavLink exact activeStyle={{color: "tomato"}} className="link" to="/tvshows">
							TV Shows
						</NavLink>
					</li>
					<li>
						<NavLink exact activeStyle={{color: "tomato"}} className="link" to="/movies">
							Movies
						</NavLink>
					</li>
					<li>
						<NavLink exact activeStyle={{color: "tomato"}} className="link" to="/watchLaterList">
							Watch Later
						</NavLink>
					</li>
					</>	

					
				): null
						
				
			}



				
			

				
			</ul>

			

           
			<div>

				

				 
				





				<Link to="/chatWithAdmin">
					<img
						className="nav__avatar2"
						src="https://thumbs.dreamstime.com/b/customer-support-service-agent-headset-flat-vector-icon-design-designs-153069368.jpg"
						alt="Avatar Logo"
						/>
				</Link>		
						

					

				{
					localStorage.getItem("user-info") ? (
	

						<img
						className="nav__avatar"
						src={`${profilePicture}`}
						alt="Avatar Logo"
						/>
						
					): (
						
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

export default NavMovieDetails;
