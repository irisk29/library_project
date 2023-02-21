import React from "react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Card, Tooltip } from "@mui/material";

function UserPreview(props)
{
    function deletePopUp()
    {
        alert("User is deleted");
    }

    return (
        <Card class="card" key={props.id}  style={{"width": "18rem"}}>
            <div>
                <h5>{props.userName}</h5>
                <h6>{props.personalID}</h6>
                <div style={{"display": "flex"}}>
                    <Link to="/"> {/*TODO: create user's books view */}
                        <Tooltip title="My Books">
                            <IconButton color="primary" aria-label="view books">
                                <LibraryBooksIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Link to="/"> {/*TODO: create edit */}
                        <Tooltip title="Edit">
                            <IconButton color="primary" aria-label="edit user">
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Link to="/">
                        <Tooltip title="Delete">
                            <IconButton color="primary" aria-label="delete user" onClick={deletePopUp}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </div>
            </div>
        </Card>
    );
}

export default UserPreview;