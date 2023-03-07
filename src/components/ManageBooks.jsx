import React, { useEffect, useState } from "react";
import BooksHeader from "./BooksHeader";
import BooksView from "./BooksView";
import ServerCommunicator from "../ServerCommunicator";

function ManageBooks() {
   const [booksInfo, setBooksInfo] = useState([]);
   const [filteredBooks, setFilteredBooks] = useState([]);

   const onSearch = (word) => {
      var filteredBooks = booksInfo.filter((b) => b["BookName"].toLowerCase().includes(word.toLowerCase())
                                                      || b["Author"].toLowerCase().includes(word.toLowerCase()));
      setFilteredBooks(filteredBooks);                                                
   };

   useEffect( () =>{
      async function getBooks(){
         var res = await new ServerCommunicator().getAllBooks().catch(() => {
            console.log("Somthing went wrong!");
            return [];
         });
         setBooksInfo(res);
         setFilteredBooks(res);
      }
      getBooks();
   }, []);

   return (
    <div>
      <BooksHeader onChangeFunc={onSearch}/>
      <BooksView books={filteredBooks} />
    </div>
   )
}

export default ManageBooks;