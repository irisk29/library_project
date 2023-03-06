import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServerCommunicator from "../ServerCommunicator";
import { Grid } from "@mui/material";
import SimpleHeader from "./SimpleHeader";
import NoDataMsg from "./NoDataMsg";
import PossibleLoanerCard from "./PossibleLoanerCard";
import LoadingSpinner from "./LoadingSpinner";

function PossibleLoaners() {
    var {bookID} = useParams();
    const [usersCanLoan, setUsersCanLoan] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () =>{
        async function getUsers(){
            setIsLoading(true);
            var res = await new ServerCommunicator().getUsersWhoCanLoanTheBook(bookID).catch(() => {
                console.log("Somthing went wrong!");
                return [];
            });
            console.log(res);
            setUsersCanLoan(res);
            setIsLoading(false);
        }
        getUsers();
    }, []);

    return isLoading ? <LoadingSpinner/> :
        <div>
            <SimpleHeader title="Who Can Loan The Book" />
            {usersCanLoan.length === 0 ?
            <div>
                <NoDataMsg msg="No possible loaners were found" />
            </div> :
            <Grid container spacing={1}>
                {
                    usersCanLoan.map((u, index) => {
                        return (
                            <Grid item key={index}>
                                <PossibleLoanerCard userID={u["userID"]} bookID={bookID} userName={u["userName"]} personalID={u["personalID"]}/>
                            </Grid>)
                    })
                }
            </Grid>}      
        </div>
}

export default PossibleLoaners;