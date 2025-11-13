import { obtenerLista } from "../acciones/trabajarConListas.js";
let pagina_actual = 1;
let habitaciones_pagina = 15;
let campoSeleccionado = "numero_habitacion";
let boton_ordenar = document.querySelectorAll(".boton-ordenar");

function mostrarHabitaciones(campo, orden) {
    let datos = [...obtenerLista("listaHabitaciones")];

    if (orden == "asc") {
        datos.sort((a, b) => {
            let resultado;
            if (typeof a[campo] === "string") {
                resultado = a[campo].localeCompare(b[campo]);
            } else {
                resultado = a[campo] - b[campo];
            }

            if (resultado === 0) {
                resultado = a["numero_habitacion"] - b["numero_habitacion"];
            }

            return resultado;
        });

    } else {
        datos.sort((a, b) => {
            let resultado;
            if (typeof a[campo] === "string") {
                resultado = b[campo].localeCompare(a[campo]);
            } else {
                resultado = b[campo] - a[campo];
            }

            if (resultado === 0) {
                resultado = a["numero_habitacion"] - b["numero_habitacion"];
            }

            return resultado;
        });
    }

    // Calcular rango de habitaciones a mostrar
    const inicio = (pagina_actual - 1) * habitaciones_pagina;
    const fin = inicio + habitaciones_pagina;
    const paginaDatos = datos.slice(inicio, fin);

    let contenido = "";

    paginaDatos.forEach(habitacion => {
        contenido += `
            <tr>
                <td>${habitacion.numero_habitacion}</td>
                <td>${habitacion.planta}</td>
                <td>${habitacion.camas}</td>
                <td>${habitacion.numero_huespedes}</td>
                <td>${habitacion.precio}€</td>
                <td>${habitacion.estado}</td>
                <td><button class="enlace" onclick="window.location.href='descripcionHabitacion.html?id=${habitacion.numero_habitacion}'">Habitacion${habitacion.numero_habitacion}</button></td>
            </tr>
            `;
    });

    document.getElementById("lista-habitaciones").insertAdjacentHTML("beforeend", contenido);
}

function orden() {
    if (document.getElementById("asc").checked) {
        return "asc"
    } else {
        return "desc"
    }
}

function actualizarTabla(campo) {
    document.getElementById("lista-habitaciones").innerHTML = "";
    mostrarHabitaciones(campo, orden());

    document.getElementById("pagina-indicador").textContent = `Página ${pagina_actual}`;
}

window.onload = () => {
    document.getElementById("asc").checked=true;
    actualizarTabla(campoSeleccionado);
};



//for para poder sacar el valor por el que quieres ordenar la tabla
boton_ordenar.forEach((boton)=>{
    boton.addEventListener("click",()=>{
        campoSeleccionado = boton.value;
        actualizarTabla(campoSeleccionado);
    })
})

document.getElementById("buscar").addEventListener("click", ()=>{
    let ordena_por = document.getElementById("habitacion").value;
    let valor = document.getElementById("valor").value;
    let datos = [... obtenerLista("listaHabitaciones")];
    let contenido = ""
    document.getElementById("lista-habitaciones").innerHTML = "";

        datos.forEach(habitacion => {
            if (habitacion[ordena_por].toString() == valor){
                contenido += `
                <tr>
                    <td>${habitacion.numero_habitacion}</td>
                    <td>${habitacion.planta}</td>
                    <td>${habitacion.camas}</td>
                    <td>${habitacion.numero_huespedes}</td>
                    <td>${habitacion.precio}€</td>
                    <td>${habitacion.estado}</td>
                    <td><button class="enlace" onclick="window.location.href='descripcionHabitacion.html?id=${habitacion.numero_habitacion}'">Habitacion${habitacion.numero_habitacion}</button></td>
                </tr>
                `;
            }
        });

    document.getElementById("lista-habitaciones").insertAdjacentHTML("beforeend", contenido);

})

document.getElementById("siguiente").addEventListener("click", ()=>{
    let total_habitaciones = obtenerLista("listaHabitaciones").length;
    let max_paginas = Math.ceil(total_habitaciones / habitaciones_pagina);
    if (pagina_actual<max_paginas){
        pagina_actual++;
        actualizarTabla(campoSeleccionado);
    }
});

document.getElementById("anterior").addEventListener("click", ()=>{
    if (pagina_actual>1){
        pagina_actual--;
        actualizarTabla(campoSeleccionado);
    }
});

export { mostrarHabitaciones };