import React, { useEffect, useState } from "react";
import ServerCommunicator from "../ServerCommunicator";
import { useParams } from "react-router-dom";
import CurrentlyLoaningBookCard from "./CurrentlyLoaningBookCard";
import MyBooksHeader from "./MyBooksHeader";

//the books I currently loaning and the books I read
function MyBooks() {
    var {userID} = useParams();
    const [userBooks, setUserBooks] = useState([]);

   useEffect( () =>{
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
    <div>
      <MyBooksHeader userID={userID} books={booksHistory}/>
      {
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