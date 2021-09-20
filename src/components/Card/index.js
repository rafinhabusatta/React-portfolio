import React from "react";
import "./style.css"

function Card({title}) {
    return (
        // props.map(() => (
        //     <div className="card-body">
        //         <h3>{title}</h3>
        //     </div> 
        // ))
        <div className="card-body">
            <h3>{title}</h3>
        </div>
    )
}

export default Card;