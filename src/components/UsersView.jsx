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
                        <Grid item>
                            <UserPreview userName={u.userName} personalID={u.personalID} id={index}/>
                        </Grid>)
                })
            }
        </Grid>
    );
}

export default UsersView;