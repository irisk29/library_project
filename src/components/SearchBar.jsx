import React, { useState } from "react";

function SearchBar(props) {
    const [keyword, setKeyword] = useState("");

    return (
        <input className="round-searchbar" value={keyword} placeholder={props.placeHolder} 
        onChange={(event) => {
            setKeyword(event.target.value);
            props.onChangeFunc(event.target.value)
        }}/>
    );
}

export default SearchBar;