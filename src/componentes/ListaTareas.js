import React from 'react';
import Tarea from './Tarea';
const ListaTareas = ({tareas}) => {
    return (
        <>
            <div id='contenedorTareas'>
                {tareas.map((tarea) => (
                    <Tarea key={tarea.id} tarea={tarea}/>
                ))}
            </div>
        </>
     );
}
 
export default ListaTareas;