import React, { useState } from "react";
import SearchBar from "./SearchBar";
import HomeButton from "./ReturnToHomePageButton";

function BooksHeader(props)
{
    return (
        <header>
            <h1 style={{"display": 'inline-block'}}>Books Managment</h1>
            <div style={{"textAlign": 'right', "position": "absolute", "top": "2vh", "right": "1vw"}}>
                <SearchBar onChangeFunc={props.onChangeFunc} placeHolder="Search A Book"/>
                <HomeButton/>
            </div>
        </header>
    );
}

export default BooksHeader;