import React from "react";

const Form = (props)=>{
    return(
      <form action={"#"}>
      <input id="tarea" type="text" name="tarea" placeholder="Descripción de la tarea"/>
        <select name="prioridad" id="prioridad">
          <option value="">Prioridad</option>
          <option value="priorriorididad-baja">baja</option>
          <option value="pad-media">media</option>
          <option value="prioridad-alta">alta</option>
        </select>
      <button id="agregar" type="button" onClick={props.eventoBoton}>Agregar!</button>
    </form>
    )
}
export default Form;




