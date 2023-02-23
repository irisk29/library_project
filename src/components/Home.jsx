import React from "react";
import ButtonBases from "./HomeButton";

function Home(){
   return (
    <div>
        <h1 style={{"display": "flex", "marginLeft": "40%", "marginTop": "10%", "fontWeight": "800", "fontSize": "300%"}}>My Library</h1> 
        <ButtonBases />
    </div>
   )
}

export default Home;