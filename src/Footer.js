import React from 'react'

import './Footer.css'

import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
             <hr className="horizonal-line"/>
        <div className="footerContainer">

            <div className="footer1">

            <Link style={{ color: 'inherit', textDecoration: 'inherit', marginRight: '60px'}} to="/">
                    <img className="footerBrandLogo" src="/chorkibrandlogo.png" />
            </Link>    
                    
                    <div className="footerSocialMedia">

                        <a href="https://www.facebook.com/ChorkiOfficial/" target="_blank"> <img src="/facebook.png" className="socialIcon" /> </a>

                        <a href="https://www.instagram.com/chorkiofficial/" target="_blank">
                        <img src="/instagram.png" className="socialIcon"/>
                        </a>

                        <a href="https://www.youtube.com/channel/UCot6_4CL7KESSNiDcjeBFCw"
                        target="_blank">
                        <img src="/youtube.png" className="socialIcon"/>
                        </a>

                        <a href="https://twitter.com/chorkishow"
                        target="_blank">
                        <img src="/twitter.png" className="socialIcon"/>
                        </a>

                    </div>

                    <p style={{ color: 'white'}}>Copyright @2021 Chorki All rights reserved.</p>

                </div>
                
            <div className="footer2">

                    <div className="aboutSection">

                    <Link className={"link123"} style={{  textDecoration: 'inherit', marginRight: '60px'}} to="/aboutUs">
                        <h3>About us</h3>
                      </Link>


                       <Link className={"link123"} style={{  textDecoration: 'inherit', marginRight: '60px'}} to="/termsOfUse"> 
                        <h3>Terms of Service</h3>
                        </Link> 



                        <Link className={"link123"} style={{  textDecoration: 'inherit', marginRight: '60px'}} to="/privacyPolicy">
                        <h3>Privacy Policy</h3>
                      </Link>

                       
                      
                        <a className={"link123"} style={{ textDecoration: 'inherit', marginRight: '60px' }} href="mailto:support@chorki.com" target="_blank">  <h3>Contact Us</h3></a>
                        
                     <Link className={"link123"} style={{  textDecoration: 'inherit', marginRight: '60px'}} to="/faq">
                        <h3>FAQ</h3>
                      </Link>
                        
                       

                    </div>

                    <div className="appleIcon">
                        <img src="/apple_tv.png" className="socialIcon2" />
                        
                        <a href="https://play.google.com/store/apps/details?id=com.prothomalo&hl=en&gl=US" target="_blank">
                        <img src="/googlePlay.png" className="socialIcon2" />
                        </a>
                        
                        <a href="https://apps.apple.com/eg/app/chorki/id1543140698"  target="_blank">
                        <img src="/android_tv.png" className="socialIcon2" />
                        </a>
                        
                        <img src="/mi.png" className="socialIcon2"/>
                        <img src="/lgSmart.png" className="socialIcon2" />
                        <img src="/roku.png" className="socialIcon2" />
                        <img src="/firetv.png" className="socialIcon2"/>
                      
                        
                        <img src="/samsung.png" className="socialIcon2"/>
                       


                    </div>

                    
            </div>



            
            </div>
         </div>
        
    )
}

export default Footer
