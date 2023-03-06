import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServerCommunicator from "../ServerCommunicator";
import LoanBookCard from "./LoanBookCard";
import { Grid } from "@mui/material";
import SimpleHeader from "./SimpleHeader";
import LoadingSpinner from "./LoadingSpinner";
import NoDataMsg from "./NoDataMsg";

function LoanBook() {
    var {userID} = useParams();
    const [booksCanLoan, setBooksCanLoan] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () =>{
        async function getBooks(){
            setIsLoading(true);
            var res = await new ServerCommunicator().getBooksUserCanLoan(userID).catch(() => {
                console.log("Somthing went wrong!");
                return [];
            });
            setBooksCanLoan(res);
            setIsLoading(false);
        }
        getBooks();
    }, []);

    return isLoading ? <LoadingSpinner/> :
        <div>
        <SimpleHeader title="Loan A Book" />
        {booksCanLoan.length === 0 ? <NoDataMsg msg="Sorry all the books are taken - try again later"/> :
         <Grid container spacing={1}>
            {
                booksCanLoan.map((b, index) => {
                    return (
                        <Grid item key={index}>
                            <LoanBookCard userID={userID} bookName={b["BookName"]} author={b["Author"]} numOfAvailableCopies={b["Copies"]} bookID={b["ID"]}/>
                        </Grid>)
                })
            }
        </Grid> }     
        </div>
    
}

export default LoanBook;