import React, { useState, useEffect } from "react";

import Nav from "./Nav";

import Youtube from "react-youtube";

import { withRouter } from "react-router-dom";

import NavMovieDetails from "./NavMovieDetails";

import Comment from "./Comment";
import AddComment from "./AddComment";
import AlertMessage from "./AlertMessage";

let posterUrl = "http://127.0.0.1:8000/";

function MovieDetails(props) {
	const [trailerUrl, setTrailerUrl] = useState("");

	const obj = JSON.parse(localStorage.getItem("user-info"));

	const [addTowatchLaterAlert, setaddTowatchLaterAlert] = useState(false);

	const [changeButtonText, setButtonText] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// console.log(props);

	// console.log("Movie Name : ", props.match.params.movieName);
	// console.log("Movie Description : ", props.match.params.movieDescription);
	// console.log("Movie Poster : ", props.match.params.moviePoster);
	// console.log("Movie URL : ", props.match.params.movieUrl);

	// console.log("Movie URL : ", props.match.params.movieUrl);

	// console.log("Movie URL : ", props.match.params.trailer);

	// console.log(obj.profileImage);

	let posterImage =
		posterUrl +
		props.match.params.moviePoster +
		"/" +
		props.match.params.movieUrl;

	function truncate(str, n) {
		return str?.length > n ? str.substring(0, n - 1) + "..." : str;
	}

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoPlay: 1,
		},
	};

	const handleClick = () => {
		if (trailerUrl) {
			setTrailerUrl("");
			setButtonText(false);
		} else {
			setTrailerUrl(props.match.params.trailer);
			setButtonText(true);
		}
	};

	async function addTowatchLaterList() {
		let customerId = obj.id;
		let name = obj.name;
		let email = obj.email;
		let profileImage = obj.profileImage;
		let movieName = props.match.params.movieName;
		let movieDescription = props.match.params.movieDescription;
		let moviePoster =
			props.match.params.moviePoster + "/" + props.match.params.movieUrl;
		let movieTrailer = props.match.params.trailer;

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

		console.warn(
			customerId,
			name,
			email,
			profileImage,
			movieName,
			movieDescription,
			moviePoster
		);

		// setAlert(true);

		setaddTowatchLaterAlert(true);
		//  alert("Add to watch Later List Successfully!");
	}

	return (
		<>
			<div>
				<NavMovieDetails />

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

						<h1 className="banner__title">{props.match.params.movieName}</h1>

						{/* div > 2 buttons */}

						<div className="banner__buttons">
							{/* <button className="banner__button" onClick={() => handleClick()}>
                                
                            
                            
                            </button> */}

							{!changeButtonText && (
								<button
									className="banner__button"
									onClick={() => handleClick()}
								>
									Play
								</button>
							)}

							{changeButtonText && (
								<button
									className="banner__button"
									onClick={() => handleClick()}
								>
									Stop
								</button>
							)}

							<button onClick={addTowatchLaterList} className="banner__button">
								Add to Watch List
							</button>
						</div>

						{/* description */}

						<h1 className="banner__description">
							{truncate(props.match.params.movieDescription, 150)}
						</h1>
					</div>

					<div className="banner--fadeBottom"></div>
				</header>

				{trailerUrl && (
					<Youtube videoId={trailerUrl} opts={opts}>
						{" "}
					</Youtube>
				)}
			</div>

			<AddComment
				customerId={obj.id}
				name={obj.name}
				profileImage={obj.profileImage}
				movieName={props.match.params.movieName}
			/>

			<Comment movieName={props.match.params.movieName} />

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

export default withRouter(MovieDetails);
