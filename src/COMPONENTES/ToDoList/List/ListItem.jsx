import React from "react";

const ListItem= ({text},{priority})=>{
    return(
        <React.Fragment>

            <li>{text}</li>
        </React.Fragment>
    )
}
export default ListItem;