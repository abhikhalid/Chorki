import React, {useState, useEffect,useContext} from "react";
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

import SectionTitle from '../component/SectionTitle';
import Banner from "../component/Banner";

import '../App.scss';
import '../style/EmailVerify.scss';

import { ToastContainer, toast,Zoom,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "../store/auth-context";

const EmailVerify = () => {

    const authCtx = useContext(AuthContext); 



    let history = useHistory();

    const [user, setUser] = useState({
        id:"",
        name: "",
        email: "",
        phone: "",
        email_verified_at: "",
    });

    useEffect(()=>{
 
        check_page_access();  

    },[]);

    const check_page_access = async() =>{

        const access_token = localStorage.getItem('access_token');

        if(localStorage.getItem('is_login')==0 || localStorage.getItem('is_login')==null || access_token==null ){
            toast.error("Invalid page access!");
            authCtx.logout();

            localStorage.clear();

            history.push('/'); 
        }else{
            const res = await axios.post('http://127.0.0.1:8000/api/auth/me?token='+access_token);
 
            if(res.data.message == 'success'){ 
                setUser(res.data.user);
                
                if(res.data.user.email_verified_at!=null){
                    toast.success('Email already verified'); 
                    authCtx.login(access_token);
                    history.push('/');
                }
            }
            else{
                history.push('/'); 
                toast.error("Invalid!"); 
            }
        }
    } 



    return (
        <div>
            <Banner title="Verify your email!"></Banner> 
            <section className="email_verify_section">
                <div className="container">
                    <div className="row row_item_1">
                        <div className="row_item">
                            <div className="verify_message_area">
                                <h3>You can't access your account without verify email.</h3>
                                
                                <h4>We send a verification link in your signup email: <span>{user.email}</span> </h4>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EmailVerify;