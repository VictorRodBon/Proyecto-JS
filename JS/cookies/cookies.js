function generarCookie(valor) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (10 * 60 * 1000)); // 10 minutos en milisegundos
    const expiracion = "expires=" + fecha.toUTCString();
    document.cookie = `cargo=${valor}; ${expiracion}; path=/`;
}

function getCookie(nombre) {
    const valor = `; ${document.cookie}`;
    
    const partes = valor.split(`; ${nombre}=`);
    if (partes.length === 2) {
        return partes.pop().split(';').shift();
    }
    return null;
}

function borrarCookie(){
    // Borrar cookie llamada "usuario"
    document.cookie = "cargo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export { generarCookie, getCookie, borrarCookie };