import React, { useState, useEffect } from "react";

import "./AddMovie.css";

import Header from "./Header";

function AddMovie() {
	const [movieName, setMovieName] = useState("");
	const [movieDescription, setMovieDescription] = useState("");
	const [moviePoster, setMoviePoster] = useState("");
	const [movieUrl, setMovieUrl] = useState("");
	const [movieRating, setMovieRating] = useState("");
	const [movieLanguage, setMovieLanguage] = useState("");
	const [movieCategory, setMovieCategory] = useState("");

	const [movieAlert, setMovieAlert] = useState(false);

	async function addMovie() {
		console.log(
			movieName,
			movieDescription,
			moviePoster,
			movieUrl,
			movieRating,
			movieLanguage,
			movieCategory
		);

		const formData = new FormData();

		formData.append("movieName", movieName);
		formData.append("movieDescription", movieDescription);
		formData.append("moviePoster", moviePoster);
		formData.append("movieUrl", movieUrl);
		formData.append("movieRating", movieRating);
		formData.append("movieLanguage", movieLanguage);
		formData.append("movieCategory", movieCategory);

		let result = await fetch("http://127.0.0.1:8000/api/" + movieCategory, {
			method: "POST",
			body: formData,
		});

		alert("Movie has been saved successfully!");

		
	}

	return (
		<div>
			<Header />

			<br />

			<section class="signup">
				<div class="container">
					<div class="signup-content">
						<div class="signup-form">
							<h2 class="form-title">Add Movie</h2>
							<form class="register-form">
								<div class="form-group">
									<input
										type="text"
										onChange={(e) => setMovieName(e.target.value)}
										placeholder="Movie Name"
									/>
								</div>
								<div class="form-group">
									<input
										type="text"
										onChange={(e) => setMovieDescription(e.target.value)}
										placeholder="Movie Description"
									/>
								</div>
								<div class="form-group">
									<input
										type="file"
										onChange={(e) => setMoviePoster(e.target.files[0])}
										placeholder="Upload movie poster image"
									/>
								</div>
								<div class="form-group">
									<input
										type="text"
										onChange={(e) => setMovieUrl(e.target.value)}
										placeholder="Movie URL"
									/>
								</div>
								<div class="form-group">
									<input
										type="text"
										onChange={(e) => setMovieRating(e.target.value)}
										placeholder="Movie Rating"
									/>
								</div>
								<div class="form-group">
									<input
										type="text"
										onChange={(e) => setMovieLanguage(e.target.value)}
										placeholder="Movie Language"
									/>
								</div>
								<div class="form-group">
									<input
										type="text"
										onChange={(e) => setMovieCategory(e.target.value)}
										placeholder="Movie Category"
									/>
								</div>

								<div class="form-group form-button">
									<input
										type="submit"
										onClick={addMovie}
										class="form-submit"
										value="Add Movie to Database"
									/>
								</div>
							</form>
						</div>
						<div class="signup-image">
							<figure>
								<img
									src="https://is4-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/ac/1c/9a/ac1c9aea-52d1-88c6-5ea4-812758916491/39caa132-7548-405e-bfed-b27ed930e5b9_5.5_Inch_Iphone_02.jpg/750x750bb.jpeg"
									width="350"
									height="200"
									alt="chorki mobile app"
								/>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default AddMovie;
