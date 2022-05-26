import React, { useState, useEffect } from "react";
import Header from "./Header";

import './UserList.css'


function UserList() {

  const [data,setData] = useState([]);

		
	
	
  useEffect(async () => {

    let result = await fetch("http://127.0.0.1:8000/api/userList");

    result = await result.json();

    setData(result);
    
  }, []);

  console.log("result", data);

  async function deleteOperation(id)
  {
      // alert(id);
    
    let result = await fetch("http://127.0.0.1:8000/api/deleteUser/" + id, {
      method: 'DELETE'
    });

    result = await result.json();

    console.warn(result);
      
  }




	return (
		<div>
			<Header />

			<section className="ftco-section">
				<div className="container">
					<div className="row justify-content-center row1">
						<div className="row1">
							<h2 className="heading-section">User List</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="table-wrap">
								<table className="table">
									<thead className="thead-dark">
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Email</th>
											<th>Action</th>
											<th>&nbsp;</th>
										</tr>
									</thead>
									<tbody>
											
                    {data.map((item) => (
                      
                      <tr>
                        <td scope="row">{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td><span onClick={() => deleteOperation(item.id)}
                          style={{backgroundColor: 'red', color: 'black', padding: '5px', borderRadius:'5px', cursor: 'pointer'}}
                        >Delete</span></td>
											
										</tr>


                    ))}



									
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default UserList;
