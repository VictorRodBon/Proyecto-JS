// almacenar lista
function almacenarLista(nombre,lista){
    localStorage.setItem(nombre, JSON.stringify(lista));
}

// obtener lista
function obtenerLista(nombre) {
    return JSON.parse(localStorage.getItem(nombre));
}

export { almacenarLista, obtenerLista };