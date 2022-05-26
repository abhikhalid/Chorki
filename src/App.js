import "./App.css";
import Header from "./Header";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserList from "./UserList";
import Login from "./Login";
import Reigister from "./Reigister";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

import Protected from "./Protected";
import ChatWithAdmin from "./ChatWithAdmin";
import Chart from "./Chart";
import AddChartData from "./AddChartData";
import ChatUserList from "./ChatUserList";
import VerfiyEmail from "./VerfiyEmail";

import ResetPassword from "./ResetPassword";

import SetResetPassword from "./SetResetPassword"

import OTP from "./OTP";


function App() {
	return (
		<div className="App">
			{/* <h1>Let's Build Chorki Clone! 🚀</h1> */}

			<BrowserRouter>
        <Switch>
          
					<Route path="/otp">

						<OTP/>

					</Route>			
				

					<Route path="/login">
						<Login />
					</Route>

					<Route path="/register">
						<Reigister />
					</Route>
					
					<Route path="/verifyEmail">
						<VerfiyEmail/>
          			</Route>
          
        
					<Route path="/addMovie">
						<Protected Cmp={AddMovie} />
					</Route>

					<Route path="/viewchart">
						<Protected Cmp={Chart} />
					</Route>
					<Route path="/addchart">
						<Protected Cmp={AddChartData} />
					</Route>

					<Route path="/movieList">
						<Protected Cmp={MovieList} />
						
                </Route>
          
					<Route path="/chatWithAdmin">
						{/* <Protected Cmp={ChatWithAdmin} /> */}

						<Protected Cmp={ChatUserList} />

						
					</Route>

					<Route path="/chatWithAdminAndUser/:id">
						<Protected Cmp={ChatWithAdmin} />

						{/* <Protected Cmp={ChatUserList} /> */}
					</Route>

					<Route path="/resetPassword">
						{/* <Protected Cmp={ResetPassword} /> */}

						<ResetPassword />
					</Route>

					<Route path="/setresetPassword">
						{/* <Protected Cmp={ResetPassword} /> */}

						<SetResetPassword />
					</Route>


					<Route path='/reset-password-:email-:reset_token'>
						<SetResetPassword />
       				</Route>

					{/* <Route path="/updateMovie">
						<Protected Cmp={UpdateMovie} />
					</Route> */}

					<Route path="/">
						<Protected Cmp={UserList} />

						{/* <UserList /> */}
						
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
