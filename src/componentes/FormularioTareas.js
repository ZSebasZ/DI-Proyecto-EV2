import React, { useState } from 'react';
//Importamos el componente FontAwesomeIcon y el icono especifico que vamos a usa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faPenToSquare,  faXmark } from "@fortawesome/free-solid-svg-icons";
const FormularioTareas = ({ esNueva, agregarTarea, mostrarFormEdicion }) => {

    const [tarea, setTarea] = useState("")
    const [contadorTareas, setContadorTareas] = useState(1)

    const onSubmit = (e) => {
        e.preventDefault();
        if(tarea.trim()) {
            agregarTarea({id: contadorTareas, texto: tarea, completada: false})
            setContadorTareas(contadorTareas+1)
            setTarea("")
        }
    };


    return (
        <>
            <div className='contenedorFormularioTareas'>
                <form action="" onSubmit={onSubmit}>
                    {esNueva === true ? (
                        <div id='nuevaTarea'>
                            
                            <input type="text" name="nueva_tarea" id="nueva_tarea" placeholder='Escribe una tarea' value={tarea} onChange={(e) => {setTarea(e.target.value)}}></input>
                            <button type='submit'><FontAwesomeIcon icon={faSquarePlus} /></button>
                            
                        </div>
                    ) : (
                        
                        <div className='tareaForm'>
                            <button className='botones btnIconoEditar' onClick={() => {mostrarFormEdicion()}}><FontAwesomeIcon icon={faPenToSquare} /></button>
                            <button className='botones btnIconoEliminar' onClick={{}}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                    )}
                </form>
            </div>
        </>
    );
}

export default FormularioTareas;