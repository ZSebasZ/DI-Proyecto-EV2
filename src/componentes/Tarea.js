import React, { useState } from 'react';
//Importamos el componente FontAwesomeIcon y el icono especifico que vamos a usa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import FormularioTareas from './FormularioTareas';
const Tarea = ({tarea}) => {

    const [modoEdicion, setModoEdicion] = useState(false)

    const mostrarFormEdicion = () => {
        setModoEdicion(!modoEdicion)
    }

    return ( 
            <>
                <div className='tarea'>
                    <button><FontAwesomeIcon icon={faSquare} /></button>
                    {modoEdicion === false ? (
                        <>
                            <p>{tarea.texto}</p>
                            <FormularioTareas mostrarFormEdicion={mostrarFormEdicion}/>
                        </>
                    ) : (
                        <>
                            <p>{tarea.texto} ooooo</p>
                            <FormularioTareas mostrarFormEdicion={mostrarFormEdicion}/>
                        </>
                    )}
                    
                </div>
            </>
        )
}
 
export default Tarea;