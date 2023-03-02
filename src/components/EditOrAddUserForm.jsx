import { Button, colors } from "@mui/material";
import React, { useState } from "react";
import { Form, FormControl, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function AddOrEditUser(props)
{   
    var [newUser, setNewUser] = useState({"fullName": props.name, "personalID": props.pID});

    async function handleSubmit(event)
    {
        //length === 0 means this is create mode because the user does not have userID upon creation
        props.userID.length === 0 ? await props.userHandle(newUser.fullName, newUser.personalID) :
                                    await props.userHandle(newUser.fullName, newUser.personalID, props.userID);
        //event.preventDefault(); --> prevents navigation
    }

    function handleChange(event)
    {
        var {name, value} = event.target;
        setNewUser((prev) => ({...prev, [name]: value}));
    }

    function checkInputs()
    {
        if(newUser.fullName.length === 0 || newUser.personalID.length === 0) return false;
        return true;
    }

    return (
        <div>
            <div className="div-form">
                <Form>
                    <FormGroup controlId="formUserName">
                        <Form.Label style={{ "marginRight": "1rem" }}>Full Name</Form.Label> 
                        <FormControl type="text" name="fullName" value={newUser.fullName} onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup controlId="formPersonalID" style={{"marginTop": "1rem", "marginBottom": "2rem"}}>
                        <Form.Label style={{ "marginRight": "0.3rem" }}>Personal ID</Form.Label> 
                        <FormControl type="text" name="personalID" value={newUser.personalID} onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                    {checkInputs() ? 
                            <Link to="/users">
                                <Button type="submit" onClick={async (event) => await handleSubmit(event)} variant="contained" size="small" style={{"backgroundColor": colors.amber[500]}}>Submit</Button>
                            </Link>
                         : <h6>Please enter full name and/or ID</h6>}
                         
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}

export default AddOrEditUser;