import React, { useState } from 'react';
import Header from './Header';
import FormularioTareas from './FormularioTareas';
import ListaTareas from './ListaTareas';

//Creamos el componente App, el cual incluirá todos los demas componentes
const App = () => {

    const [tareas, setTareas] = useState([])
    const [filtro, setFiltro] = useState(false)

    const agregarTarea = (nuevaTarea) => {
        setTareas([...tareas, nuevaTarea]);
    }

    const actualizarTarea = (id, nuevoTexto) => {
        const tareasActualizadas = tareas.map((tarea) => {
            if (tarea.id === id) {
                // Si la tarea tiene el ID que recibimos, actualizamos su texto
                return { ...tarea, texto: nuevoTexto };
            }
            return tarea; // De lo contrario, no modificamos la tarea
        });

        setTareas(tareasActualizadas); // Actualizamos el estado con las tareas modificadas
    };

    const marcarTareaCompletada =(id) => {
        const tareasActualizadas = tareas.map((tarea) => {
            if (tarea.id === id) {
                // Si la tarea tiene el ID que recibimos, actualizamos su texto
                return { ...tarea, completada: !tarea.completada };
            }
            return tarea; // De lo contrario, no modificamos la tarea
        });

        setTareas(tareasActualizadas); // Actualizamos el estado con las tareas modificadas
    };

    const eliminarTarea = (id) => {
        const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
        setTareas(nuevasTareas);
    };

    const filtroTareas = () => {
        setFiltro(!filtro)
    }


    return ( 
        <>
            <div id='contenedorPrincipal'>
                <Header establecerFiltro={filtroTareas} filtro={filtro}/>
                <FormularioTareas esNueva={true} agregarTarea={agregarTarea}/>
                <ListaTareas tareas={tareas} filtro={filtro} actualizarTarea={actualizarTarea} eliminarTarea={eliminarTarea} marcarTareaCompletada={marcarTareaCompletada}/>
            </div>
        </>
     );
}
 
export default App;