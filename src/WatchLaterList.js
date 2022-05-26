import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "./WatchLaterList.css";

import "./NavForWatchLater";
import NavForWatchLater from "./NavForWatchLater";
import AlertMessage from "./AlertMessage";

import { Link } from "react-router-dom";

import ReactPaginate from "react-paginate";

const base_url = "http://127.0.0.1:8000/";




function WatchLaterList() {
	const [data, setData] = useState([]);
	

	const [deletealert,setDeleteAlert] = useState(false);

	const obj = JSON.parse(localStorage.getItem("user-info"));

	useEffect(async () => {
		let result = await fetch(
			"http://127.0.0.1:8000/api/customerviewWatchList/" + obj.id
		);

		result = await result.json();

		setData(result);
	}, [data]);

    // console.log("watch later list", data);
    

    async function deleteOperation(id)
    {
        let result = await fetch("http://127.0.0.1:8000/api/deleteWatchList/" + id, {
           
            method : 'DELETE'
        });

        result = await result.json();

        // console.log(result);

		setDeleteAlert(true);
	}
	
	

	//pagination start

	const [pageNumber, setPageNumber] = useState(0);

	const usersPerPage = 5;

	const pagesVisited = pageNumber * usersPerPage; // pages visited so far

	const displayUsers = data
	.slice(pagesVisited, pagesVisited + usersPerPage)
	.map((movie) => {

		return (

			<tr>
								
                    <td >{movie.movieName}</td>
					<td>{movie.movieDescription}</td>
					
				<td><img style={{ width: 200 }} src={base_url + movie.moviePoster} /></td>

							<td>

									<Link to={"/movieDetails/" + movie.movieName + "/" + movie.movieDescription + "/" + movie.moviePoster + "/" + movie.movieTrailer}>
										
									<span  className="btn2">Play Now!</span>

								    </Link>

								</td>

								<td>
									<span onClick={() => deleteOperation(movie.id)}  className="btn">Delete Watch List</span>
								</td>
							</tr>
			
			
		
			
		);
			
		
		
	})




	const pageCount = Math.ceil(data.length / usersPerPage);

	const changePage = ({selected}) => {

		setPageNumber(selected);

	}



	//pagination end





	return (
		<>
			<NavForWatchLater />

			<br />
			<br />

			<div className="table-container">
				<h1 className="heading">Your Watch Later Movie List. Enjoy Now!</h1>

				<table className="table">
					<thead>
						<tr>
							<th>Movie Name</th>
							<th>Movie Description</th>
							<th>Movie Poster</th>
							<th>Action 1</th>
							<th>Action 2</th>
						</tr>
					</thead>

					<tbody>
						{/* {data.map((movie) => (
							<tr>
								
                                <td >{movie.movieName}</td>
                                <td>{movie.movieDescription}</td>

                                <td><img style={{width:200}} src={base_url+movie.moviePoster} /></td>

								<td>

									<Link to={"/movieDetails/" + movie.movieName + "/" + movie.movieDescription + "/" + movie.moviePoster + "/" + movie.movieTrailer}>
										
									<span  className="btn2">Play Now!</span>

								    </Link>

								</td>

								<td>
									<span onClick={() => deleteOperation(movie.id)}  className="btn">Delete Watch List</span>
								</td>
							</tr>
						))} */}

						{displayUsers}

						<br/>
						<br/>
						<br/>

						<ReactPaginate
									previousLabel={"Previous"}
									nextLabel={"Next"}
									pageCount={pageCount}
									onPageChange={changePage}
									containerClassName={"paginationBttns"}
									previousLinkClassName={"previousBttn"}
									nextLinkClassName={"nextBttn"}
									disabledClassName={"paginationDisabled"}
									activeClassName={"paginationActive"}
								/>

						
					</tbody>
				</table>
			</div>


			{deletealert && (
				<AlertMessage message="Removed from watch later list successfully!" />
			)}

			{deletealert &&
				setTimeout(() => {
					// console.log('Hello, World!')

					setDeleteAlert(false);
				}, 5000)}
		</>
	);
}

export default WatchLaterList;
