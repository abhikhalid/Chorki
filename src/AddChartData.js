import React,{useState} from 'react'

import './AddChartData.css'

import Header from './Header'


function AddChartData() {


    //For Line, Bar and Area Chart

    const [monthName, setMonthName] = useState("");
    const [yearName, setYearName] = useState("");
    const [monthlyNewUser, setMonthlyNewUser] = useState("");
    const [monthLostUser, setMonthlyLostUser] = useState("");
    const [yearlyNewUser, setYearlyNewUser] = useState("");
    const [yearlyLostUser, setYearlyLostUser] = useState("");

    //for Pie Chart

    const [countryName, setCountryName] = useState("");
    const [noOfUser, setNoOfUser] = useState("");
  
    //for scatter chart

    const [subscriptionfee, setSubscriptionFee] = useState("");
	const [userWithSubscriptionFee, setUserWithSubscriptionFee] = useState("");
	
	const [chartAlert, setChartAlert] = useState(false);


    
   async function addLineBarAreaChartData()
    {
        let item = { monthName, yearName, monthlyNewUser, monthLostUser, yearlyNewUser, yearlyLostUser };

        let result = await fetch("http://127.0.0.1:8000/api/addLineBarAreaChartData", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        result = await result.json();

        alert("Data saved successfully!");
        
    }

    async function addDataForPieChart()
    {
        let item = {countryName,noOfUser};

        let result = await fetch("http://127.0.0.1:8000/api/addPieChartData", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        result = await result.json();

        alert("Data saved successfully!");

    }

    async function addScatterChartData()
    {
        let item = {subscriptionfee,userWithSubscriptionFee};

        let result = await fetch("http://127.0.0.1:8000/api/addScatterChartData", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

		result = await result.json();
		
		setChartAlert(true);

        alert("Data saved successfully!");

	
    }






    return (
        <div>
            
            <Header />
            
            <br />

            {/* Add Data for Line, Bar and Area Chart */}
            
            <section class="signup">
				<div class="container">
					<div class="signup-content">
						<div class="signup-form">
							<h2 class="form-title">Add Data for Line, Bar and Area Chart</h2>
							<form  class="register-form" >
								<div class="form-group">
								
									<input
                                        type="text"
                                        onChange={(e) => setMonthName(e.target.value)}
                                        
										placeholder="Enter Month Name : "
									/>
								</div>
								<div class="form-group">
									
									<input
										type="text"
                                        onChange={(e) => setYearName(e.target.value)}

										placeholder="Enter Year Name : "
									/>
								</div>
								<div class="form-group">
									
									<input
										type="text"
                                        onChange={(e) => setMonthlyNewUser(e.target.value)}

										placeholder="Enter Monthly New User : "
									/>
								</div>
								
								<div class="form-group">
									
									<input
                                        type="text"
                                        onChange={(e) => setMonthlyLostUser(e.target.value)}
										
										placeholder="Enter Monthly Lost User : "
									/>
								</div>
								<div class="form-group">
									
									<input
										type="text"
                                        onChange={(e) => setYearlyNewUser(e.target.value)}

										placeholder="Enter Yearly New User : "
									/>
								</div>
								<div class="form-group">
									
									<input
										type="text"
                                        onChange={(e)=> setYearlyLostUser(e.target.value)}

										placeholder="Enter Yearly Lost User : "
									/>
                                </div>
                                
                                <div class="form-group form-button">
									<input
                                        type="submit"
                                        onClick={addLineBarAreaChartData}
										class="form-submit"
										value="Add Line/Bar/Area Chart Data to Database"
									/>
								</div>
							
								
							</form>
						</div>
						<div class="signup-image">
							<figure>
								<img
                                    src="https://snagfilms-a.akamaihd.net/dd078ff5-b16e-45e4-9723-501b56b9df0a/images/2021/08/12/1628770102384_unoloukikposter1200x16004thepcopy_3x4Images.jpg?impolicy=resize&w=712&h=949.3807999999999" width="350" height="200" 
									alt="chorki mobile app"
								/>
							</figure>
						</div>
					</div>
				</div>
			</section>
            

            {/* Add Data for Pie Chart */}
            
            <section class="signup">
				<div class="container">
					<div class="signup-content">
						<div class="signup-form">
							<h2 class="form-title">Add Data for Pie Chart</h2>
							<form  class="register-form" >
								<div class="form-group">
								
									<input
                                        type="text"
                                        onChange={(e) => setCountryName(e.target.value)}
                                        
										placeholder="Enter Country Name : "
									/>
								</div>
								<div class="form-group">
									
									<input
										type="text"
                                        onChange={(e) => setNoOfUser(e.target.value)}

										placeholder="Enter No. of User : "
									/>
								</div>
							
								
                                
                                <div class="form-group form-button">
									<input
                                        type="submit"
                                        onClick={addDataForPieChart}
										class="form-submit"
										value="Add Pie Chart Data to Database"
									/>
								</div>
							
								
							</form>
						</div>
						<div class="signup-image">
							<figure>
								<img
                                    src="https://jotodeal.com/wp-content/uploads/2021/08/Chorki-Amex-Offer.jpg" width="350" height="200" 
									alt="chorki mobile app"
								/>
							</figure>
						</div>
					</div>
				</div>
            </section>
            
              {/* Add Data for Scatter Chart */}
            
              <section class="signup">
				<div class="container">
					<div class="signup-content">
						<div class="signup-form">
							<h2 class="form-title">Add Data for Scatter Chart</h2>
							<form  class="register-form" >
								<div class="form-group">
								
									<input
                                        type="text"
                                        onChange={(e) => setSubscriptionFee(e.target.value)}
                                        
										placeholder="Enter Subscription  Fee : "
									/>
								</div>
								<div class="form-group">
									
									<input
										type="text"
                                        onChange={(e) => setUserWithSubscriptionFee(e.target.value)}

										placeholder="Enter No. of User With Subscription Fee : "
									/>
								</div>
							
								
                                
                                <div class="form-group form-button">
									<input
                                        type="submit"
                                        onClick={addScatterChartData}
										class="form-submit"
										value="Add Scatter Chart Data to Database"
									/>
								</div>
							
								
							</form>
						</div>
						<div class="signup-image">
							<figure>
								<img
                                    src="https://static.digit.in/OTT/v2/images/tr:w-1200/morichika-240481.jpg" width="350" height="200" 
									alt="chorki mobile app"
								/>
							</figure>
						</div>
					</div>
				</div>
			</section>
            
        </div>
    )
}

export default AddChartData
