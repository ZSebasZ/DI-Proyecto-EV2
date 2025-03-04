import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";

const FormularioTareas = ({ esNueva, mostrarFormEdicion, modoEdicion, tareaEdicion, tareaId, dispatch }) => {

    const [tarea, setTarea] = useState(tareaEdicion || "");
    const [contadorTareas, setContadorTareas] = useState(1);
    const inputRef = useRef(null); // Creamos una referencia al input

    // Usamos useEffect para dar el foco cuando modoEdicion cambia a true
    useEffect(() => {
        if (modoEdicion) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 0);
        }
    }, [modoEdicion]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (tareaId === undefined) {
            if (tarea.trim()) {                
                dispatch({ tipo: "AGREGAR_TAREA", tarea: {id: contadorTareas, texto: tarea, completada: false} })
                setContadorTareas(contadorTareas + 1);
                setTarea("");
            }
        } else {
            dispatch({ tipo: "ACTUALIZAR_TAREA", tarea: { id: tareaId, texto: tarea } });
            mostrarFormEdicion();
        }
    };

    return (
        <div className='contenedorFormularioTareas'>
            <form action="" onSubmit={onSubmit}>
                {esNueva === true ? (
                    <div id='nuevaTarea'>
                        <input
                            type="text"
                            name="nueva_tarea"
                            id="nueva_tarea"
                            placeholder='Escribe una tarea'
                            value={tarea}
                            onChange={(e) => setTarea(e.target.value)}
                        />
                        <button type='submit'>
                            <FontAwesomeIcon icon={faSquarePlus} />
                        </button>
                    </div>
                ) : (
                    <div className='tareaForm'>
                        <>
                            {modoEdicion === true ? (
                                <>
                                    <input
                                        ref={inputRef} // Asignamos la referencia aquí
                                        id={tarea + tareaId}
                                        value={tarea}
                                        onChange={(e) => setTarea(e.target.value)}
                                    />
                                    <button type='submit' className='botones btnActualizar'>Actualizar</button>
                                </>
                            ) : null}
                            <button type='button' className='botones btnIconoEditar' onClick={mostrarFormEdicion}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
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

export default FormularioTareas;
