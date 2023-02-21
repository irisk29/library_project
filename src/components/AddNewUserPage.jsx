import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Tooltip } from "@mui/material";

function AddNewUser()
{
    var [newUser, setNewUser] = useState({"fullName": "", "personalID": ""});

    function handleSubmit(event)
    {
        //TODO: should save the user in the db
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
            <div>
                <form onSubmit={handleSubmit}>
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
            <div>
                <Link to="/">
                    <Tooltip title="Home">
                        <IconButton color="primary" size="large" aria-label="go back home">
                            <HomeIcon />
                        </IconButton>
                    </Tooltip>
                </Link>
            </div>
        </div>
        
        
    );
}

export default AddNewUser;