import React, { useState, useEffect, useRef } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

import Nav from "./Nav";
import "./ChatWithAdmin.css";
import Message from "./Message";

import db from "./firebase";
// import firebase from 'firebase';

import firebase from "firebase/compat/app";

import FlipMove from "react-flip-move";

import SendIcon from "@material-ui/icons/Send";

import { IconButton } from "@material-ui/core";

function ChatWithAdmin() {


	

	const [input, setInput] = useState("");

	//  const [messages, setMessages] = useState(["hello", "hi", "WHats Up"]);

	const [messages, setMessages] = useState([]);

    const [username, setUsername] = useState("");
	const [id, setUserId] = useState("");
	
	const obj = JSON.parse(localStorage.getItem("user-info"));
    

      // auto scroll to buttom
      const messagesEndRef = useRef(null)

      const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
      }
    
      useEffect(scrollToBottom, [messages]);
  
      // auto scroll to buttom



	  useEffect(() => {
		//run once when ChatWithAdmin Component loads

		db.collection("messages")
			.orderBy("timestamp", "asc")
			.onSnapshot((snapshot) => {


				setMessages(
					snapshot.docs.map((doc) => ({ id: doc.id,   message: doc.data(), userid : doc.data().userid}))
				);
			});
	  }, []);
	

	useEffect(() => {
		// setUsername(prompt("Please enter your name : "));

        const obj = JSON.parse(localStorage.getItem("user-info"));

        
		setUsername(obj.name);
		setUserId(obj.id);
	}, []);

	// console.log(input);
	// console.log(messages);

	async function sendMessageToMySqlDatabase(item)
	{
		let result = await fetch("http://127.0.0.1:8000/api/customerChatList", {
			
			method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },	
		});

		result = await result.json();

	}


    const sendMessage = (event) => {
		//all the logic to send a message goes here

		event.preventDefault();

		//write to mysql database( to show chatlist)

		let customerId = obj.id;
		let customerName = obj.name;
		let custoemrEmail = obj.email;
		let customerProfileImage = obj.profileImage;
		let customerMessage = input;

		let item = { customerId, customerName, custoemrEmail, customerProfileImage, customerMessage };
		
		sendMessageToMySqlDatabase(item);




		//write to firebase ( send message to admin)

		db.collection("messages").add({
			message: input,
			userid: id,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput("");
	};

	return (
		<div>
			
            <Nav/>

			<br />
			<br />

			<div className="table-container2">
				<img
					src="https://thumbs.dreamstime.com/b/customer-support-service-agent-headset-flat-vector-icon-design-designs-153069368.jpg"
					width="150"
					height="150"
				/>
				<h1>Chat with Admin 💬 </h1>
				<h2 className="welcomeUser">Welcome {username} </h2>

			

                <div>
					<FlipMove>
						
						{/* {messages.map(({ id, message }) => (
						
						
						<Message key={id} username={username} message={message} />
						))} */}

				{messages.map(({ id, message, userid }) => (
					  
					  obj.id == userid ?
                
					  <Message key={userid} username={username} message={message}
					  urlId={obj.id}/>
					 :
						null
						
						  
						
						// <Message key={id} username={username}  message={message}  />
						
						))
						
					}  
						






                </FlipMove>

                    <div ref={messagesEndRef} />
                    
                </div>
                

                <form className="app__form">
					<FormControl className="app__formControl">
						{/* <InputLabel>Enter a message...</InputLabel> */}
                        <Input
                            className="app__input"
                            placeholder='Enter a message...'
							value={input}
							onChange={(event) => setInput(event.target.value)}
						/>

                        <IconButton
                            className="app__iconButton"
							disabled={!input}
							variant="contained"
							color="primary"
							type="submit"
							onClick={sendMessage}
						>
							<SendIcon />
						</IconButton>

					

					</FormControl>
				</form>
                


			</div>
		</div>
	);
}

export default ChatWithAdmin;
