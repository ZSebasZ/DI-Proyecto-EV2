import React, { useReducer } from 'react'; //Importamos React y el hook useReducer
import Header from './Header'; //Importamos el componente Header
import FormularioTareas from './FormularioTareas'; //Importamos el componente FormularioTareas
import ListaTareas from './ListaTareas'; //Importamos el componente ListaTareas
import {estadoInicial, tareasReducer} from '../reducers/tareasReducer'; //Importamos el estado inicial de la aplicacion y el reducer que se encargará de gestionar el estado de la app

//Creamos el componente App, el cual incluirá todos los demas componentes
const App = () => {
    //Creamos un hook userReducer con el estado inicial de la app y la funcion reductora
    const [estado, dispatch] = useReducer(tareasReducer, estadoInicial);

    //Hacemos un return de los componentes que tendrá el componene App
    return ( 
        <>
            <div id='contenedorPrincipal'>
                <Header dispatch={dispatch} filtro={estado.filtro}/> {/*El componente Header, al cual le pasamos el distpatch y el estado del filtro*/}
                <FormularioTareas esNueva={true} dispatch={dispatch}/> {/*El componente FormularioTareas, al cual le pasamos una propiedad esNueva y el distpatch*/}
                <ListaTareas tareas={estado.tareas} filtro={estado.filtro} dispatch={dispatch}/> {/*El componente ListaTareas, al cual le pasamos todas las tareas del estado actual, el estado del filtro y el dispatch*/}
            </div>
        </>
     );
}

//Exportamos el componente para pode usarlo en otro lugar
export default App;