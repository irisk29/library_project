import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServerCommunicator from "../ServerCommunicator";
import LoanBookCard from "./LoanBookCard";
import { Grid } from "@mui/material";
import SimpleHeader from "./SimpleHeader";
import NoDataMsg from "./NoDataMsg";
import PossibleLoanerCard from "./PossibleLoanerCard";

function PossibleLoaners() {
    var {bookID} = useParams();
    const [usersCanLoan, setUsersCanLoan] = useState([]);

    useEffect( () =>{
        async function getUsers(){
            var res = await new ServerCommunicator().getUsersWhoCanLoanTheBook(bookID).catch(() => {
                console.log("Somthing went wrong!");
                return [];
            });
            setUsersCanLoan(res);
        }
        getUsers();
    }, []);

    return (
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
    );
}

export default PossibleLoaners;