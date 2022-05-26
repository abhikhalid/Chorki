import React, { useState } from "react";

import "./ThreeDot.css";

import db from "./firebase";
// import firebase from 'firebase';

import firebase from "firebase/compat/app";

import {
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@material-ui/core";

import AlertMessage from "./AlertMessage";

function ThreeDot({ movieName, id, comment,onThree }) {
	const [open, setOpen] = useState(false);

	const [input, setInput] = useState("");

	const [success, setSuccess] = useState(false);

    const [deletesuccess, setDeleteSuccess] = useState(false);


    const [report,setReport] = useState(false);

    const obj = JSON.parse(localStorage.getItem("user-info"));
    
   


	const handleClickOpen = () => {
        
        
      

         //write your code here
        setOpen(true);
       

        onThree();




	};

    const handleClose = () => {
        
        
        setOpen(false);
        onThree();
	};

	const [openn, setOpenn] = React.useState(false);

    const handleClickOpenn = () => {
        
   
        setOpenn(true);
        
        //write your code here

        onThree();

	};

	const handleClosen = () => {
        setOpenn(false);
        onThree();
	};

	function deleteComment() {
		db.collection(movieName).doc(id).delete();

		// alert("Comment deleted successfully!");

		setOpenn(false);
        onThree();

        setDeleteSuccess(true);
        
	}

	function updateComment() {
		db.collection(movieName).doc(id).set(
			{
				comment: input,
			},
			{ merge: true }
		);

		setOpen(false);

		// alert("Comment updated successfully!");

        setSuccess(true);
        onThree();
    }
    
    function setReportOnClick()
    {
        db.collection(movieName).doc(id).set(
			{
				report: comment.report+1,
			},
			{ merge: true }
        );
        
        setReport(true);
        

    }

	return (
		<>
			<Dialog
				open={openn}
				onClose={handleClosen}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{"Delete Comment"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Delete your comment permanently?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClosen}>CANCEL</Button>
					<Button onClick={deleteComment} autoFocus>
						DELETE
					</Button>
				</DialogActions>
			</Dialog>

			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Edit your comment</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Your comment will be visible to everyone. Please do not use any
						slang or you'll be banned.
					</DialogContentText>

					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="comment"
						type="text"
						fullWidth
						variant="standard"
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={updateComment}>Save</Button>
				</DialogActions>
			</Dialog>

			<div className="action">
			
				<div className="menu active">
					<ul>
					


                    {
                            (obj.id === comment.customerId) ? (
                            <>
                                <li onClick={(e) => setOpen(true)}>
                                <img src="/pencil.png" />
                                <a>Edit</a>
                            </li>
    
                            <div>
                                <li onClick={(e) => setOpenn(true)}>
                                    <img src="/bin.png" />
                                    <a>Delete </a>
                                </li>
                            </div>
                            </>

                            ): (

                                    <>
                                         <li onClick={setReportOnClick}>
                                            <img src="/redflag.png" />
                                            <a>Report </a>
                                        </li>


                                    </>
                                    
                                    
                            )
                                            
                            
                    }
                        







					</ul>
				</div>
			</div>

			{success && (
				<AlertMessage message="your comment has been edited successfully!" />
			)}

			{success &&
				setTimeout(() => {
					// console.log('Hello, World!')

					setSuccess(false);
				}, 3000)}

			{deletesuccess && (
				<AlertMessage message="your comment has been deleted successfully!" />
			)}

			{deletesuccess &&
				setTimeout(() => {
					// console.log('Hello, World!')

					setDeleteSuccess(false);
                }, 3000)}
            

            

            {report && (
                
				<AlertMessage message="Thank you. We'll take action if it breaks our community standards." />
            )}
            
           

            {report &&
                  
                   
                setTimeout(() => {
                    // console.log('Hello, World!')

                    onThree();
                    setReport(false);
                   
                }, 3000)
               
                
               }
              
            }
		</>
	);
}

export default ThreeDot;
