import React,{useState, useEffect} from 'react'

import './UserProfileChangeName.css'

function UserProfileChangeName(props) {

    const [name, setName] = useState("");



    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])




    function deactivePasswordModal()
    {
        props.deactive();
    }

    function updateName()
    {
        //check if current password is valid or not

        //check if new password and confirm password is equal or not

        //if everthing is ok, then update the password
    

    }

    function deactiveUpdateNamedModal()
    {
        props.deactiveNameModal();
    }



    return (

    
        
        <div className="popup-view type-changePassword">

            <div className="changePassword">

                <img onClick={deactiveUpdateNamedModal} src="/closebtn.png" className="closeBtn" />
                
                <h2>Edit Your Profile</h2>
                
                <div className="updatePasswordForm">

                <label className="newPasswordLabel">Name</label>

                <input className="passwordField" type="text"  placeholder="Name" autocomplete="false" required></input>

                 
                    <div class="text-center">
                        <input onClick={updateName} type="submit" className="buttonUpdate" value="Update" />
                        
                    </div>


                </div>
                             

            </div>
            
        </div>
    )
}

export default UserProfileChangeName
