import React, { useState, useEffect } from "react";

import "./Header.css";

import { Link, NavLink ,useHistory } from "react-router-dom";

import UserDropDownMenu from "./UserDropDownMenu";


function Header() {

    const [show, handleShow] = useState(false);

    let user = JSON.parse(localStorage.getItem("user-info"));

    const history = useHistory();

    // console.warn(user);

    function logout()
    {
        localStorage.clear();
        history.push("/register");
    }


    const obj = JSON.parse(localStorage.getItem("user-info"));



	return (
		<div>
			
         

           
            
            	<div className="nav  nav__black">
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
                          User List
                                    </NavLink>
                                    
						</li>
						
						<li>
						<NavLink exact activeStyle={{color: "tomato"}} className="link" to="/addMovie">
                                Add Movie
						</NavLink>
                                </li>
                                
                                <li>
                                    
						<NavLink exact activeStyle={{color: "tomato"}} className="link" to="/movieList">
                                Movie List
						</NavLink>
					</li>
					<li>
						<NavLink exact activeStyle={{color: "tomato"}} className="link" to="/chatWithAdmin">
                             Chat With Admin
						</NavLink>
                      </li>
                                
					<li>
						<NavLink exact activeStyle={{color: "tomato"}} className="link" to="/viewchart">
                            View Chart
						</NavLink>
					</li>
					<li>
						<NavLink exact activeStyle={{color: "tomato"}} className="link" to="/addchart">
                            Add Chart
						</NavLink>
                      </li>
                                
					</>	

					
                        ) : (
                                     
                            <>
                       
                                    <li>
                                    
                       <NavLink exact activeStyle={{color: "tomato"}} className="link" to="/login">
                                    Login
                                    </NavLink>
                                    </li>
                                    

                                    <li>
                       <NavLink exact activeStyle={{color: "tomato"}} className="link" to="/register">
                                    Register
						</NavLink>
                         
                         </li>

                       </>
                )
						
				
			}



				
			

				
			</ul>

			

           
			<div>

				{/* <NavbarSearch/> */}

				 
			
{/* 
				<Link to="/chatWithAdmin">
					<img
						className="nav__avatar3"
						src="https://thumbs.dreamstime.com/b/customer-support-service-agent-headset-flat-vector-icon-design-designs-153069368.jpg"
						alt="Avatar Logo"
						/>
				</Link>		 */}
						

					

				{
					localStorage.getItem("user-info") ? (
	

					
						<UserDropDownMenu
							profilePicture="/mahbub_san.png"
							name={obj.name}
							useremail={obj.email}
						
						/>

					):
						
							
                            null
				} 

			    
				
			
          </div>      


		</div>
			
		</div>
	);
}

export default Header;
