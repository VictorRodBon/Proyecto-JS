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
function actualizarLista(nombre, nuevaLista) {
    localStorage.setItem(nombre, JSON.stringify(nuevaLista));
}


export { almacenarLista, obtenerLista, borrarLista, actualizarLista };