import React, { useEffect, useState } from "react";
import ServerCommunicator from "../ServerCommunicator";
import { useParams } from "react-router-dom";
import CurrentlyLoaningBookCard from "./CurrentlyLoaningBookCard";
import MyBooksHeader from "./MyBooksHeader";
import NoDataMsg from "./NoDataMsg";

//the books I currently loaning and the books I read
function MyBooks() {
    var {userID} = useParams();
    const [userBooks, setUserBooks] = useState([]);

   useEffect( () => {
    async function getBooks(){
        var getUserBooks = await new ServerCommunicator().getUserBooks(userID).catch(() => {
            console.log("Somthing went wrong!");
            return [];
        });
        setUserBooks(getUserBooks);
    }
      getBooks();
   }, []);

   var booksHistory = userBooks.filter((b) => !b["loans"]);
   var loanedBooks = userBooks.filter((b) => b["loans"]);
   
   return (
    <div style={{"flexFlow": "column", "display": "flex", "height": "100%"}}>
      <MyBooksHeader userID={userID} books={booksHistory}/>
      {
        loanedBooks.length === 0 ? 
        <NoDataMsg msg="You have no loaned books"/> :
        <div>
            <ul style={{"overflow": "auto", "height": "400px"}}>
                {   
                    loanedBooks.map((loanedBook) => {
                        return (
                            <li style={{"display": "inline-block"}} key={loanedBook["bookID"]}>
                                <CurrentlyLoaningBookCard userID={userID} bookID={loanedBook["bookID"]} bookName={loanedBook["BookName"]} author={loanedBook["Author"]} copies={loanedBook["Copies"]}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
      }      
    </div>
   )
}

export default MyBooks;