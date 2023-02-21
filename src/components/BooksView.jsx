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
                        <Grid item>
                            <BookPreview bookName={b.bookName} author={b.author} numOfAvailableCopies={b.copies} id={index}/>
                        </Grid>)
                })
            }
        </Grid>
    );
}

export default BooksView;