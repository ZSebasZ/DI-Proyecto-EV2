import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas, filtro, dispatch }) => {
    const tareasFiltradas = filtro ? tareas.filter((tarea) => tarea.completada === false) : tareas;

    return (
        <div id='contenedorTareas'>
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
 
export default ListaTareas;
