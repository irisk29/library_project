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

    var cannotNav = props.numOfAvailableCopies === 0;
    return (
        <Card className="card" key={props.bookID}  style={{"width": "18rem"}}>
            <div>
                <div style={{"float": "left", "width": "80%"}}>
                    <h4>{props.bookName}</h4>
                    <h6>Author: {props.author}</h6>
                    <h6>Available Copies: {props.numOfAvailableCopies}</h6>
                </div>
                <div style={{"display": "flex", "float": "right", "width": "20%", "justifyContent": "flex-end", "marginTop": "2%"}}>
                    <Link to="/users" style={cannotNav ? {"pointerEvents" : "none"} : null}>
                        <Tooltip title="Loan Book">
                            <IconButton color="primary" aria-label="view books" disabled={cannotNav} onClick={loanBook}>
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