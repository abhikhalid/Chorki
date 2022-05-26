import React, { useState, useEffect } from "react";
import ChatUser from "./ChatUser";
import ChatUser2 from "./ChatUser2";

import "./ChatUserList.css";
import Header from "./Header";

import { Link, useHistory } from "react-router-dom";


let posterUrl = "http://127.0.0.1:8000/";

function ChatUserList() {
	const [chatList, setChatList] = useState([]);

	const history = useHistory();

	//search data (user list - searched by admin)

	const [data, setData] = useState([]); // here search result will store

	const [input, setInput] = useState("");

	const [searchClicked, setSearchClicked] = useState(false);

	//serach data end (user list - searched by admin)

	const obj = JSON.parse(localStorage.getItem("user-info"));

	let profileImage = posterUrl + obj.profileImage;

	useEffect(async () => {
		let result = await fetch(
			"http://127.0.0.1:8000/api/getCustomerAdminChatHead"
		);

		result = await result.json();

		setChatList(result);

		// console.log(result);
	}, []);

	async function search(key) {
		//console.warn(key);

		setSearchClicked(!searchClicked);

		let result = await fetch(
			"http://127.0.0.1:8000/api/searchUserFromChatList/" + key
		);

		result = await result.json();

		//console.warn(result);

		setData(result);
	}
	// console.log(searchClicked);

	
	async function logOut()
	{
			 localStorage.clear();
			 history.push("/register");
	 }
 

	return (
		<>
			<Header />

			<div className="wrapper">
				<section className="users">
					<header>
						<div className="content">
							<img
								src="/mahbub_san.png"
								alt=""
							/>

							<div className="details">
								<span>{obj.name}</span>

								<p style={{ color: "black", fontWeight: "20px" }}>Active Now</p>
							</div>
						</div>

						<a  className="logout" onClick={logOut}>
							Logout
						</a>
					</header>

					<div className="search">
						<span className="text">Select an user to start chat</span>

						<input
							type="text"
							onChange={(e) => setInput(e.target.value)}
							placeholder="Enter name to search.."
						/>

                        <img
                            disabled={!input}
							className="searchIcon"
							src="/search.png"
							onClick={(e) => search(input)}
                        />
                        
					</div>

					<div className={`users-list ${searchClicked && "user-hidden"}`}>
						
                        {chatList.map((chat) => (

                            <ChatUser chat={chat} />
                            
                        ))}
                        

                    </div>

                    <div className={`users-list2 ${searchClicked && "user-show"}`}>

                        {
                            data.map((chat) => (

                                <ChatUser2 chat={chat} />
                                

                            ))}

                    </div>
                    



				</section>
			</div>
		</>
	);
}

export default ChatUserList;
