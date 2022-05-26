import logo from "./logo.svg";
import "./App.css";

import Nav from "./Nav";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import MovieDetails from "./MovieDetails";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Protected from "./Protected";

import WatchLaterList from "./WatchLaterList";
import TvShows from "./TvShows";
import Movies from "./Movies";

import ChatWithAdmin from "./ChatWithAdmin";
import SearchMovieDetails from "./SearchMovieDetails";
import SearchMovieNotFound from "./SearchMovieNotFound";
import MyProfile from "./MyProfile";
import AboutUs from "./AboutUs";

import PrivacyPolicy from "./PrivacyPolicy"
import TermsOfUse from "./TermsOfUse";
import FAQ from "./FAQ";
import UserProfile from "./UserProfile";
import UserProfileChangePassPopUp from "./UserProfileChangePassPopUp";

import OTP from "./OTP"

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Switch>
					

					<Route path="/movieDetails/:movieName/:movieDescription/:moviePoster/:movieUrl/:trailer">
						{/* <Protected Cmp={MovieDetails} /> */}

						<MovieDetails />
					</Route>

					<Route path="/login">
						<Login />
					</Route>

					<Route path="/aboutUs">
						<AboutUs/>
					</Route>

					<Route path="/privacyPolicy">
						<PrivacyPolicy/>
					</Route>

					<Route path="/termsOfUse">
						
						<TermsOfUse/>

					</Route>

					<Route path="/faq">
						
						<FAQ/>	

					</Route>

					<Route path="/userProfile">
						
						<UserProfile/>	

					</Route>

					<Route path="/userProfileChangePassPopUpView">
						
						<UserProfileChangePassPopUp/>	

					</Route>






					<Route path="/register">
						<Register />
					</Route>

					<Route exact path="/">
						<Protected Cmp={Home} />
						{/* <Home/> */}
					</Route>

					<Route exact path="/otp">
						<Protected Cmp={OTP} />
						{/* <Home/> */}
					</Route>

					<Route path="/watchLaterList">
						<Protected Cmp={WatchLaterList} />

						{/* <WatchLaterList/> */}
					</Route>

					<Route path="/tvshows">
						<Protected Cmp={TvShows} />

						{/* <TvShows/> */}
					</Route>

					<Route path="/movies">
						<Protected Cmp={Movies} />

						{/* <Movies/> */}
					</Route>

				

					<Route path="/chatWithAdmin">

						<Protected Cmp={ChatWithAdmin} />

						
					</Route>

					<Route path="/searchMovie/:id">

						<Protected Cmp={SearchMovieDetails} />

						
					</Route>

					<Route path="/searchMovie/">

						<Protected Cmp={SearchMovieNotFound} />

						
					</Route>

					<Route path="/myprofile">

						<Protected Cmp={MyProfile} />

						
					</Route>




				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
