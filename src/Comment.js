//Comment hole o eta asole  Comment List

import React, { useState, useEffect } from "react";

import CommentList from "./CommentList";

import "./Comment.css";

import db from "./firebase";
// import firebase from 'firebase';

import firebase from "firebase/compat/app";

let profileUrl = "http://127.0.0.1:8000/";

function Comment(props) {
	const [commentList, setComments] = useState([]);

	useEffect(() => {
		//run once when ChatWithAdmin Component loads

		db.collection(props.movieName)
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setComments(
					snapshot.docs.map((doc) => ({ id: doc.id, comment: doc.data() }))
				);
			});
	}, []);





	return (
		<div className="comments">
			
			



            
			{commentList.map((document) => (
                
                // console.log(document.id)
                

                 <CommentList id={document.id} comment={document.comment} movieName={props.movieName} />

			))}

		
		</div>
	);
}

export default Comment;
