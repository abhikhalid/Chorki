import React, { useState, useEffect } from "react";

import {Link} from 'react-router-dom'

import "./MovieList.css";

import Header from "./Header";


import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";

import ReactPaginate from "react-paginate";


function MovieList() {

   

	const [category, setCategory] = useState("getActionMovie");

	const [data, setData] = useState([]);


	//pagination start
	const [pageNumber, setPageNumber] = useState(0);

	const usersPerPage = 10;

	const pagesVisited = pageNumber * usersPerPage; // pages visited so far

	// const [deleteMovieAlert, setDeleteMovieAlert] = useState(false);

	

	const displayUsers = data
		.slice(pagesVisited, pagesVisited + usersPerPage)
		.map((item) => {

			return (
				
				
				<tr>
					<td class="column1">{item.id}</td>
					<td class="column2">{item.movieName}</td>
		  
			
					<td class="column4"><img style={{ width: 200 }} src={"http://localhost:8000/" + item.moviePoster} /></td>
			
					<td class="column5">{item.movieUrl}</td>
					<td class="column6">{item.movieRating}</td>
					<td class="column7">{item.movieLanguage}</td>
			
					<td class="column7"><span onClick={() => deleteOperation(item.id)} style={{ backgroundColor: 'red', color: 'black', padding: '5px', borderRadius: '5px', cursor: 'pointer' }}>Delete</span></td>

					<td class="column7"><span style={{ backgroundColor: 'green', color: 'black', padding: '5px', borderRadius: '5px', cursor: 'pointer' }}>Update</span></td>
			
		   
			
				</tr>
				
			);
				
			
			
		})


	const pageCount = Math.ceil(data.length / usersPerPage);

	const changePage = ({selected}) => {

		setPageNumber(selected);

	}


	////pagination end


	


	useEffect(async() => {
        console.log(category);
        
        

		let result = await fetch("http://127.0.0.1:8000/api/"+category);
	

		result = await result.json();

		setData(result);
		

		console.log(data.length);
 
		 



        
	}, [category]);




	


    

    async function deleteOperation(id)
    {
        // console.log(id);

        let result = await fetch("http://127.0.0.1:8000/api/delete" + category + "/" + id, {
            method: 'DELETE'
        });

        result = await result.json();

		console.warn(result);
		



	}


	



	function onChangeHandler(event) {
		if (event.target.value === "Action Movie") {
			setCategory("getActionMovie");
		} else if (event.target.value === "Chorki Originals") {
			setCategory("getChorkiOriginalsMovie");
		} else if (event.target.value === "Comdey") {
			setCategory("getComdeyMovie");
		} else if (event.target.value === "Horror") {
			setCategory("getHorrorMovie");
		} else if (event.target.value === "Romance") {
			setCategory("getRomanceMovie");
		} else if (event.target.value === "Top Rated") {
			setCategory("getTopRatedMovie");
		} else if (event.target.value === "Trending New Movies") {
			setCategory("getTrendingNewMovie");
		}
	}



	  

	return (
		<>
			<Header />
			<div className="movie">
				<h1 class="heading1">
					Please select a category to show category wise movie list 🎥 
				</h1>

				<div class="container">
					<select onChange={onChangeHandler} class="dropdown">
						<option>Action Movie</option>
						<option>Chorki Originals</option>
						<option>Comdey</option>
						<option>Horror</option>
						<option>Romance</option>
						<option>Top Rated</option>
						<option>Trending New Movies</option>
					</select>
				</div>
			</div>

			<div class="limiter">
				<div class="container-table100">
					<div class="wrap-table100">
						<div class="table100">
							<table>
								<thead>
									<tr class="table100-head">
										<th class="column1">Id</th>
										<th class="column2">Movie Name</th>
									
										<th class="column4">Movie Poster</th>
										<th class="column5">Movie URL</th>
										<th class="column6">Movie Rating</th>
                                        <th class="column7">Movie Language</th>
                                        
										<th class="column7">Action 1</th>
										<th class="column7">Action 2</th>
										
									</tr>
								</thead>
								{/* <tbody> */}

							

								{/* {data.map((item) => (
									<tr>
										<td class="column1">{item.id}</td>
										<td class="column2">{item.movieName}</td>
                                      
                                        
                                        <td class="column4"><img style={{width:200}} src={"http://localhost:8000/"+item.moviePoster} /></td>
                                        
										<td class="column5">{item.movieUrl}</td>
										<td class="column6">{item.movieRating}</td>
                                        <td class="column7">{item.movieLanguage}</td>
                                        
                                        <td class="column7"><span onClick={() => deleteOperation(item.id)} style={{ backgroundColor: 'red', color: 'black', padding: '5px', borderRadius: '5px', cursor: 'pointer' }}>Delete</span></td>

                                        <td class="column7"><span  style={{ backgroundColor: 'green', color: 'black', padding: '5px', borderRadius: '5px', cursor: 'pointer' }}>Update</span></td>
                                        
                                       
                                        
									</tr>
								))} */}


								{displayUsers}

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


								



							</table>

						
						
								
						

							
						
						</div>
						
						
					</div>
				

				</div>
			</div>
		</>
	);
}

export default MovieList;
