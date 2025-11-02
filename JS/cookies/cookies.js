function generarCookie(valor) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (10 * 60 * 1000)); // 10 minutos en milisegundos
    const expiracion = "expires=" + fecha.toUTCString();
    document.cookie = `cargo=${valor}; ${expiracion}; path=/`;
}

export { generarCookie };