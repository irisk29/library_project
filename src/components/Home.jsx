import React from "react";
import { Link } from "react-router-dom";
import ButtonBases from "./HomeButton";

function Home(){
   return (
    <div>
        <h1>Hello, this is my library app</h1> 
        <Link to="/users">
          <button variant="outlined">
            Manage Users
          </button>
        </Link>
        <Link to="/books">
          <button variant="outlined">
            Manage Books
          </button>
        </Link>
        <ButtonBases />
    </div>
   )
}

export default Home;