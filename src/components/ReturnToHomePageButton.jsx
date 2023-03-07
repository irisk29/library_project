import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

function HomeButton() {
    return (
    <Link to="/">
        <Tooltip title="Home">
            <IconButton color="primary" size="large" aria-label="go back home">
                <HomeIcon />
            </IconButton>
        </Tooltip>
    </Link>);
}

export default HomeButton;