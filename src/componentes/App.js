import React, { useState } from 'react';
import Header from './Header';
import FormularioTareas from './FormularioTareas';
import ListaTareas from './ListaTareas';

//Creamos el componente App, el cual incluirá todos los demas componentes
const App = () => {

    const [tareas, setTareas] = useState([])

    const agregarTarea = (nuevaTarea) => {
        setTareas([...tareas, nuevaTarea]);
    }

    return ( 
        <>
            <div id='contenedorPrincipal'>
                <Header/>
                <FormularioTareas esNueva={true} agregarTarea={agregarTarea}/>
                <ListaTareas tareas={tareas}/>
            </div>
        </>
     );
}
 
export default App;