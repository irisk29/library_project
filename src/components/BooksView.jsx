import React from "react";
import { Grid } from "@mui/material";
import BookPreview from "./BookPreview";

function BooksView(props)
{
    return (
        <Grid container spacing={1}>
            {
                props.books.map((b, index) => {
                    return (
                        <Grid item key={index}>
                            <BookPreview bookName={b["BookName"]} author={b["Author"]} numOfAvailableCopies={b["Copies"]} id={b["ID"]}/>
                        </Grid>)
                })
            }
        </Grid>
    );
}

export default BooksView;