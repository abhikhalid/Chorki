import React from 'react'
import {Link, useHistory } from 'react-router-dom'

import './ChatUser.css'

let posterUrl = "http://127.0.0.1:8000/";

function ChatUser({ chat }) {
    
    // console.log(chat);

    let profileImage = posterUrl + chat.customerProfileImage;

    return (
        <div className="userContent">
            
            <Link to={"chatWithAdminAndUser/"+chat.id}>
                        <div className="content">

                            <img src={profileImage} alt="" />

                            <div className="details">
                        
                        <span>{chat.customerName}</span>

                        <p>{chat.customerMessage}</p>

                        </div>
        
                        </div>

                        <div className="status-dot">

                    {/* put circle image here */}

                    {
                        chat.activestatus ==1 &&  <img className="activeDot" src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png" />
                    }

                    {/* <img className="activeDot" src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png" /> */}
                 
                    
                    {

                        chat.activestatus ==0 &&  <img className="activeDot" src="https://upload.wikimedia.org/wikipedia/commons/8/80/Offline_dot.png" />
                    }



                        </div>

            </Link>
            
        </div>
    )
}

export default ChatUser
