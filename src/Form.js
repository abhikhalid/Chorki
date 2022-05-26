import React,{useState, useEffect} from 'react'

import './Form.css'
import FlipMove from "react-flip-move";

import SendIcon from "@material-ui/icons/Send";

import { IconButton } from "@material-ui/core";

import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

import db from "./firebase";
// import firebase from 'firebase';

import firebase from "firebase/compat/app";

function Form() {


    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState("");

   
    


    const sendMessage = (event) => {
		//all the logic to send a message goes here

		event.preventDefault();

		db.collection("messages").add({
			message: input,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

        setInput("");
        
        
    };
    
 



    return (
        <div>

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
    )
}

export default Form
