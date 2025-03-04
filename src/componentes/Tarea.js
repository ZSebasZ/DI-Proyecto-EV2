import React, { useState } from 'react';
//Importamos el componente FontAwesomeIcon y el icono especifico que vamos a usa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import FormularioTareas from './FormularioTareas';
const Tarea = ({tarea, actualizarTarea, eliminarTarea, marcarTareaCompletada }) => {

    const [modoEdicion, setModoEdicion] = useState(false)

    const mostrarFormEdicion = () => {
        setModoEdicion(!modoEdicion)
    }



    return ( 
            <>
                <div className={modoEdicion === false ? "tarea" : "tareaEditable"}>
                    {tarea.completada === true ? (
                        <>
                            <button className='botones btnCheck' onClick={() => {marcarTareaCompletada(tarea.id)}}><FontAwesomeIcon icon={faSquareCheck} /></button>
                        </>
                    ): (
                        <>
                            <button className='botones btnCheck' onClick={() => {marcarTareaCompletada(tarea.id)}}><FontAwesomeIcon icon={faSquare} /></button>
                        </>
                    )}
                    {modoEdicion === false ? (
                        <>
                            <p>{tarea.texto}</p>
                            <FormularioTareas mostrarFormEdicion={mostrarFormEdicion} modoEdicion={modoEdicion} tareaId={tarea.id} eliminarTarea={eliminarTarea}/>
                        </>
                    ) : (
                        <>
                            <FormularioTareas mostrarFormEdicion={mostrarFormEdicion} modoEdicion={modoEdicion} tareaEdicion={tarea.texto} tareaId={tarea.id} actualizarTarea={actualizarTarea} eliminarTarea={eliminarTarea}/>
                        </>
                    )}
                    
                </div>
            </>
        )
}
 
export default Tarea;