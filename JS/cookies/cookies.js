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

export { generarCookie, getCookie };