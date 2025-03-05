import React from 'react'; //Importamos React
import Tarea from './Tarea'; //Importamos el componente Tarea

//Creamos el componente ListaTareas que recibe 3 parametros, las tareas, el filtro y el dispatch
const ListaTareas = ({ tareas, filtro, dispatch }) => {
    //Creamos una constante con las tareas correspondientes, es decir, si el filtro es true, solo filtramos aquellas tareas que no estan completadas
    //de lo contrario, mostramos todas
    const tareasFiltradas = filtro ? tareas.filter((tarea) => tarea.completada === false) : tareas;

    return (
        <div id='contenedorTareas'>
            {/*En caso de que 'tareas' tenga tareas entramos por este bloque*/}
            {tareas.length > 0 ? (
                <>
                    {/*En caso de que 'tareasFiltradas' tenga tareas entramos por este bloque*/}
                    {tareasFiltradas.length > 0 ? (
                        <>
                            {/*Recorremos la constante con las tareas filtradas y retornamos un componente Tarea,
                            al cual le asignamos su 'key', le pasamos la tarea y el dispatch*/}
                            {tareasFiltradas.map((tarea) => (
                                <Tarea
                                    key={tarea.id}
                                    tarea={tarea}
                                    dispatch={dispatch}
                                />
                            ))}
                        </>
                    ) : (
                        //De lo contrario, mostramos este mensaje
                        <>
                            <div className='containerNoTareas filtradas'>
                                <p>Si no ves tus tareas es porque todas estan completadas y el filtro solo esta mostrando las no completadas</p>
                            </div>
                        </>
                    )}
                </>
            ) : (
                //De lo contrario, mostramos este mensaje
                <>
                <div className='containerNoTareas'>
                    <p>Aun no tienes tareas</p>
                </div>
                </>
            )}


        </div>
    );
}

//Exportamos el componente ListaTareas
export default ListaTareas;
