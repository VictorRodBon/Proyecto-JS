// almacenar lista
function almacenarLista(nombre,lista){
    const existente = localStorage.getItem(nombre);
    if (!existente) {
        localStorage.setItem(nombre, JSON.stringify(lista));
    }
}

// obtener lista
function obtenerLista(nombre) {
    return JSON.parse(localStorage.getItem(nombre));
}

// borrar lista
function borrarLista(){
    localStorage.clear();
}

// actualizar lista
function actualizarLista(nombre, lista) {
    localStorage.setItem(nombre, JSON.stringify(lista));
}

// obtener maximo
function obtenerMaximo(lista, campo) {
    return Math.max(...lista.map(e => e[campo]));
}


export { almacenarLista, obtenerLista, borrarLista, actualizarLista, obtenerMaximo };