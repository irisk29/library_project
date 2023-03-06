import React from "react";

function NoDataMsg(props)
{
    return (
        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "5rem"}}>
            <p style={{"fontWeight": "800"}}>{props.msg}</p>
        </div>
    );
}

export default NoDataMsg;