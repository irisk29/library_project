import React, { useEffect, useState } from "react";
import UsersHeader from "./UsersHeader";
import UsersView from "./UsersView";
import ServerCommunicator from "../ServerCommunicator";

function ManageUsers() {
   const [usersInfo, setUsersInfo] = useState([]);

   useEffect( () =>{
      async function getUsers(){
         var res = await new ServerCommunicator().getAllUsers().catch(() => "Something went wrong!");
         console.log(res);
         setUsersInfo(res);
      }
      getUsers();
   }, []);

   return (
    <div>
      <UsersHeader />
      <UsersView users={usersInfo} />
    </div>
   )
}

export default ManageUsers;