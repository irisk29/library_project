import React from "react";
import { Link } from "react-router-dom";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from "@mui/material";
import HomeButton from "./ReturnToHomePageButton";
import SearchBar from "./SearchBar";

function UsersHeader(props)
{
    return (
        <header>
            <h1 style={{"display": 'inline-block'}}>Users Managment</h1>
            <div style={{"textAlign": 'right', "position": "absolute", "top": "2vh", "right": "1vw"}}>
                <SearchBar onChangeFunc={props.onChangeFunc} placeHolder="Search A User"/>
                <Link to="/add_new_user">
                    <Tooltip title="Create User">
                        <IconButton color="primary" size="large" aria-label="add new user">
                            <PersonAddAlt1Icon />
                        </IconButton>
                    </Tooltip>
                </Link> 
                <HomeButton/>
            </div>
        </header>
    );
}

export default UsersHeader;