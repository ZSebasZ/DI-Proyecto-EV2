import React, { useState } from 'react';
//Importamos el componente FontAwesomeIcon y el icono especifico que vamos a usa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import FormularioTareas from './FormularioTareas';
const Tarea = ({ tarea, dispatch }) => {

    const [modoEdicion, setModoEdicion] = useState(false)

    const mostrarFormEdicion = () => {
        setModoEdicion(!modoEdicion)
    }

    return (
        <>
            <div className={modoEdicion ? "tareaEditable" : "tarea"}>
                <button className='botones btnCheck' onClick={() => dispatch({ tipo: "MARCAR_COMPLETADA", tarea: tarea.id })}>
                    <FontAwesomeIcon icon={tarea.completada ? faSquareCheck : faSquare} />
                </button>

                {modoEdicion ? (
                    <FormularioTareas
                        mostrarFormEdicion={mostrarFormEdicion}
                        modoEdicion={modoEdicion}
                        tareaEdicion={tarea.texto}
                        tareaId={tarea.id}
                        dispatch={dispatch}
                    />
                ) : (
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

export default Tarea;