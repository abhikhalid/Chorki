import React, { useState } from "react";
import { Link, NavLink ,useHistory } from "react-router-dom";


import "./NavbarSearch.css";

function NavbarSearch() {

	const [data, setData] = useState('');



	return (
		<div className="search-box">
			<input
				className="search-txt"
				type="text"
				name=""
				placeholder="Type to search"
				onChange={(e) => setData(e.target.value)}
			/>

			<Link className="search-btn" to={"searchMovie/"+data}>
                
                  <img src="search.png" width="35" height="35" />
            </Link>

			
            

		</div>
	);
}

export default NavbarSearch;
