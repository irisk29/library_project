import React, { useEffect, useState } from "react";
import ServerCommunicator from "../ServerCommunicator";
import { useParams } from "react-router-dom";
import CurrentlyLoaningBookCard from "./CurrentlyLoaningBookCard";
import MyBooksHeader from "./MyBooksHeader";
import NoDataMsg from "./NoDataMsg";
import { Grid } from "@mui/material";
import LoadingSpinner from "./LoadingSpinner";

//the books I currently loaning and the books I read
function MyBooks() {
    var {userID} = useParams();
    const [userBooks, setUserBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

   useEffect( () => {
    async function getBooks(){
        setIsLoading(true);
        var getUserBooks = await new ServerCommunicator().getUserBooks(userID).catch(() => {
            console.log("Somthing went wrong!");
            return [];
        });
        setUserBooks(getUserBooks);
        setIsLoading(false);
    }
      getBooks();
   }, []);

   var booksHistory = userBooks.filter((b) => !b["loans"]);
   var loanedBooks = userBooks.filter((b) => b["loans"]);
   
   return   isLoading ? <LoadingSpinner/> :
    <div>
        <MyBooksHeader userID={userID} books={booksHistory}/>
        {
        loanedBooks.length === 0 ? 
        <NoDataMsg msg="You have no loaned books"/> :
        <Grid container spacing={1}>
            {
                loanedBooks.map((loanedBook, index) => {
                    return (
                        <Grid item key={index}>
                            <CurrentlyLoaningBookCard userID={userID} bookID={loanedBook["bookID"]} bookName={loanedBook["BookName"]} author={loanedBook["Author"]} copies={loanedBook["Copies"]}/>
                        </Grid>
                    )
                })
            }
        </Grid>
        }      
    </div> 
   
}

export default MyBooks;