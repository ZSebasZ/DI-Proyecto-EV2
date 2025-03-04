import React, { useReducer } from 'react';
import Header from './Header';
import FormularioTareas from './FormularioTareas';
import ListaTareas from './ListaTareas';
import {estadoInicial, tareasReducer} from '../reducers/tareasReducer';

//Creamos el componente App, el cual incluirá todos los demas componentes
const App = () => {
    const [estado, dispatch] = useReducer(tareasReducer, estadoInicial);

    return ( 
        <>
            <div id='contenedorPrincipal'>
                <Header dispatch={dispatch} filtro={estado.filtro}/>
                <FormularioTareas esNueva={true} dispatch={dispatch}/>
                <ListaTareas tareas={estado.tareas} filtro={estado.filtro} dispatch={dispatch}/>
            </div>
        </>
     );
}
 
export default App;