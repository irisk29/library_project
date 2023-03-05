import React from "react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import { Card, Tooltip } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import ServerCommunicator from "../ServerCommunicator";

function BookLoanerCard(props)
{
    const {userID, bookID, userName, personalID} = props;

    async function endLoan(event) {
        await new ServerCommunicator().endLoan(bookID, userID).catch(() => console.log("Somthing went wrong!"));;
    }

    return (
        <Card className="card" key={props.bookID}  style={{"width": "18rem"}}>
            <div style={{"float": "left", "width": "80%", "display": "table-column", "overflowWrap": "break-word", "borderBlock": "80%"}}>
                <h4>{userName}</h4>
                <h6>Personal ID: {personalID}</h6>
            </div>
            <div style={{"float": "right", "width": "20%", "justifyContent": "flex-end", "marginTop": "2%"}}>
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

export default BookLoanerCard;