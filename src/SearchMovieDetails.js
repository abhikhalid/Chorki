import React, { useState, useEffect } from "react";



import { withRouter } from "react-router-dom";

import './SearchMovieDetails.css'

import { Link } from "react-router-dom";
import Nav from "./Nav";

const base_url = "http://127.0.0.1:8000/";

function SearchMovieDetails(props) {

	const obj = JSON.parse(localStorage.getItem("user-info"));

	const [data, setData] = useState([]);

	// console.log(props.match.params.id);

	useEffect(async () => {
		let result = await fetch(
			"http://127.0.0.1:8000/api/search/" + props.match.params.id
		);

		result = await result.json();

		setData(result);

		console.log(data);
		
	}, []);

	return (
        <>
            <div>
			<Nav />

			<br />
			<br />

			<div className="tablecontainer">
				<h1 className="heading">Your Search List</h1>

				<table className="table">
					<thead>
						<tr>
							<th>Movie Name</th>
							<th>Movie Description</th>
							<th>Movie Poster</th>
							<th>Action 1</th>
							
						</tr>
					</thead>

					<tbody>
						{data.map((movie) => (
							<tr>
								<td>{movie.movieName}</td>
								<td>{movie.movieDescription}</td>

								<td>
									<img
										style={{ width: 200 }}
										src={base_url + movie.moviePoster}
									/>
								</td>

								<td>
									<Link
										to={
											"/movieDetails/" +
											movie.movieName +
											"/" +
											movie.movieDescription +
											"/" +
											movie.moviePoster +
											"/" +
											movie.movieUrl
										}
									>
										<span className="btn2">Play Now!</span>
									</Link>
								</td>

								
							</tr>
						))}
					</tbody>
				</table>
                </div>
                
                </div>
		</>
	);
}

export default withRouter(SearchMovieDetails);
