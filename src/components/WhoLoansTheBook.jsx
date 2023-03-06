import React, { useEffect, useState } from "react";
import ServerCommunicator from "../ServerCommunicator";
import { useParams } from "react-router-dom";
import SimpleHeader from "./SimpleHeader";
import { Grid } from "@mui/material";
import BookLoanerCard from "./BookLoanerCard";
import LoadingSpinner from "./LoadingSpinner";
import NoDataMsg from "./NoDataMsg";

//the books I currently loaning and the books I read
function BookLoaners() {
    var {bookID} = useParams();
    const [loaners, setLoaners] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () =>{
        async function getLoaners(){
            setIsLoading(true);
            var getLoaners = await new ServerCommunicator().getUsersWhoLoansTheBook(bookID).catch(() => {
                console.log("Somthing went wrong!");
                return [];
            });
            setLoaners(getLoaners);
            setIsLoading(false);
        }
        getLoaners();
    }, []);
    
    return isLoading ? <LoadingSpinner/> :
        <div>
        <SimpleHeader title="Book's Loaners"/>
        {
            loaners.length === 0 ? <NoDataMsg msg="No loaners were found" /> :
            <Grid container spacing={1}>
                {
                    loaners.map((l, index) => {
                        return (
                            <Grid item key={index}>
                                <BookLoanerCard userID={l["userID"]} bookID={l["bookID"]} userName={l["userName"]} personalID={l["personalID"]}/>
                            </Grid>)
                    })
                }
            </Grid>
        }      
        </div>
    
}

export default BookLoaners;