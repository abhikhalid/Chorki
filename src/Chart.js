import React,{useState, useEffect} from "react";

import {PieChart, Pie, Sector, Cell, ScatterChart, Scatter, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

import Header from "./Header";

import "./Chart.css";

function Chart() {

   //for line,bar,area chart

    const [pdata, setpdata] = useState([]);

    useEffect(async () => {    

		let result = await fetch("http://127.0.0.1:8000/api/lineBarAreaChartDataFetch");

		result = await result.json();

        setpdata(result);
        
    }, []);

    
    


     // const pdata = [
     // 	{
     // 		name: "Python",
     // 		student: 13,
     // 		fees: 10,
     // 	},
     // 	{
     // 		name: "Javascript",
     // 		student: 15,
     // 		fees: 12,
     // 	},
     // 	{
     // 		name: "PHP",
     // 		student: 20,
     // 		fees: 10,
     // 	},
     // 	{
     // 		name: "Java",
     // 		student: 10,
     // 		fees: 5,
     // 	},
     // 	{
     // 		name: "C#",
     // 		student: 9,
     // 		fees: 4,
     // 	},
     // ];





    
 
            //for scatter chart
            // const data = [
            //     { x: 100, y: 200, z: 200 },
            //     { x: 120, y: 100, z: 260 },
            //     { x: 170, y: 300, z: 400 },
            //     { x: 140, y: 250, z: 280 },
            //     { x: 150, y: 400, z: 500 },
            //     { x: 110, y: 280, z: 200 },
            // ];
    

    

          const [scatterdata, setScatterData] = useState([]);
        
          useEffect(async () => {    

            let result = await fetch("http://127.0.0.1:8000/api/scatterChartDataFetch");

            result = await result.json();

            setScatterData(result);
            
          }, []);
    
    
    
             //for pie chart

        //     const piedata = [
        //         { name: 'Group A', value: 400 },
        //         { name: 'Group B', value: 300 },
        //         { name: 'Group C', value: 300 },
        //         { name: 'Group D', value: 200 },
        //     ];
    
    
          const [piedata, setPieData] = useState([]);
        
          useEffect(async () => {    
  
              let result = await fetch("http://127.0.0.1:8000/api/pieChartDataFetch");
  
              result = await result.json();
  
              setPieData(result);
              
          }, []);
      
      console.log(piedata);
  
      
          
      
          const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  
          const RADIAN = Math.PI / 180;
          const renderCustomizedLabel = ({
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          percent,
          index
          }: any) => {
          const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
          return (
              <text
              x={x}
              y={y}
              fill="white"
              textAnchor={x > cx ? "start" : "end"}
              dominantBaseline="central"
              >
              {`${(percent * 100).toFixed(0)}%`}
              </text>
          );
          };
  

   

	return (
		<>
			<Header />

			<br />
			<br />
			<br />

			<h1 className="chart-heading">Monthly New User / Lost User</h1>

			<ResponsiveContainer width="100%" aspect={3}>
				<LineChart
					data={pdata}
					width={500}
					height={300}
					margin={{
						top: 5,
						right: 300,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						dataKey="monthName"
						interval={"preserveStartEnd"}
						
					/>

					<YAxis />

					<Tooltip contentStyle={{ backgroundColor: "yellow" }} />
					<Legend />
					<Line
						type="monotone"
						dataKey="monthlyNewUser"
						stroke="red"
						activeDot={{ r: 8 }}
					/>
					<Line
						type="monotone"
						dataKey="monthLostUser"
						stroke="green"
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</ResponsiveContainer>

			<br />
			<br />
			<br />

      {/* area chart */}
			 <h1 className="chart-heading">Monthly Lost User</h1>

			<ResponsiveContainer width="100%" aspect={3}>
				<AreaChart
					width={500}
					height={400}
					data={pdata}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="monthName" />
					<YAxis />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="monthLostUser"
						stroke="#8884d8"
						fill="#8884d8"
					/>
				</AreaChart>
			</ResponsiveContainer>

			<br />
			<br />
            <br />
            
            
        {/* Bar Chart */}
      
			<h1 className="chart-heading">Yearly New User / Lost User</h1>
			<ResponsiveContainer width="100%" aspect={3}>
				<BarChart
					width={500}
					height={300}
					data={pdata}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="yearName" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="yearlyNewUser" fill="#8884d8" />
					<Bar dataKey="yearlyLostUser" fill="#82ca9d" />
				</BarChart>
            </ResponsiveContainer>

            <br />
			<br />
			<br />

      

      {/* SimpleScatterChart */}


            <h1 className="chart-heading">Subscription Fee vs No of User</h1>
            
            <ResponsiveContainer width="100%" aspect={3}>
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="subscriptionfee" name="Subscription Fee" unit="Tk." />
          <YAxis type="number" dataKey="userWithSubscriptionFee" name="No of User" unit="No." />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={scatterdata} fill="#8884d8" />
        </ScatterChart>
            </ResponsiveContainer>
            

            <br />
			<br />
			<br />

      {/* Pie Chart */}

            <h1 className="chart-heading">Countrywise User Percentage</h1>

           
            
            <br />

           
        
            <PieChart width={400} height={400} >
                <Pie
                    data={piedata}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="noOfUser"
                    margin={{
						top: 5,
						right: 300,
						left: 20,
						bottom: 5,
					}}
                  
                >
                    {piedata.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                </PieChart>
              
          





            
		</>
	);
}

export default Chart;
