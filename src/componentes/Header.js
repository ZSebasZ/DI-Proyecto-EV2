import React from 'react'; //Importamos React
//Importamos el componente FontAwesomeIcon y el icono especifico que vamos a usar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

//Creamos el componente Header, el cual solo incluirá el titulo de al aplicacion y el boton para filtrar
//Ademas de recibir 2 parametros, dispatch y filtro
const Header = ({ dispatch, filtro }) => {
    return (
        <>
            <header id="contenedorHeader">
                <h1>Lista de Tareas</h1>
                {/*Cuando se le haga click al boton, se ejecutará el dispatch con el valor del tipo correspondiente*/}
                <button onClick={() => dispatch({ tipo: "CAMBIAR_FILTRO" })}>
                    {/*Se muestra un texto diferente segun el valor que tenga el filtro en el estado de la App*/}
                    {filtro ? "Mostrar todas" : "No mostrar completadas"} <FontAwesomeIcon icon={faEyeSlash} />
                </button>
            </header>
        </>
    );
}

//Exportamos el componente Header
export default Header;