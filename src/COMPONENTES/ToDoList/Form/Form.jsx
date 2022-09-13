import React from "react";
import ListItem from "../List/ListItem";
import List from "../List/List";

const Form = ()=>{
    return(
        <form>
      <input id="tarea" type="text" name="tarea" placeholder="Descripción de la tarea"/>
      <select name="prioridad" id="prioridad">
        <option value="" disabled selected>Prioridad</option>
        <option value="prioridad-baja">baja</option>
        <option value="prioridad-media">media</option>
        <option value="prioridad-alta">alta</option>
      </select>
      <button id="agregar" onClick={()=>{
        const New = <ListItem text= {document.getElementById("tarea").TextContent}
                  />
        document.getElementById("lista-tareas").appendChild(New)    
      }}>Agregar!</button>
    </form>
    )
}
export default Form;