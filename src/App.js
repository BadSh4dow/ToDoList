import React, {useState} from 'react';
import './App.css';
import Title from './COMPONENTES/ToDoList/Title/Title';
import Form from './COMPONENTES/ToDoList/Form/Form';
import List from './COMPONENTES/ToDoList/List/List';

function App() {
  const [lista, setLista] = useState([])

  const agregarALista =(()=>{
    setLista([...lista, {tarea: document.getElementById("tarea").value, prioridad: document.getElementById("prioridad").value}])
    document.getElementById("tarea").value = ""
    document.getElementById("tarea").focus()
  });

  return (
    <React.Fragment>
      <main>
        <Title
          text="Lista de Tareas!"
        />
        <Form eventoBoton={agregarALista} />
        <List renderLista={lista} />
      </main>
    </React.Fragment>
  );
}

export default App;

