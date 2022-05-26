import React, { useEffect } from "react";

import "./FAQ.css";
import FAQquestion from "./FAQquestion";
import Footer from "./Footer";
import Nav from "./Nav";

function FAQ() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Nav />

			<div className="aboutContainer">
				<h1 style={{ display: "hidden" }}>hello</h1>

				<div className="about">
                    <h1 className="heading1">Frequently Asked Questions</h1>
                    
                    <br/>
                    <br/>
                    <br/>

					<FAQquestion
						title="What is Chorki?"
						message="Chorki is a video streaming platform that offers Video on Demand. Chorki is available on both app and web."
					/>

					<FAQquestion
						title="How can I enjoy Chorki services?"
						message="Anyone can enjoy the service through subscription on Web at Chorki.com or on Chorki app by downloading it from Google Playstore or from Apple App Store."
					/>

					<FAQquestion
						title="Who is eligible for the service?
                        Anyone who has internet connection and/or has access to a computer, smart TV, or mobile phone is eligible for Chorki."

						message="Anyone who has internet connection and/or has access to a computer, smart TV, or mobile phone is eligible for Chorki."
					/>

					<FAQquestion
						title="On what devices is Chorki available?
"
						message="The Chorki Mobile application is currently available on all Android devices (minimum android version 4.4 and above) and iPhones (minimum iOS version 8 and above) and Chorki website can be used from any mobile or desktop based browser. Users can also enjoy Chorki on Android TV app, Amazon fire TV app, Samsung Smart TV App (for specified versions/models)."
					/>

					<FAQquestion
						title="What type of content is available on Chorki?
"
						message="Chorki offers a wide variety of video contents such as Movies, Series, Shows, Non-Fiction Contents, Music Video, Chorki Original Contents and many more Bangla and foreign language video contents."
					/>

					<FAQquestion
						title="Is Chorki available outside of Bangladesh?
"
						message="Yes! Chorki is available to users worldwide. Anyone with a successful subscription can enjoy all the Chorki contents and users with no active subscription plan can enjoy the free/open contents on Chorki platform."
					/>

					<FAQquestion
						title="Why do I see 'This content is not available in your region?'
"
						message="Certain Chorki content is not available in certain regions due to geographical restrictions from the content publishers or due to the legal restrictions of that country. If you think you are seeing this error unexpectedly, please send us a mail at support@chorki.com, and we will get back to you as soon as we can."
					/>

					<FAQquestion
						title="Do I have to login to use Chorki?
"
						message="‘Log in’ is not mandatory to watch certain free contents on Chorki. But by logging in you will enjoy certain special features."
					/>

					<FAQquestion
						title="What benefit do I get out of logging in?"
						message="Logging in to Chorki and subscribing to a plan will enable access to all the eligible Chorki content. It also comes with great features like watch history, resume play, offline download, and your own favourite playlist. It also helps to detect if the user is eligible to watch Chorki premium contents."
					/>

					<FAQquestion
						title="Do I have to subscribe to a plan to use Chorki?
"
						message="To watch our free contents, No! To watch premium contents, Yes! After successfully logging in, you need to subscribe to one of the available plans to watch Chorki premium content."
					/>

					<FAQquestion
						title="Is there any charge for subscription?"
						message="The subscription charge will depend on your selected plan. There are multiple plans available for your convenience. Each subscription has a different charge/price tag related to it which is mentioned in the description. It is possible that due to promotional reasons, subscription charges will be waived or reduced for certain time or location."
					/>

					<FAQquestion
						title="How do I get registered or signup?"
						message="If you are a new user, you can register yourself by creating an account.
                            Step 1: Click on the login button
                            Step 2: Go to the the signup tab
                            Step 3: Enter your Name, Email and create a new password.
                            Step 4: Click on the sign up button.

                            After sucessful signup you will be automatically logged in and get a confirmation email.
                            Or you can login with your social media account (facebook, google,apple ID) or phone number."
					/>

					

					<FAQquestion
						title="How do I log out?"
						message="Whether the account was Login with email, social media account or mobile number, you can log out just by clicking the “Log Out” button from the settings or from your profile page."
					/>

					

					<FAQquestion
						title="How do I subscribe?"
						message="If you are logged in successfully, you will be automatically redirected to the subscription page to select one of the available subscription plans. Or you can also subscribe by clicking the “subscribe now” button.
                        Step 1: Login with your credentials (Email ID/ phone number and password)
                        Step 2: Select your desired subscription plan for the options
                        Step 3: Choose your desired payment method
                        Step 4: Complete the payment by providing necessary information
                        You will receive a confirmation email if the subscription process is successful."
					/>

					<FAQquestion
						title="How do I unsubscribe?"
						message="You can unsubscribe anytime from your Profile page. You will no longer have an active subscription after the current subscription period ends. You can subscribe again following the process described above."
					/>

					<FAQquestion
						title="What is an Account Page?"
						message="An account page displays the account holder's name, registration information and other details. Subscribed users can view their subscription details."
					/>

					<FAQquestion
						title="Why am I facing issues playing videos?"
						message="Please check your internet connection. You can also send a screenshot to clarify the issue to support@chorki.com"
					/>

					

				

					<FAQquestion
						title="Can I watch videos on TV with Chromecast?"
						message="Currently this feature is supported on selected devices. To check for availability, look for the chromecast icon at the top right corner of the video."
					/>

					<FAQquestion
						title="On how many devices can I log into the same account to watch Chorki?
"
						message="Chorki can be streamed on up to specified number of devices based on your subscription plan with the same account."
					/>

					<FAQquestion
						title="How can I pay for Chorki?"
						message="You can pay for your Chorki subscription through mobile payment options such as Bkash, Rocket, Nagad etc. For Credit Cards, we accept international Visa, MasterCard, and American Express cards."
					/>

					<FAQquestion
						title="Are there any additional fees associated with the subscription fee?"
						message="Chorki only charges for the mentioned subscription fee, which may or may not include local tax depending on your location. Some financial institutions may add additional transaction fees for foreign transactions. To learn more about their policy please contact the respective financial institution."
					/>

					<FAQquestion
						title="Why am I seeing a message that there’s a problem with my payment method?"
						message="In cases when the financial institution rejects a request for monthly charge this message will be shown to you. In order to fix this, please contact your financial institution regarding the matter or go to pay options in Chorki to change the payment method. We will verify the new information, and notify you as soon as the payment is successful."
					/>

					<FAQquestion
						title="How do I see my Chorki billing history or monthly invoice?"
						message="All of your previous transactions can be viewed in Chorki. In order to view the payment history please visit the profile page."
					/>

					<FAQquestion
						title="Can I create a shared account on Chorki?"
						message="Creating multiple accounts is not possible in Chorki. However, Chorki allows login for up to specified number of devices based on your subscription plan at a time from the same account."
					/>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default FAQ;
