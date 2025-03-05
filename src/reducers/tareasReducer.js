//Creamos el estado inicial de nuesta App
const estadoInicial = {
    tareas: [], //Un array de objetos de tareas (id, texto, completada)
    filtro: false //El filtro para mostrar las tareas (true/false)
};

//Creaamos la funcion reductora para gestionar el estado de nuesta App, que recibe 2 parametros
//El estado: que es el estado actual de App
//La accion: que es un objeto con la informacion necesario con la cual vamos a actualizar el estado de nuestra App
const tareasReducer = (estado, accion) => {
    switch (accion.tipo) { //Creamos un switch para realizar la accion correspondiente segun sea el caso
        case "AGREGAR_TAREA": //En el caso de AGREGAR_TAREA
            return {
                ...estado, //Copiamos el estado actual
                tareas: [...estado.tareas, accion.tarea] //Copiamos la lista de tareas y agregamos la nueva
            };
        case "ACTUALIZAR_TAREA": //En el caso de ACTUALIZAR_TAREA
            return {
                ...estado, //Copiamos el estado actual
                //Creamos una nueva lista de tareas utilizando map.
                //En caso de que la tarea coindica con el id de la tarea a actualizar, copiamos esa tarea y actualizamos la propiedad 'texto',
                //pero sino coincide, devolvemos la tarea que se esta recorriendo sin modificarla
                tareas: estado.tareas.map(tarea =>
                    tarea.id === accion.tarea.id
                        ? { ...tarea, texto: accion.tarea.texto } 
                        : tarea
                )
            };
        case "MARCAR_COMPLETADA": //En el caso de MARCAR_COMPLETADA
            return {
                ...estado, //Copiamos el estado actual
                //Creamos una nueva lista de tareas utilizando map.
                //En caso de que la tarea coindica con el id de la tarea a actualizar, copiamos esa tarea y actualizamos la propiedad 'completada',
                //pero sino coincide, devolvemos la tarea que se esta recorriendo sin modificarla
                tareas: estado.tareas.map(tarea =>
                    tarea.id === accion.tarea
                        ? { ...tarea, completada: !tarea.completada }
                        : tarea
                )
            };
        case "ELIMINAR_TAREA": //En el caso de ELIMINAR_TAREA
            return {
                ...estado, //Copiamos el estado actual
                //Creamos una nueva lista de tareas utilizando filter.
                //Solo nos quedamos con las tareas cuyo id no sea el mismo que se paso a traves del parametro accion
                tareas: estado.tareas.filter(tarea => tarea.id !== accion.tarea)
            };
        case "CAMBIAR_FILTRO": //En el caso de CAMBIAR_FILTRO
            return {
                ...estado, //Copiamos el estado actual
                filtro: !estado.filtro //Actualizamos la propiedad 'filtro' invirtiendo su valor actual
            };
        //Y por defecto, devolvemos el estado sin modificarlo
        default:
            return estado;
    }
};

//Exportamos el estadoInicial y funcion reductora tareasReducer
export {estadoInicial, tareasReducer};