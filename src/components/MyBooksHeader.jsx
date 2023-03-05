import React from "react";
import { Link } from "react-router-dom";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from "@mui/material";

function MyBooksHeader(props)
{
    const loan_book_path = "/loan_book/" + props.userID;

    return (
        <header>
            <h1 style={{"display": 'inline-block'}}>My Books</h1>
            <div style={{"textAlign": 'right', "position": "absolute", "top": "2vh", "right": "1vw"}}>
                <Link to={loan_book_path}>
                    <Tooltip title="Loan Books">
                        <IconButton color="primary" size="large" aria-label="go back home">
                            <AddBoxIcon />
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

export default MyBooksHeader;