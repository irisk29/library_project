import React, { useEffect, useState } from "react";
import UsersHeader from "./UsersHeader";
import UsersView from "./UsersView";
import ServerCommunicator from "../ServerCommunicator";

function ManageUsers() {
   const [usersInfo, setUsersInfo] = useState([]);

   useEffect( () =>{
      async function getUsers(){
         var res = await new ServerCommunicator().getAllUsers().catch(() => {
            console.log("Somthing went wrong!");
            return [];
         });
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