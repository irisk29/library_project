import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServerCommunicator from "../ServerCommunicator";
import LoanBookCard from "./LoanBookCard";
import { Grid } from "@mui/material";
import SimpleHeader from "./SimpleHeader";

function LoanBook() {
    var {userID} = useParams();
    const [booksCanLoan, setBooksCanLoan] = useState([]);

    useEffect( () =>{
        async function getBooks(){
            var res = await new ServerCommunicator().getBooksUserCanLoan(userID).catch(() => {
                console.log("Somthing went wrong!");
                return [];
            });
            setBooksCanLoan(res);
        }
        getBooks();
    }, []);

    return (
        <div>
        <SimpleHeader title="Loan A Book" />
        <Grid container spacing={1}>
            {
                booksCanLoan.map((b, index) => {
                    return (
                        <Grid item key={index}>
                            <LoanBookCard userID={userID} bookName={b["BookName"]} author={b["Author"]} numOfAvailableCopies={b["Copies"]} bookID={b["BookID"]}/>
                        </Grid>)
                })
            }
        </Grid>      
        </div>
    );
}

export default LoanBook;