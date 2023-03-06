import React from "react";
import { Card, Tooltip } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ServerCommunicator from "../ServerCommunicator";

function CurrentlyLoaningBookCard(props) {

    async function endLoan(event) {
        await new ServerCommunicator().endLoan(props.bookID, props.userID).catch(() => console.log("Somthing went wrong!"));;
    }

    return (
        <Card className="card" style={{"width": "18rem"}}>
            <div style={{"float": "left", "width": "80%", "overflowWrap": "break-word"}}>
                <h4 style={{"overflowWrap": "break-word"}}>{props.bookName}</h4>
                <h6>Author: {props.author}</h6>
                <h6>Available Copies: {props.copies}</h6>
            </div>
            <div style={{"display": "flex", "float": "right", "width": "20%", "justifyContent": "flex-end", "marginTop": "2%"}}>
                <Link to="/users">
                    <Tooltip title="End Loan">
                        <IconButton color="primary" aria-label="view books" size="large" onClick={endLoan}>
                            <CancelIcon />
                        </IconButton>
                    </Tooltip>
                </Link>
            </div>
        </Card>
    );
}

export default CurrentlyLoaningBookCard;