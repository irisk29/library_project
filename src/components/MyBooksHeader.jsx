import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from "@mui/material";
import HistoryIcon from '@mui/icons-material/History';

function MyBooksHeader(props)
{
    const loan_book_path = "/loan_book/" + props.userID;
    
    return (
        <header>
            <h1 style={{"display": 'inline-block'}}>My Loaned Books</h1>
            <div style={{"textAlign": 'right', "position": "absolute", "top": "2vh", "right": "1vw"}}>
                <Link to="/books_history" state={props.books}>
                    <Tooltip title="Books History">
                        <IconButton color="primary" size="large" aria-label="books history">
                            <HistoryIcon />
                        </IconButton>
                    </Tooltip>
                </Link>
                <Link to={loan_book_path}>
                    <Tooltip title="Loan Books">
                        <IconButton color="primary" size="large" aria-label="loan book">
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