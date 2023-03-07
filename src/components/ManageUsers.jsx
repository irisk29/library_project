import React, { useEffect, useState } from "react";
import UsersHeader from "./UsersHeader";
import UsersView from "./UsersView";
import ServerCommunicator from "../ServerCommunicator";

function ManageUsers() {
   const [usersInfo, setUsersInfo] = useState([]);
   const [filteredUsers, setFilteredUsers] = useState([]);

   const onSearch = (word) => {
      var filteredUsers = usersInfo.filter((u) => u["userName"].toLowerCase().includes(word.toLowerCase())
                                                      || u["personalID"].toLowerCase().includes(word.toLowerCase()));
      setFilteredUsers(filteredUsers);                                                
   };

   useEffect( () =>{
      async function getUsers(){
         var res = await new ServerCommunicator().getAllUsers().catch(() => {
            console.log("Somthing went wrong!");
            return [];
         });
         setUsersInfo(res);
         setFilteredUsers(res);
      }
      getUsers();
   }, []);

   return (
    <div>
      <UsersHeader onChangeFunc={onSearch}/>
      <UsersView users={filteredUsers} />
    </div>
   )
}

export default ManageUsers;