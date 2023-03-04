import { Button, colors } from "@mui/material";
import React, { useState } from "react";
import { Form, FormControl, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServerCommunicator from "../ServerCommunicator";

function EditBookForm(props)
{   
    var [book, setBook] = useState({"bookName": props.bookName, "author": props.author, "copies": props.copies});

    async function handleSubmit(event)
    {
        await new ServerCommunicator().editBook(props.bookID, book.bookName, book.author, book.copies).catch(() => "Something went wrong!");
        //event.preventDefault(); --> prevents navigation
    }

    function handleChange(event)
    {
        var {name, value} = event.target;
        setBook((prev) => ({...prev, [name]: value}));
    }

    function checkInputs()
    {
        if(book.bookName.length === 0 || book.author.length === 0) return <h6>Please enter full name and/or ID</h6>;
        else if(book.copies < 0) return <h6>Please enter positive number of copies</h6>;
        return <Link to="/books">
                    <Button type="submit" onClick={async (event) => await handleSubmit(event)} variant="contained" size="small" style={{"backgroundColor": colors.amber[500]}}>Submit</Button>
               </Link>;
    }

    return (
        <div>
            <div className="div-form">
                <Form>
                    <FormGroup controlId="formBookName">
                        <Form.Label style={{ "marginRight": "1.2rem" }}>Book Name</Form.Label> 
                        <FormControl type="text" name="bookName" value={book.bookName} onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup controlId="formAuthor" style={{"marginTop": "1rem", "marginBottom": "1rem"}}>
                        <Form.Label style={{ "marginRight": "0.3rem" }}>Book's Author</Form.Label> 
                        <FormControl type="text" name="author" value={book.author} onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup controlId="formCopies" style={{"marginTop": "1rem", "marginBottom": "2rem"}}>
                        <Form.Label style={{ "marginRight": "0.3rem" }}>Book's Copies</Form.Label> 
                        <FormControl type="number" maxLength="6" name="copies" value={book.copies} onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        {checkInputs()}
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}

export default EditBookForm;