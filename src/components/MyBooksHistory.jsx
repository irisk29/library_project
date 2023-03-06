import React from "react";
import { Card, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import SimpleHeader from "./SimpleHeader";
import NoDataMsg from "./NoDataMsg";

//the books I currently loaning and the books I read
function MyBooksHistory() {
    var books = useLocation();
    var booksHistory = books["state"];

    return (
        <div>
        <SimpleHeader title="My Books History"/>
        {
            booksHistory.length === 0 ? 
            <NoDataMsg msg="Your books history is empty - please read something :)"/> :
            <Grid container spacing={1}>
                {
                    booksHistory.map((b, index) => {
                        return (
                            <Grid item key={index}>
                                <Card className="card" style={{"width": "18rem"}}>
                                    <div>
                                        <h4>{b["BookName"]}</h4>
                                        <h6>Author: {b["Author"]}</h6>
                                        <h6>Available Copies: {b["Copies"]}</h6>
                                    </div>  
                                </Card> 
                            </Grid>
                        )
                    })
                }
            </Grid>
        }      
        </div>
    )
}

export default MyBooksHistory;