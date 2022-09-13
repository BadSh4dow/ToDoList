import React from "react";

const List= (props)=>{
    return(
    <React.Fragment>
        <h3>Tareas</h3>
        <ul id="lista-tareas">
            {
                props.renderLista.map((item, key) =>{
                    return <li key={key}>{item.tarea}{item.prioridad}</li>
                })
            }
        </ul>
    </React.Fragment>
    )
}
export default List;