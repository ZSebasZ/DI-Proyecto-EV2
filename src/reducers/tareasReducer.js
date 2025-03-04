// Estado inicial
const estadoInicial = {
    tareas: [],
    filtro: false
};

// Reducer para manejar el estado de las tareas
const tareasReducer = (estado, accion) => {
    switch (accion.tipo) {
        case "AGREGAR_TAREA":            
            return {
                ...estado,
                tareas: [...estado.tareas, accion.tarea]
            };
        case "ACTUALIZAR_TAREA":
            return {
                ...estado,
                tareas: estado.tareas.map(tarea =>
                    tarea.id === accion.tarea.id
                        ? { ...tarea, texto: accion.tarea.texto }
                        : tarea
                )
            };
        case "MARCAR_COMPLETADA":
            return {
                ...estado,
                tareas: estado.tareas.map(tarea =>
                    tarea.id === accion.tarea
                        ? { ...tarea, completada: !tarea.completada }
                        : tarea
                )
            };
        case "ELIMINAR_TAREA":
            return {
                ...estado,
                tareas: estado.tareas.filter(tarea => tarea.id !== accion.tarea)
            };
        case "CAMBIAR_FILTRO":
            return {
                ...estado,
                filtro: !estado.filtro
            };
        default:
            return estado;
    }
};

export {estadoInicial, tareasReducer};