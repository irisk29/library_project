import React from "react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Card, Tooltip } from "@mui/material";
import ServerCommunicator from "../ServerCommunicator";

function UserPreview(props)
{
    const {id, userName, personalID} = props;
    var edit_path = "/edit_user/" + userName + "/" + personalID + "/" + id;
    var get_user_books_path = "/user_books/" + id;
    
    async function deleteUser()
    {
        var books = await new ServerCommunicator().getUserLoanedBooksID(id).catch(() => {
            console.log("Somthing went wrong!");
            return [];
        });
        await books.forEach(async b => {
            await new ServerCommunicator().endLoan(b["bookID"], id);
        });
        await new ServerCommunicator().deleteUser(id).catch(() => {
            console.log("Somthing went wrong!");
        });
    }

    return (
        <Card className="card" key={id}  style={{"width": "18rem"}}>
            <div>
                <h4>{userName}</h4>
                <h6>{personalID}</h6>
                <div style={{"display": "flex"}}>
                    <Link to={get_user_books_path}> 
                        <Tooltip title="My Books">
                            <IconButton color="primary" aria-label="view books">
                                <LibraryBooksIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Link to={edit_path}> 
                        <Tooltip title="Edit">
                            <IconButton color="primary" aria-label="edit user">
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Link to="/">
                        <Tooltip title="Delete">
                            <IconButton color="primary" aria-label="delete user" onClick={deleteUser}>
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