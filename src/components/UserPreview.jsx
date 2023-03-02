import React from "react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Card, Tooltip } from "@mui/material";

function UserPreview(props)
{
    const {id, userName, personalID} = props;
    var edit_path = "/edit_user/" + userName + "/" + personalID + "/" + id;
    function deletePopUp()
    {
        alert("User is deleted");
    }

    return (
        <Card class="card" key={id}  style={{"width": "18rem"}}>
            <div>
                <h4>{userName}</h4>
                <h6>{personalID}</h6>
                <div style={{"display": "flex"}}>
                    <Link to="/"> {/*TODO: create user's books view */}
                        <Tooltip title="My Books">
                            <IconButton color="primary" aria-label="view books">
                                <LibraryBooksIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Link to={edit_path}> {/*TODO: create edit */}
                        <Tooltip title="Edit">
                            <IconButton color="primary" aria-label="edit user">
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Link to="/"> {/*TODO: create delete */}
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