import React from "react";
import { Grid } from "@mui/material";
import UserPreview from "./UserPreview";

function UsersView(props)
{
    return (
        <Grid container spacing={1}>
            {
                props.users.map((u, index) => {
                    return (
                        <Grid item key={index}>
                            <UserPreview userName={u["userName"]} personalID={u["personalID"]} id={u["userID"]}/>
                        </Grid>)
                })
            }
        </Grid>
    );
}

export default UsersView;