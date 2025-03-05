import React, { useState } from 'react'; //Importamos React y el hook useState
//Importamos el componente FontAwesomeIcon y los iconos especificos que vamos a usar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import FormularioTareas from './FormularioTareas'; //Importamos el componente FormularioTareas

//Creamos el componente Tarea que recibe 2 parametros, una tarea y el dispatch
const Tarea = ({ tarea, dispatch }) => {

    //Creamos el hook useState para manejar el estado de la variable 'modoEdicion'
    const [modoEdicion, setModoEdicion] = useState(false)

    //Creamos una funcion que es ejecutada desde el componente FormularioTareas para hacer uso del hook useState de arriba
    const mostrarFormEdicion = () => {
        setModoEdicion(!modoEdicion)
    }

    return (
        <>
            <div className={modoEdicion ? "tareaEditable" : "tarea"}> {/*Cambiamos de clase segun el valor de la variable 'modoEdicion'*/}
                {/*Cuando se haga click en este boton se ejecutar´á el dispatch con el 'tipo' correspondiente y la 'tarea' con el id de la tarea correspondiente*/}
                <button className='botones btnCheck' onClick={() => dispatch({ tipo: "MARCAR_COMPLETADA", tarea: tarea.id })}>
                    <FontAwesomeIcon icon={tarea.completada ? faSquareCheck : faSquare} /> {/*Segun el valor de la propiedad 'completada', se muestrará un icono diferente*/}
                </button>

                {/*
                Segun el valor de la variable 'modoEdicion' se mostrará un contenido diferente, es este caso
                renderizamos el componente FormularioTareas al cual le pasamos los siguientes parametros: 
                'mostrarFormEdicion', 'modoEdicion', 'tarea.texto', 'tarea.id' y el 'dispatch'
                */}
                {modoEdicion ? (
                    <FormularioTareas
                        mostrarFormEdicion={mostrarFormEdicion}
                        modoEdicion={modoEdicion}
                        tareaEdicion={tarea.texto}
                        tareaId={tarea.id}
                        dispatch={dispatch}
                    />
                ) : (
                    //En caso contrario, renderizamos el mismo componente con los mismos parametros a excepcion de 'tarea.texto'
                    <>
                        <p>{tarea.texto}</p>
                        <FormularioTareas
                            mostrarFormEdicion={mostrarFormEdicion}
                            modoEdicion={modoEdicion}
                            tareaId={tarea.id}
                            dispatch={dispatch}
                        />
                    </>
                )}
            </div>
        </>
    )
}

//Exportamos el componente Tarea
export default Tarea;