import React, { useState, useEffect } from "react";

import { useHistory } from 'react-router-dom';

import "./Subscription.css";

function Subscription(props) {

	const [monthly, setMonthly] = useState(true);

	const [halfYearly, setHalfYearly] = useState(false);
	
	const [yearly, setYearly] = useState(false);

	const [yearlyPlus,setYearlyPlus] = useState(false);
	
	let history = useHistory();

	let masikBkash="https://payment.bkash.com/redirect/tokenized/?paymentID=TR0011E61635338352634&hash=iZeduTQgqWr_JCMMyILzU-7M(zqHxPo.NGkVRk9EYQpZFZJkNDt.9jfhUGti))*qHGk0cjrTT0y5kI!!r.oSF4*fs8jeKr6Gd_sb1635338352735&mode=0011&apiVersion=v1.2.0-beta"

	let halfYearlyBkash = "https://payment.bkash.com/redirect/tokenized/?paymentID=TR0011VQ1635328958843&hash=x6VODQ-tfPgKyLu0PPN6H-rMlAsKgxVWgv6M7(O_fpun5Ko_DI-_3uTWA20CmvHo14MEkQdiWH5JE3syQzzL7WRUn2WM95JDP4N_1635328959026&mode=0011&apiVersion=v1.2.0-beta";

	  


	let yearlyBkash = "https://payment.bkash.com/redirect/tokenized/?paymentID=TR00113S1635329001090&hash=c12DybyaB*!hRQiv53p!NWDsfr8a50opP9-CR_aalglVYA)_ukTDsF.dipiBulsD8fo!ZDy.M)MBprAU6xY!4!Ua-52v2y8rO4.)1635329001136&mode=0011&apiVersion=v1.2.0-beta";

	let yearlyPlusPayment = "https://payment.bkash.com/redirect/tokenized/?paymentID=TR00114Y1635329039507&hash=BPZytNLwT1v1XsfcIkyM18fMX54_el*XscwUHPP9HjTKPIz_yP_3Z)wod7ZXL2m7wGx(-5sB*n_YptbZcTQOKeCxkftAVd-iUku-1635329039560&mode=0011&apiVersion=v1.2.0-beta";

	let paymenttoBkash;

	var selectedValue;

	function onChangeHandler(event)
	{

		 selectedValue = event.target.value;

		

		if (selectedValue == "30 days Starter")
		{
			setMonthly(true);
			setHalfYearly(false);
			setYearly(false);
			setYearlyPlus(false);

			paymenttoBkash = masikBkash;



		

		}
		else if (selectedValue == "Half Yearly")
		{
			setMonthly(false);
			setHalfYearly(true);
			setYearly(false);
			setYearlyPlus(false);

			paymenttoBkash = halfYearlyBkash;

			




		}
		else if (selectedValue == "Yearly")
		{
			setMonthly(false);
			setHalfYearly(false);
			setYearly(true);
			setYearlyPlus(false);

			paymenttoBkash = yearlyBkash;


		

		}
		else if (selectedValue == "Yearly Plus")
		{
			setMonthly(false);
			setHalfYearly(false);
			setYearly(false);
			setYearlyPlus(true);

			paymenttoBkash = yearlyPlusPayment;


			 

		}
		

	}

	







	function deactivePaymentModal() {
		props.deactiveSubscriptionModel();
	}

	return (
		<div className="popup-view">
			<h2 className="subscribeHeader">Subscribe</h2>

			<div className="changeSubscription">
				<img
					onClick={deactivePaymentModal}
					src="/closebtn.png"
					className="closeBtn"
				/>

				<div className="divisionAbhiContainer">
					<div className="divisionAbhi1">
						<div
							className="planForm"
							style={{
								backgroundImage:
									"linear-gradient(130deg, rgb(249, 159, 0) 24%, rgb(255, 0, 85) 96%)",
							}}
						>
							<div className="select-platform-select-container">
								<select onChange={e => onChangeHandler(e)} className="planSelect">
									<option style={{color: 'black'}} selected>30 days Starter</option>
									<option style={{color: 'black'}}>Half Yearly</option>
									<option style={{color: 'black'}}>Yearly</option>
									<option style={{color: 'black'}}>Yearly Plus</option>
								</select>
							</div>

							<div className={`price_feature_monthly ${monthly && "monthly"}`}>
								<h1 className="price">BDT 50 / 30days</h1>

								<div className="featureList">
									<div className="feature">
										<img src="/accept.png" className="paymentTickImage" />
										<p>Ad Free Premium Access for 30 days</p>
									</div>
									<div className="feature">
										<img src="/accept.png" className="paymentTickImage" />
										<p>Offline Download</p>
									</div>

									<div className="feature">
										<img src="/accept.png" className="paymentTickImage" />
										<p>4-Device Login</p>
									</div>

									<div className="feature">
										<img src="/accept.png" className="paymentTickImage" />
										<p>1 Simultaneous Stream</p>
									</div>
								</div>
							</div>
							{/* do this for the rest of the 3 selection */}

							<div className={`price_feature_halfYearly ${halfYearly && "halfYearly"}`}>
								<h1 className="price">BDT 299 / 6months</h1>

								<div className="featureList">
									<div className="feature">
										<img src="/accept.png" className="paymentTickImage" />
										<p>Ad Free Premium Access for 30 days</p>
									</div>
									<div className="feature">
										<img src="/accept.png" className="paymentTickImage" />
										<p>Offline Download</p>
									</div>

									<div className="feature">
										<img src="/accept.png" className="paymentTickImage" />
										<p>4-Device Login</p>
									</div>

									<div className="feature">
										<img src="/accept.png" className="paymentTickImage" />
										<p>1 Simultaneous Stream</p>
									</div>
								</div>
							</div>

							<div className={`price_feature_yearly ${yearly && "yearly"}`}>
								<h1 className="price">BDT 499 / year</h1>

								<div className="featureList">
									<div className="feature">
										<img src="/accept.png" className="paymentTickImage" />
										<p>Ad Free Premium Access</p>
									</div>
									<div className="feature">
										<img src="/accept.png" className="paymentTickImage" />
										<p>Offline Download</p>
									</div>

									<div className="feature">
										<img src="/accept.png" className="paymentTickImage" />
										<p>5-Device Login</p>
									</div>

									<div className="feature">
										<img src="/accept.png" className="paymentTickImage" />
										<p>1 Simultaneous Stream</p>
									</div>
								</div>
							</div>
							<div className={`price_feature_yearly_plus ${yearlyPlus && "yearlyPlus"}`}>
								<h1 className="price">BDT 799 / year</h1>

								<div className="featureList">
									<div className="feature">
										<img src="/accept.png" className="paymentTickImage" />
										<p>Ad Free Premium Access</p>
									</div>
									<div className="feature">
										<img src="/accept.png" className="paymentTickImage" />
										<p>Offline Download</p>
									</div>

									<div className="feature">
										<img src="/accept.png" className="paymentTickImage" />
										<p>7-Device Login</p>
									</div>

									<div className="feature">
										<img src="/accept.png" className="paymentTickImage" />
										<p>2 Simultaneous Stream</p>
									</div>
								</div>
							</div>





						</div>
					</div>

					<div className="divisionAbhi2">
						<div className="promoContainer">
							<input placeholder="Add Promo" className="addPromoInput" />

							<button className="applyCodeBtn">Apply Code</button>
						</div>

						<p ckassName="bkashTitle" style={{ color: "white" }}>
							bKash
						</p>

						<div className="finalPayment">
							<div className="bkashPayment">
								<input type="radio" className="bkashRadio" value="Bkash" />

								<img src="/bkash.png" className="bkashImage" />
							</div>
						</div>

					
					<a href={masikBkash} style={{outline:'none',textDecoration:'none'}}>	
						<button
							style={{
								backgroundImage:
									"linear-gradient(130deg, rgb(249, 159, 0) 24%, rgb(255, 0, 85) 96%)",
							}}
							className={`checkOutButton1 ${ monthly && "monthlybtn1"}`}
							
						>
							CheckOut
						</button>
				    </a>		

						<a href={halfYearlyBkash} style={{outline:'none'}}>
						<button
							style={{
								backgroundImage:
									"linear-gradient(130deg, rgb(249, 159, 0) 24%, rgb(255, 0, 85) 96%)",
							}}
							className={`checkOutButton2 ${ halfYearly && "monthlybtn2"}`}
							
						>
							CheckOut
						</button>
						</a>

						<a href={yearlyBkash} style={{outline:'none'}}>
						<button
							style={{
								backgroundImage:
									"linear-gradient(130deg, rgb(249, 159, 0) 24%, rgb(255, 0, 85) 96%)",
							}}
							className={`checkOutButton3 ${ yearly && "monthlybtn3"}`}
							
						>
							CheckOut
						</button>
						</a>

						
						<a href={yearlyPlusPayment} style={{outline:'none'}}>
						<button
							style={{
								backgroundImage:
									"linear-gradient(130deg, rgb(249, 159, 0) 24%, rgb(255, 0, 85) 96%)",
							}}
							className={`checkOutButton4 ${ yearlyPlus && "monthlybtn4"}`}
							
						>
							CheckOut
						</button>
						</a>

					

						<div className="cardPayment">

							<p className="othercardTitle" style={{ color: "white", fontSize:'15px'}}>Cards/Mobile banking</p>

							<div className="cardSubPayment">
								{/* <input type="radio" className="otherRadio" value="Bkash" /> */}

								<img src="/otherPaymentGateway.jpg" className="otherImage" />
							</div>





						</div>




						
					</div>
				</div>
			</div>
		</div>
	);
}

export default Subscription;
