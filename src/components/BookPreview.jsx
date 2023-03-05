import React from "react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Card, Tooltip } from "@mui/material";

function BookPreview(props)
{
    const vars = [props.bookName, props.author, props.numOfAvailableCopies, props.id];
    const edit_book_path = "/edit_book/" + vars.join("/");
    const loaners_path = "/loaners/" + props.id;

    return (
        <Card className="card" key={props.id}  style={{"width": "18rem"}}>
            <div>
                <h4>{props.bookName}</h4>
                <h6>Author: {props.author}</h6>
                <h6>Available Copies: {props.numOfAvailableCopies}</h6>
                <div style={{"display": "flex"}}>
                    <Link to={loaners_path}> 
                        <Tooltip title="Loaners">
                            <IconButton color="primary" aria-label="view books">
                                <VisibilityIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Link to={edit_book_path}>
                        <Tooltip title="Edit Book">
                            <IconButton color="primary" aria-label="edit book">
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Link to="/books"> {/*TODO: add loan book logic*/}
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