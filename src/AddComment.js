import React, { useState, useEffect } from "react";

import "./AddComment.css";

import db from "./firebase";
// import firebase from 'firebase';

import firebase from "firebase/compat/app";

let profileUrl = "http://127.0.0.1:8000/";

function AddComment(props) {
    const [input, setInput] = useState("");

    const [focus, setFocus] = useState(false);
    
  

    let pic = profileUrl + props.profileImage;

    let customerId = props.customerId;
    let customerName = props.name;
    let profileImage = props.profileImage;
    let movieName = props.movieName;
    

    function cancelBtn()
    {
        setFocus(false);
        setInput("");

    }

    function addComment()
    {
      //all logic to add a comment goes here
      
        db.collection(movieName).add({
            customerId: customerId,
            customerName: customerName,
            profileImage: profileImage,
            comment: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            like: 0,
            dislike: 0,
        });

        

         setFocus(false);
         setInput("");  


       
    }



	return (
		<div className="boroBalti">
			<div className="balti">
				<div className="sotobalti">
					<img className="sotobaltiImage" src={pic} />

					<input
						className="text123"
						type="text"
                        value={input}
                        onFocus={(event)=>setFocus(true)}
						onChange={(event) => setInput(event.target.value)}
						placeholder="Add a public comment..."
					/>
				</div>

                <div className={`btnContainer ${focus && "abhi"}`}>
				
                    <div className="commentBtnBalti">

                    <button onClick={cancelBtn} className="btn123" type="button" name="button" id="cancel">
						CANCEL
					</button>

					<button
						disabled={!input}
						className={`btn123 ${input && "abc"}`}
						type="button"
						name="button"
                        id="comment"
                        onClick={addComment}
					>
						COMMENT
                        </button>
                    </div>   
				</div>
			</div>
		</div>
	);
}

export default AddComment;
