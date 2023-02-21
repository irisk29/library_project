import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from "@mui/material";

function SimpleHeader(props)
{
    return (
        <header>
            <h1 style={{"display": 'inline-block'}}>{props.title}</h1>
            <div style={{"textAlign": 'right', "position": "absolute", "top": "2vh", "right": "1vw"}}>
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

export default SimpleHeader;