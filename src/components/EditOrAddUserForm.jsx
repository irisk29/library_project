import React, { useState } from "react";
import SimpleHeader from "./SimpleHeader";

function AddOrEditUser(props)
{   
    var [newUser, setNewUser] = useState({"fullName": props.name, "personalID": props.pID});

    function handleSubmit(event)
    {
        //TODO: should save the user in the db (incase of edit it should update and not create)
        event.preventDefault();
        alert("saved user in db");
        setNewUser({"fullName": "", "personalID": ""});
    }

    function handleChange(event)
    {
        var {name, value} = event.target;
        setNewUser((prev) => ({...prev, [name]: value}));
    }

    return (
        <div>
            {props.name === "" ? <SimpleHeader title="Create New User" /> : null} {/*the cond means this is add mode*/}
            <div>
                <form inline onSubmit={handleSubmit}>
                    <label>Enter your full name:
                        <input 
                        type="text" 
                        name="fullName" 
                        value={newUser.fullName} 
                        onChange={handleChange}
                        />
                    </label>
                    <label>Enter your personal ID:
                        <input 
                            type="text" 
                            name="personalID" 
                            value={newUser.personalID} 
                            onChange={handleChange}
                        />
                    </label>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}

export default AddOrEditUser;