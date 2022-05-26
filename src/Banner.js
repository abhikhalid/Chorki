import React, { useState, useEffect } from "react";

import "./Banner.css";

import Youtube from "react-youtube";

import AlertMessage from "./AlertMessage";

let posterUrl = "http://127.0.0.1:8000/";

function Banner() {
	const [movie, setMovie] = useState([]);

	const [trailerUrl, setTrailerUrl] = useState("");

	const [alert, setAlert] = useState(false);

	const [addTowatchLaterAlert, setaddTowatchLaterAlert] = useState(false);

	const [changeButtonText, setButtonText] = useState(false);

	const obj = JSON.parse(localStorage.getItem("user-info"));

	useEffect(async () => {
		let selectMovieTable = Math.floor(Math.random() * 7);

		let fetchUrl;

		if (selectMovieTable == 0) {
			fetchUrl = "http://127.0.0.1:8000/api/getActionMovie";
		} else if (selectMovieTable == 1) {
			fetchUrl = "http://127.0.0.1:8000/api/getComdeyMovie";
		} else if (selectMovieTable == 2) {
			fetchUrl = "http://127.0.0.1:8000/api/getTrendingNewMovie";
		} else if (selectMovieTable == 3) {
			fetchUrl = "http://127.0.0.1:8000/api/getTopRatedMovie";
		} else if (selectMovieTable == 4) {
			fetchUrl = "http://127.0.0.1:8000/api/getHorrorMovie";
		} else {
			fetchUrl = "http://127.0.0.1:8000/api/getRomanceMovie";
		}

		// console.log(selectMovieTable);

		let result = await fetch(fetchUrl);

		result = await result.json();

		setMovie(result[Math.floor(Math.random() * result.length - 1)]);
	}, []);

	let posterImage;

	useEffect(() => {
		{
			movie && (posterImage = posterUrl + movie.moviePoster);
		}
	}, []);

	//  let posterImage = posterUrl + movie.moviePoster ??

	posterImage = posterUrl + movie.moviePoster;

	// console.log(movie);

	// console.log("Banner Movie", movie[Math.floor(Math.random() * movie.length - 1)]);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoPlay: 1,
		},
	};

	const handleClick = () => {
		console.log(movie);

		if (trailerUrl) {
			setTrailerUrl("");
			setButtonText(false);
		} else {
			setTrailerUrl(movie.movieUrl);
			setButtonText(true);
		}
	};

	async function addTowatchLaterList() {
		let customerId = obj.id;
		let name = obj.name;
		let email = obj.email;
		let profileImage = obj.profileImage;
		let movieName = movie.movieName;
		let movieDescription = movie.movieDescription;
		let moviePoster = movie.moviePoster;
		let movieTrailer = movie.movieUrl;

		let item = {
			customerId,
			name,
			email,
			profileImage,
			movieName,
			movieDescription,
			moviePoster,
			movieTrailer,
		};

		let result = await fetch(
			"http://127.0.0.1:8000/api/customeraddtowatchlaterlist",
			{
				method: "POST",
				body: JSON.stringify(item),
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			}
		);

		result = await result.json();

		// console.warn(customerId, name, email, profileImage, movieName, movieDescription, moviePoster,movieTrailer);

		// setAlert(true);
		//alert("Add to watch Later List Successfully!");

		setaddTowatchLaterAlert(true);
	}

	function truncate(str, n) {
		return str?.length > n ? str.substring(0, n - 1) + "..." : str;
	}

	return (
		/* Background Image*/

		<>
			<header
				className="banner"
				style={{
					backgroundSize: "cover",
					backgroundImage: `url(${posterImage})`,
					backgroundPosition: "center center",
				}}
			>
				<div className="banner__contents">
					{/* title */}

					<h1 className="banner__title">{movie.movieName}</h1>

					{/* div > 2 buttons */}

					<div className="banner__buttons">
						{/* <button className="banner__button" onClick={() => handleClick()}>Play</button> */}

						{!changeButtonText && (
							<button className="banner__button" onClick={() => handleClick()}>
								Play
							</button>
						)}

						{changeButtonText && (
							<button className="banner__button" onClick={() => handleClick()}>
								Stop
							</button>
						)}

						<button onClick={addTowatchLaterList} className="banner__button">
							Add to Watch List
						</button>
					</div>

					{/* description */}

					<h1 className="banner__description">
						{truncate(movie.movieDescription, 150)}
					</h1>
				</div>

				<div className="banner--fadeBottom"></div>
			</header>

			{trailerUrl && (
				<Youtube videoId={trailerUrl} opts={opts}>
					{" "}
				</Youtube>
			)}

			{addTowatchLaterAlert && (
				<AlertMessage message="Added to watch later list successfully!" />
			)}

			{addTowatchLaterAlert &&
				setTimeout(() => {
					// console.log('Hello, World!')

					setaddTowatchLaterAlert(false);
				}, 5000)}
		</>
	);
}

export default Banner;
