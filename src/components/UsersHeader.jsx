import React from "react";
import { Link } from "react-router-dom";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from "@mui/material";

function UsersHeader()
{
    return (
        <header>
            <h1 style={{"display": 'inline-block'}}>Users Managment</h1>
            <div style={{"textAlign": 'right', "position": "absolute", "top": "2vh", "right": "1vw"}}>
                <Link to="/add_new_user">
                    <Tooltip title="Create User">
                        <IconButton color="primary" size="large" aria-label="add new user">
                            <PersonAddAlt1Icon />
                        </IconButton>
                    </Tooltip>
                </Link> 
                <Link to="/">
                    <Tooltip title="Home">
                        <IconButton color="primary" size="large" aria-label="go back home">
                            <HomeIcon />
                        </IconButton>
                    </Tooltip>
                </Link>
            </div>
        </header>
    );
}

export default UsersHeader;