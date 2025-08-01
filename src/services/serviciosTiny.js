//fetch permite consumir rest API, en caso de manejar json se deben hacer dos llamadas a then, la primera es la solicitud en sí, y
//la segunda es para llamar al método .json de la primer solicitud

export const obtenerTareasAPI = async () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => json);
}



export const eliminarTareasAPI = async (idBorrar) => {

    return fetch(`https://jsonplaceholder.typicode.com/todos/${idBorrar}`, {
        method: 'DELETE',
    }).then(response => response.json())
        .then(json => json);
}



export const agregarTareasAPI = async (nuevaTarea) => {
    return fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(nuevaTarea),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => json);

}



