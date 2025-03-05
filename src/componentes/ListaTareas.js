import React from 'react'; //Importamos React
import Tarea from './Tarea'; //Importamos el componente Tarea

//Creamos el componente ListaTareas que recibe 3 parametros, las tareas, el filtro y el dispatch
const ListaTareas = ({ tareas, filtro, dispatch }) => {
    //Creamos una constante con las tareas correspondientes, es decir, si el filtro es true, solo filtramos aquellas tareas que no estan completadas
    //de lo contrario, mostramos todas
    const tareasFiltradas = filtro ? tareas.filter((tarea) => tarea.completada === false) : tareas;

    return (
        <div id='contenedorTareas'>
            {/*Recorremos la constante con las tareas filtradas o no y retornamos un componente Tarea,
            al cual le asignamos su 'key', le pasamos la tarea y el dispatch*/}
            {tareasFiltradas.map((tarea) => (
                <Tarea 
                    key={tarea.id} 
                    tarea={tarea} 
                    dispatch={dispatch}
                />
            ))}
        </div>
    );
}

//Exportamos el componente ListaTareas
export default ListaTareas;
