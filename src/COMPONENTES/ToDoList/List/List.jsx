import React from "react";
import ListItem from "./ListItem";

const List= ()=>{
    return(
    <React.Fragment>
        <h3>Tareas</h3>
        <ul id="lista-tareas">
          <ListItem
          text="hola"/>  
        </ul>
    </React.Fragment>
        
    )
}
export default List;