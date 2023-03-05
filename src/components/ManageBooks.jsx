import React, { useEffect, useState } from "react";
import BooksHeader from "./BooksHeader";
import BooksView from "./BooksView";
import ServerCommunicator from "../ServerCommunicator";

function ManageBooks() {
   const [booksInfo, setBooksInfo] = useState([]);

   useEffect( () =>{
      async function getBooks(){
         var res = await new ServerCommunicator().getAllBooks().catch(() => {
            console.log("Somthing went wrong!");
            return [];
         });
         setBooksInfo(res);
      }
      getBooks();
   }, []);

   return (
    <div>
      <BooksHeader />
      <BooksView books={booksInfo} />
    </div>
   )
}

export default ManageBooks;