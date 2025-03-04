import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas, filtro, actualizarTarea, eliminarTarea, marcarTareaCompletada }) => {
    const tareasFiltradas = filtro ? tareas.filter((tarea) => tarea.completada === false) : tareas;

    return (
        <div id='contenedorTareas'>
            {tareasFiltradas.map((tarea) => (
                <Tarea 
                    key={tarea.id} 
                    tarea={tarea} 
                    actualizarTarea={actualizarTarea} 
                    eliminarTarea={eliminarTarea} 
                    marcarTareaCompletada={marcarTareaCompletada}
                />
            ))}
        </div>
    );
}
 
export default ListaTareas;
