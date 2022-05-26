import React,{useState,useEffect} from "react";

import "./UserProfile.css";

import Footer from "./Footer";
import Nav from "./Nav";

import Subscription from './Subscription'

import UserProfileChangePassPopUp from './UserProfileChangePassPopUp'
import UserProfileChangeName from "./UserProfileChangeName";

function UserProfile() {

    const [passModalActive, setPassModalActive] = useState(false);

    const [mameModalActive, setNameModalActive] = useState(false);


	const [subscribeNowBtnActive, setSubscribeNowBtnActive] = useState(false);
	

	const obj = JSON.parse(localStorage.getItem("user-info"));



    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])



    function activePasswordModal()
    {
        setPassModalActive(true);

    }

    function deactivePasswordModal()
    {
        setPassModalActive(false);

    }

    function activeNameModal()
    {
        setNameModalActive(true);
    }

    function deactiveNameModal()
    {
        setNameModalActive(false);

    }

    function subscribeBtnOnClick()
    {
        setSubscribeNowBtnActive(true);
    }

    function deactiveSubscriptionModel()
    {
        setSubscribeNowBtnActive(false);   
    }




	return (
        <>
            <Nav />

            <br/>
            
            

            
            

		<div className="fullProfile">
			<div className="profile1">
				<h1 className="settingsHeading">SETTINGS</h1>

				<div className="divisionContainer">
					<div className="division1">
						<div className="accountForm">
							<div className="accountSubForm"></div>
							<h1 className="login__title">Account Info</h1>

							<div className="login__group">
								<input
									className="login__group__input"
									type="text"
									value={obj.name}
									// onChange={(e) => setEmail(e.target.value)}
                                    required="true"
                                    
								/>

                                <img className="pencil" src="/pencil2.png" onClick={activeNameModal}  />

								<label className="login__group__label">Name</label>
							</div>
							<div className="login__group">
								<input
									className="login__group__input "
									type="text"
									value="01629069673"
									// onChange={(e) => setEmail(e.target.value)}
									required="true"
                                />
                                <img className="pencil" src="/pencil2.png" />

								<label className="login__group__label">Phone Number</label>
							</div>
							<div className="login__group">
								<input
									className="login__group__input"
									type="text"
									value={obj.email}
									// onChange={(e) => setEmail(e.target.value)}
									required="true"
                                />
                                
                                <img className="pencil" src="/pencil2.png" />

								<label className="login__group__label">Email</label>
							</div>

							<div className="login__group ">
								<input
									className="login__group__input"
									type="password"
									value={obj.password}
									// onChange={(e) => setEmail(e.target.value)}
									required="true"
								/>

                            <img className="pencil" src="/pencil2.png" onClick={activePasswordModal} />
                                
								<label className="login__group__label">Password</label>
							</div>

							<div>
								<input
									type="checkbox"
									id="vehicle1"
									name="vehicle1"
									value="Bike"
								/>
								<label for="vehicle1" className="sendMeMail">
									Please send me email and other marketing communications
									regarding my account and other products from Chorki.
                                </label>
                                    
								<br />
							</div>
						</div>

						<div className="deviceManangement">
							<div className="deviceForm">
								<h1 className="login__title">Device Manangement</h1>

								<div className="login__group">
									<input
										className="login__group__input"
										type="text"
										 value="2"
										// onChange={(e) => setEmail(e.target.value)}
										required="true"
									/>

									<label className="login__group__label">Num Devices</label>
								</div>
								<div className="login__group">
									<input
										className="login__group__input"
										type="text"
										// value={email}
										// onChange={(e) => setEmail(e.target.value)}
										required="true"
									/>

									<label className="login__group__label">Active</label>
								</div>
							</div>
						</div>
					</div>

					<div className="division2">
						<div className="purchaseForm">
							<h1 className="login__title">Purchases</h1>

							<p className="plan">Active Plan</p>
							<p className="plan">Not Started</p>

							<button className="subscribeBtn" onClick={subscribeBtnOnClick} >Subscribe Now</button>
						</div>
						<div className="referralsForm">
							<h1 className="login__title">Referrals</h1>

							<p className="plan">Status of Referred firends</p>
							<p className="plan">Refer more friends</p>
						</div>

						<div className="emailForm">
							<p className="helpInfo">
								Email us at{" "}
								<a className="helpLink" href="mailto:support@chorki.com">
									support@chorki.com
								</a>{" "}
								to speak to a customer service representative.
							</p>
						</div>
					</div>
				</div>
			</div>
            </div>


            {
                passModalActive && <UserProfileChangePassPopUp deactive={deactivePasswordModal}/>
            }

            {
                mameModalActive && <UserProfileChangeName deactiveNameModal={deactiveNameModal} />
            }

            {
                subscribeNowBtnActive && <Subscription deactiveSubscriptionModel ={deactiveSubscriptionModel} />
            }




            <Footer />
            
            </>  
	);
}

export default UserProfile;
