import React from "react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Card, Tooltip } from "@mui/material";

function BookPreview(props)
{
    return (
        <Card class="card" key={props.id}  style={{"width": "18rem"}}>
            <div>
                <h5>{props.bookName}</h5>
                <h6>{props.author}</h6>
                <h6>{props.numOfAvailableCopies}</h6>
                <div style={{"display": "flex"}}>
                    <Link to="/"> {/*TODO: create [who currently loans the book] page*/}
                        <Tooltip title="Loaners">
                            <IconButton color="primary" aria-label="view books">
                                <VisibilityIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Link to="/"> {/*TODO: create edit book*/}
                        <Tooltip title="Edit Book">
                            <IconButton color="primary" aria-label="edit book">
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Link to="/books">
                        <Tooltip title="Loan Book">
                            <IconButton color="primary" aria-label="loan book">
                                <AddCircleIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </div>
            </div>
        </Card>
    );
}

export default BookPreview;