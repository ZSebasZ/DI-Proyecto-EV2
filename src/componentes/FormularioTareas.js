import React, { useState, useRef, useEffect } from 'react'; //Importamos React y los hooks useState, useRef y useEffect
//Importamos el componente FontAwesomeIcon y los iconos especificos que vamos a usar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";

//Creamos el componente Header, el cual incluirá los formularios para agrear una nueva tareas y actualizar y/o eliminar una tarea
//Ademas de recibir 6 parametros, esNueva, mostrarFormEdicion, modoEdicion, tareaEdicion, tareaId y dispatch
const FormularioTareas = ({ esNueva, mostrarFormEdicion, modoEdicion, tareaEdicion, tareaId, dispatch }) => {

    //Creamo el hook useState para manejar el estado de la variable 'tarea'
    const [tarea, setTarea] = useState(tareaEdicion || "");

    //Creamo el hook useState para manejar el estado de la variable 'contadorTareas'
    const [contadorTareas, setContadorTareas] = useState(1);

    //Creamos el hook userRef para manejar una referencia a un objeto del DOM
    const inputRef = useRef(null); 

    //Usamos useEffect para dar el foco al objeto referido con el inputRef cuando modoEdicion cambia a true
    useEffect(() => {
        if (modoEdicion) {
            setTimeout(() => {
                inputRef.current.focus();
            }, 0);
        }
    }, [modoEdicion]);

    //Creamos una funcion para el envio del formulario
    const onSubmit = (e) => {
        e.preventDefault(); //Prevenimos el envio del formulario
        if (esNueva === true) { //Si esNueva es true, es porque estamos agregando una tarea nueva
            if (tarea.trim()) {                
                //Ejecutamos el dispatch, el 'tipo' correspondiente y la 'tarea' con los datos de la nueva tarea
                dispatch({ tipo: "AGREGAR_TAREA", tarea: {id: contadorTareas, texto: tarea, completada: false} })
                setContadorTareas(contadorTareas + 1); //Actualizamos el contador
                setTarea(""); //Reiniciamos el valor de la variable 'tarea'
            }
        } else { //De lo contrario, es porque estamos actualizando una tarea
            //Ejecutamos el dispatch, el 'tipo' correspondiente y la 'tarea' con los datos de la tarea a actualizar
            dispatch({ tipo: "ACTUALIZAR_TAREA", tarea: { id: tareaId, texto: tarea } });
            mostrarFormEdicion(); //Ejectamos la funcion pasada como parametro en el componente
        }
    };

    return (
        <div className='contenedorFormularioTareas'>
            <form action="" onSubmit={onSubmit}>
                {/*Si la tarea es nueva, mostramos el formulario para agregar una nueva tarea*/}
                {esNueva === true ? (
                    <div id='nuevaTarea'>
                        <input
                            type="text"
                            name="nueva_tarea"
                            id="nueva_tarea"
                            placeholder='Escribe una tarea'
                            value={tarea} //El valor es el de la variable 'tarea'
                            onChange={(e) => setTarea(e.target.value)} //Cada vez que cambie el valor del input, usamos el hook para acualizar el valor de variable 'tarea'
                        />
                        <button type='submit'>
                            <FontAwesomeIcon icon={faSquarePlus} />
                        </button>
                    </div>
                ) : (
                    <div className='tareaForm'>
                        <>
                            {/*Si el modoEdicion es true, mostramos un input y boton para actualizar la tarea*/}
                            {modoEdicion === true ? (
                                <>
                                    <input
                                        ref={inputRef} //Asignamos la referencia al hook useRef
                                        id={tarea + tareaId}
                                        value={tarea} //El valor es el de la variable 'tarea'
                                        onChange={(e) => setTarea(e.target.value)} //Cada vez que cambie el valor del input, usamos el hook para acualizar el valor de variable 'tarea'
                                    />
                                    <button type='submit' className='botones btnActualizar'>Actualizar</button>
                                </>
                            ) : null}
                            <button type='button' className='botones btnIconoEditar' onClick={mostrarFormEdicion}> {/*Cuando se haga click ejecutamos la funcion mostrarFormEdicion*/}
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                            {/*Al darle click al boton, ejecutamos el dispatch con el 'tipo' correspondiente y la 'tarea' con el id de la tarea correspondiente*/}
                            <button type='button' className='botones btnIconoEliminar' onClick={() => dispatch({ tipo: "ELIMINAR_TAREA", tarea: tareaId })}> 
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </>
                    </div>
                )}
            </form>
        </div>
    );
};

//Exportamos el componente FormularioTareas
export default FormularioTareas;
