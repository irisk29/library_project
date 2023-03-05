import React from "react";
import { Card, Tooltip } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ServerCommunicator from "../ServerCommunicator";

function LoanBookCard(props) {

    async function loanBook(event) {
        await new ServerCommunicator().loanBook(props.bookID, props.userID).catch(() => console.log("Somthing went wrong!"));
    }

    return (
        <Card className="card" key={props.bookID}  style={{"width": "18rem"}}>
            <div>
                <h4>{props.bookName}</h4>
                <h6>Author: {props.author}</h6>
                <h6>Available Copies: {props.numOfAvailableCopies}</h6>
                <div style={{"display": "flex"}}>
                    <Link to="/">
                        <Tooltip title="Loan Book">
                            <IconButton color="primary" aria-label="view books" disabled={props.numOfAvailableCopies === 0} onClick={loanBook}>
                                <AddShoppingCartIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </div>
            </div>
        </Card>
    );
}

export default LoanBookCard;