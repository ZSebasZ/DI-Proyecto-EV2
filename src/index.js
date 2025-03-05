import React from 'react'; //Importamos React
import ReactDOM from 'react-dom/client'; //Importamos ReactDOM para poder renderizar los componentes de nuesta App
import "./css/index.css"//Importamos el .css de nuesta app
import App from './componentes/App'; //Importamos el componente App

//Creamos el punto de entrada donde React va a montar nuestra App, que será en el elemento con id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

//Ejecutamos la funcion render para poder renderizar los componentes dentro del contenedor que hemos definido arriba
root.render(
  //Usamos este wrapper para poder ver los errores o problemas de nuesta App
  <React.StrictMode>
    {/*Renderizamos el componente App*/}
    <App />
  </React.StrictMode>
);
