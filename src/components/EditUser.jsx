import React from "react";
import { useParams } from "react-router-dom";
import ServerCommunicator from "../ServerCommunicator";
import AddOrEditUser from "./EditOrAddUserForm";
import SimpleHeader from "./SimpleHeader";

function EditUser()
{
    var {userName, personalID, userID} = useParams();

    async function editUser(userName, personalID, userID)
    {
        await new ServerCommunicator().editUser(userID, userName, personalID).catch(() => "Something went wrong!");
    }

    return (
        <div>
            <SimpleHeader title="User Edit" />
            <AddOrEditUser name={userName} pID={personalID} userID={userID} userHandle={editUser}/>
        </div>
        
    )
}

export default EditUser;