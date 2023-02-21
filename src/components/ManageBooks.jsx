import React from "react";
import BooksHeader from "./BooksHeader";
import BooksView from "./BooksView";

const booksInfo = [
   {
      "author" : "Kronfeld",
      "bookName" : "Iris",
      "copies": "4"
   },
   {
      "author" : "Kronfeld",
      "bookName" : "Dana",
      "copies": "2"
   },
   ,
   {
      "author" : "Kronfeld",
      "bookName" : "Annabelle",
      "copies": "6"
   },
   {
      "author" : "Kronfeld",
      "bookName" : "Tanya",
      "copies": "1"
   },
   ,
   {
      "author" : "Kronfeld",
      "bookName" : "Alex",
      "copies": "5"
   }
];

function ManageBooks() {
   return (
    <div>
      <BooksHeader />
      <BooksView books={booksInfo} />
    </div>
   )
}

export default ManageBooks;