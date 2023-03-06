import React from "react";
import { Card, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ServerCommunicator from "../ServerCommunicator";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

function PossibleLoanerCard(props) {

    async function loanBook(event) {
        await new ServerCommunicator().loanBook(props.bookID, props.userID).catch(() => console.log("Somthing went wrong!"));
    }

    return (
        <Card className="card" key={props.userID}  style={{"width": "18rem"}}>
            <div>
                <div style={{"float": "left", "width": "80%"}}>
                    <h4>{props.userName}</h4>
                    <h6>Personal ID: {props.personalID}</h6>
                </div>
                <div style={{"display": "flex", "float": "right", "width": "20%", "justifyContent": "flex-end", "marginTop": "2%"}}>
                    <Link to="/users">
                        <Tooltip title="Loan Book">
                            <IconButton color="primary" aria-label="loan books" onClick={loanBook}>
                                <LibraryAddIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </div>
            </div>
        </Card>
    );
}

export default PossibleLoanerCard;