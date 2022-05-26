import React,{useState, useEffect} from 'react'

import './UserProfileChangePassPopUp.css'

function UserProfileChangePassPopUp(props) {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");


    // ----------------------------------------------------------------

    const [isPassValid, setPassValid] = useState(true);

    const [newOldPassEqual, setNewOldPassEqual] = useState(true);

    const [checkPasswordLength, setPasswordLength] = useState(true);

    const [updatePasswordSuccefull, setUpdatePasswordSuccefull] = useState(false);

    const obj = JSON.parse(localStorage.getItem("user-info"));




    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])




    function deactivePasswordModal()
    {
        props.deactive();
    }

   

   async function updatePassword()
    {

        setPassValid(true);
        setNewOldPassEqual(true);
        setPasswordLength(true);
        // setUpdatePasswordSuccefull(true);

        //check if current password is valid or not

        // if (obj.password != currentPassword)
        // {
        //     setPassValid(false);

        //     return;
        // }    

        //check if new password and confirm password is equal or not

        if (newPassword != confirmNewPassword)
        {
            setNewOldPassEqual(false);
            return;
        }    

        //check if password length is atleast 6 character or not!

    //    else if (newPassword.length < 6)
    //     {
    //         setPasswordLength(false);

    //         return;
    //     }

        //if everthing is ok, then update the password

        let email = obj.email;

        let item = { email, newPassword };

        let result = await fetch("http://127.0.0.1:8000/api/customerChangePassword", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });

        result = await result.json();

        setUpdatePasswordSuccefull(true);
    

    }



    return (

    
        
        <div className="popup-view type-changePassword">

            <div className="changePassword">

                <img onClick={deactivePasswordModal} src="/closebtn.png" className="closeBtn" />
                
                <h2>Add Password</h2>
                
                <div className="updatePasswordForm">

                <label className="newPasswordLabel">Current Password</label>

                <input className="passwordField" type="password"  placeholder="New Password" autocomplete="false" required></input>

                    <label className="newPasswordLabel">New Password</label>

                    <input className="passwordField" type="password"  placeholder="New Password" autocomplete="false" required></input>

                    <label className="newPasswordLabel up">Confirm New Password</label>

                    <input className="passwordField" type="password"  placeholder="Confirm New Password" autocomplete="false" required></input>

                    <div class="text-center">
                        <input onClick={updatePassword} type="submit" className="buttonUpdate" value="Update" />
                        
                    </div>

                    {
                        !isPassValid && <p style={{color:'red'}}>Current Password is not valid!</p>
                    }

                    {
                        !newOldPassEqual && <p style={{color:'red'}}>New Password and Old Password are not equal!</p>
                    }

                    {
                        !checkPasswordLength && <p style={{color:'red'}}>Password Length must be at least 6 character!</p>
                    }

                    {
                        updatePasswordSuccefull && <p style={{color:'green'}}>Password Updated successfully!!</p>
                    }


                </div>
                             

            </div>

          


            
        </div>
    )
}

export default UserProfileChangePassPopUp
