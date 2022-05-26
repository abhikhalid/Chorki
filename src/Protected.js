import React, { useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import axios from "axios";

function Protected(props) {

    let Cmp = props.Cmp;

    const history = useHistory();

    useEffect(() => {

        // get_auth_user();

        // check_page_access(); 

        

    }, [])

    const check_page_access = async() =>{

        const access_token = localStorage.getItem('access_token');

        if(localStorage.getItem('is_login')==0 || localStorage.getItem('is_login')==null || access_token==null ){

            // toast.error("Invalid page access!"); 

            // authCtx.logout();       
            localStorage.clear();  
            history.push('/');  
        }
        else if(localStorage.getItem('email_verify')!=1){
            // toast.info('Vefiry your email address'); 
        }
        else{
            // toast.info('Email already verified!'); 
            history.push('/');
        }
    } 
    
    const get_auth_user = async() =>{

        const access_token = localStorage.getItem('access_token');

        if(localStorage.getItem('is_login')==0 || localStorage.getItem('is_login')==null || access_token==null ){
            // toast.error("Invalid page access!");

             console.log("Invalid page access!");
            // alert("Invalid page access!");
              
            localStorage.clear();   

            history.push('/verifyEmail');
            
        }else{
            // my_gigs();
            
            const res = await axios.post('http://127.0.0.1:8000/api/auth/me?token='+access_token)
            .then((res)=>{
                if(res.data.status === 200){ 
    
                    // setUser(res.data.user);

                    if(res.data.user.email_verified_at==null){
                        
                         history.push('/verifyEmail');

                        // alert("Please verify your email!");
                    }

                }else{
                    // authCtx.logout();
                    localStorage.clear();
    
                    history.push('/login');
                } 
            })
            .catch((r)=>{

                localStorage.clear();
    
                history.push('/login'); 
     
            })
        }

        
    }


    useEffect(() => {

        if (!localStorage.getItem("user-info"))
        {
            history.push("/login");
        }


    },[])

    return (
        <div>

            <Cmp/>

            
        </div>
    )
}

export default Protected
