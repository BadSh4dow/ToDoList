import React from "react";
import Title from "./Title/Title";
import Form from "./Form/Form";
import List from "./List/List";



const ToDoList =()=>{
    return(
        <main>
            <Title
            text="Lista de Tareas!"
        />
        <Form/>
        <List/>
        </main>
    )
}
export default ToDoList;