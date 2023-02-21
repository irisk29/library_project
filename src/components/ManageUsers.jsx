import React from "react";
import UsersHeader from "./UsersHeader";
import UsersView from "./UsersView";

const usersInfo = [
   {
      "personalID" : 1,
      "userName" : "Iris Kronfeld"
   },
   {
      "personalID" : 2,
      "userName" : "Dana Kronfeld"
   },
   {
      "personalID" : 3,
      "userName" : "Annabelle Kronfeld"
   },
   {
      "personalID" : 4,
      "userName" : "Tanya Kronfeld"
   },
   {
      "personalID" : 5,
      "userName" : "Alex Kronfeld"
   }
];

function ManageUsers() {
   return (
    <div>
      <UsersHeader />
      <UsersView users={usersInfo} />
    </div>
   )
}

export default ManageUsers;