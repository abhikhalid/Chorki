//CommentList hole o eta asole single commment

import React, { useState, useEffect } from "react";

import "./CommentList.css";


import db from "./firebase";
// import firebase from 'firebase';

import firebase from "firebase/compat/app";

import ThreeDot from './ThreeDot';


let profileUrl = "http://127.0.0.1:8000/";

function CommentList({id, comment, movieName }) {


    const [likeVisible, setLikeVisible] = useState(false);
    const [dislikeVisible, setDislikeVisible] = useState(false);

    const [threeDot, setThreeDot] = useState(false);


    


    useEffect(() => {

        {comment.like > 0 && setLikeVisible(true)}
        {comment.dislike>0 && setDislikeVisible(true)}


    }, [comment.like,comment.dislike]);


    
    let profilePicture = profileUrl + comment.profileImage;



    let myDate = new Date(comment.timestamp * 1000);

   

    function setThree()
    {
        setThreeDot(false);
    }

    function threeDotToggle()
    {
        if (threeDot == true)
        {
            setThreeDot(false);
            return;
        }

        setThreeDot(true);
        // console.log(threeDot);
    }

   
    function getMonth(myDate)
    {
        if (myDate.getMonth() == 0) return "January";
       else if (myDate.getMonth() == 1) return "February";
       else if (myDate.getMonth() == 2) return "March";
       else if (myDate.getMonth() == 3) return "April";
       else if (myDate.getMonth() == 4) return "May";
       else if (myDate.getMonth() == 5) return "June";
       else if (myDate.getMonth() == 6) return "July";
       else if (myDate.getMonth() == 7) return "August";
       else if (myDate.getMonth() == 8) return "September";
       else if (myDate.getMonth() == 9) return "October";
       else if (myDate.getMonth() == 10) return "November";
       else if (myDate.getMonth() == 11) return "December";
    }
   
    
    // console.log(myDate.getMonth());

    function setLikeOnComment()
    {
       
            db.collection(movieName).doc(id).set({

                like: comment.like + 1
                 
             
            }, { merge: true });

        
            
        // console.log(id);
        

    }

    function setDisLikeOnComment()
    {
        db.collection(movieName).doc(id).set({

            dislike : comment.dislike+1
             
         
         },{merge: true});

    }

	return (
		<>
			<div className="comment">
				<div className="comment-image">
					<img src={profilePicture} alt="User Avatar"></img>
				</div>

                <div className="comment-body">
                    <div class="comment_body">

                        

                        <div className="comment-info">{comment.customerName}</div>
                        
                        <p class="date">{myDate.getDate()} {getMonth(myDate)}, {myDate.getUTCFullYear() - 1969}</p>
                        

                     
                        <img onClick={threeDotToggle} className="threedot" src="/more.png" />
                            
                        {threeDot && <ThreeDot id={id} movieName={movieName} comment={comment} onThree={setThree} />
                        }
                        
                  
                        
                        

                    </div>    
                    
                    

					<p class="description1">
						{comment.comment}
					</p>
                </div>
                
             



            </div>
            
            <div className="reactBtn">

            <div class="tooltip">   
                    <img onClick={setLikeOnComment} className="likeBtn" src="/like.png" />
                    <p className="like_dislike "> {likeVisible && comment.like} </p>

                    <span class="tooltiptext">Like</span>    
                    
            </div>       

            <div class="tooltip">  

                    <img onClick={setDisLikeOnComment} className="dislikeBtn" src="/dislike.png" />
                    <p className="like_dislike"> {dislikeVisible && comment.dislike} </p>

                    <span class="tooltiptext">Dislike</span>    
                    

             </div>       

            </div>

            
            </>

		
	);
}

export default CommentList;
