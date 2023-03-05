import React from "react";
import { Card, Tooltip } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';

function CurrentlyLoaningBookCard(props) {
    return (
        <Card className="card" key={props.bookID}  style={{"width": "18rem"}}>
            <div style={{"float": "left", "width": "80%"}}>
                <h4>{props.bookName}</h4>
                <h6>Author: {props.author}</h6>
                <h6>Available Copies: {props.copies}</h6>
            </div>
            <div style={{"float": "right", "width": "20%", "justifyContent": "flex-end", "marginTop": "2%"}}>
                <Link to="/"> {/*TODO: create end user's loaning*/}
                    <Tooltip title="End Loan">
                        <IconButton color="primary" aria-label="view books" size="large">
                            <CancelIcon />
                        </IconButton>
                    </Tooltip>
                </Link>
            </div>
        </Card>
    );
}

export default CurrentlyLoaningBookCard;