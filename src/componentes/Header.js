import React from 'react';
//Importamos el componente FontAwesomeIcon y el icono especifico que vamos a usa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

//Creamos el componente Header, el cual solo incluirá el titulo de al aplicacion y el boton para filtrar
const Header = ({ establecerFiltro, filtro }) => {
    return ( 
        <>
            <header id='contenedorHeader'>
                <h1>Lista de Tareas</h1>
                { filtro === false ? (
                    <button onClick={() => {establecerFiltro()}}>No mostrar completadas <FontAwesomeIcon icon={faEyeSlash} /></button>
                ) : (
                    <button onClick={() => {establecerFiltro()}}>Mostrar completadas y no completadas <FontAwesomeIcon icon={faEyeSlash} /></button>
                )}
            </header>
        </>
     );
}
 
export default Header;