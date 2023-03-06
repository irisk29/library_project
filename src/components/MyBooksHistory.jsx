import React from "react";
import { Card } from "@mui/material";
import { useLocation } from "react-router-dom";
import SimpleHeader from "./SimpleHeader";
import NoDataMsg from "./NoDataMsg";

//the books I currently loaning and the books I read
function MyBooksHistory() {
    var books = useLocation();
    var booksHistory = books["state"];

    return (
        <div style={{"flexFlow": "column", "display": "flex", "height": "100%"}}>
        <SimpleHeader title="My Books History"/>
        {
            booksHistory.length === 0 ? 
            <NoDataMsg msg="Your books history is empty - please read something :)"/> :
            <div>
                <ul style={{"overflow": "auto", "height": "400px"}}>
                    {
                        booksHistory.map((b) => {
                            return (
                                <li key={b["bookID"]} style={{"display": "inline-block"}}>
                                    <Card className="card" style={{"width": "18rem", "display": "inline-block"}}>
                                        <div>
                                            <h4>{b["BookName"]}</h4>
                                            <h6>Author: {b["Author"]}</h6>
                                            <h6>Available Copies: {b["Copies"]}</h6>
                                        </div>  
                                    </Card>
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

export default MyBooksHistory;