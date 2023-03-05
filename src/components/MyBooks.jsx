import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import ServerCommunicator from "../ServerCommunicator";
import SimpleHeader from "./SimpleHeader";
import { useParams } from "react-router-dom";
import CurrentlyLoaningBookCard from "./CurrentlyLoaningBookCard";

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
      <SimpleHeader title="My Books" />
      {
        <div>
            <div style={{"overflow": "auto", "whiteSpace": "nowrap"}}> 
                <h2>Currently Loaning:</h2>
                {
                    loanedBooks.map((loanedBook) => {
                        return <CurrentlyLoaningBookCard userID={userID} bookID={loanedBook["bookID"]} bookName={loanedBook["BookName"]} author={loanedBook["Author"]} copies={loanedBook["Copies"]}/>
                    })
                }
            </div>
            <div>
                <hr style={{"textAlign": "left", "marginLeft": "0", "border": "1px solid"}}/>
            </div>
            <div>
                <h2>Books You Have Read:</h2>
                {
                    booksHistory.map((b) => {
                        return <Card className="card" key={b["bookID"]}  style={{"width": "18rem"}}>
                            <div>
                                <h4>{b["BookName"]}</h4>
                                <h6>Author: {b["Author"]}</h6>
                                <h6>Available Copies: {b["Copies"]}</h6>
                            </div>
                        </Card>
                    })
                }  
            </div>
        </div>
      }      
    </div>
   )
}

export default MyBooks;