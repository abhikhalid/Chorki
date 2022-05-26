import React, { useState, useEffect, useRef } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";


import "./ChatWithAdmin.css";
import Message from "./Message";

import db from "./firebase";
// import firebase from 'firebase';

import firebase from "firebase/compat/app";

import FlipMove from "react-flip-move";

import SendIcon from "@material-ui/icons/Send";

import { IconButton } from "@material-ui/core";

import {withRouter} from "react-router";

import Header from "./Header";

function ChatWithAdmin(props) {

	// console.warn(props.match.params.id);

	const USERID = props.match.params.id;


	const [input, setInput] = useState("");

	//  const [messages, setMessages] = useState(["hello", "hi", "WHats Up"]);

	const [messages, setMessages] = useState([]);

    const [username, setUsername] = useState("");
	const [id, setUserId] = useState("");
	
	const [m, setM] = useState([]);
    
	

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

        
		setUsername("Admin");
		setUserId(obj.id);
	}, []);

	// console.log(input);
	
	//  console.log(messages[0].userid);

	
	
	const sendMessage = (event) => {
		//all the logic to send a message goes here

		event.preventDefault();

		db.collection("messages").add({
			message: input,
			userid:  props.match.params.id,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput("");
	};

	return (
		<div>
			
            <Header/>

			<br />
			<br />

			<div className="table-container2">
				<img
					src="https://thumbs.dreamstime.com/b/customer-support-service-agent-headset-flat-vector-icon-design-designs-153069368.jpg"
					width="150"
					height="150"
				/>
				<h1>Chat with Admin 💬 </h1>
				<h2>Welcome {username} </h2>

			

                <div>
					<FlipMove>

						{/* {
							messages
								// .filter(message => userid != null)
								.map(message => 
									
									 {1 &&(

										<Message key={message.userid} username={message.username} message={message.message}
										urlId={props.match.params.id}/>

									 )}

									
									)

						} */}

						{/* {messages.map((message, index) => (

							{USERID == messsage.userid && (
								   <Message key={message.userid} username={message.username} message={message.message}
									urlId={props.match.params.id}/>

							
							 )}
							


						))} */}


			{/* {messages.map((message, index) => (
                 USERID == message.userid ?
                
				 <Message key={message.userid} username={message.username} message={message.message}
				 urlId={props.match.params.id}/>
                :
					<h1>Hello World {message}</h1>
					

                ))}	
					 */}
						
						{messages.map(({ id, message, userid }) => (
					  
					  USERID == userid ?
                
					  <Message key={userid} username={username} message={message}
					  urlId={props.match.params.id}/>
					 :
						null
						
						  
						
						// <Message key={id} username={username}  message={message}  />
						
						))
						
					}  			

					   	

				
						
					  {/* {messages.map(({ id, message }) => (
						
						  
						
						<Message key={id} username={username}  message={message}  />
						))
						
					  }  */}
						
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

export default withRouter(ChatWithAdmin);
