import React from "react";
import { useParams } from "react-router-dom";
import AddOrEditUser from "./EditOrAddUserForm";
import SimpleHeader from "./SimpleHeader";

function EditUser()
{
    var {userName, personalID} = useParams();
    return (
        <div>
            <SimpleHeader title="User Edit" />
            <AddOrEditUser name={userName} pID={personalID} />
        </div>
        
    )
}

export default EditUser;