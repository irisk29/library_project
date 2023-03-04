import React from "react";
import { useParams } from "react-router-dom";
import EditBookForm from "./EditBookForm";
import SimpleHeader from "./SimpleHeader";

function EditBook()
{
    var {bookName, author, copies, bookID} = useParams();

    return (
        <div>
            <SimpleHeader title="Book Edit" />
            <EditBookForm bookName={bookName} author={author} copies={copies} bookID={bookID}/>
        </div>
        
    )
}

export default EditBook;