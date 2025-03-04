import React from 'react';
//Importamos el componente FontAwesomeIcon y el icono especifico que vamos a usa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

//Creamos el componente Header, el cual solo incluirá el titulo de al aplicacion y el boton para filtrar
const Header = ({ dispatch, filtro }) => {
    return (
        <>
            <header id="contenedorHeader">
                <h1>Lista de Tareas</h1>
                <button onClick={() => dispatch({ tipo: "CAMBIAR_FILTRO" })}>
                    {filtro ? "Mostrar todas" : "No mostrar completadas"} <FontAwesomeIcon icon={faEyeSlash} />
                </button>
            </header>
        </>
    );
}

export default Header;