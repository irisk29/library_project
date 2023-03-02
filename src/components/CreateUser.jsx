import React from "react";
import ServerCommunicator from "../ServerCommunicator";
import AddOrEditUser from "./EditOrAddUserForm";
import SimpleHeader from "./SimpleHeader";

function CreateUser()
{
    async function createUser(userName, personalID)
    {
        await new ServerCommunicator().createNewUser(userName, personalID).catch(() => "Something went wrong!");
    }

    return (
        <div>
            <SimpleHeader title="Create New User" />
            <AddOrEditUser name="" pID="" userHandle={createUser}/>
        </div>
        
    )
}

export default CreateUser;