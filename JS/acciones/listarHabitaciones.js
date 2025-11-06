import { obtenerLista } from "../acciones/trabajarConListas.js";
let pagina_actual = 1;
let habitaciones_pagina = 15;

function mostrarHabitaciones(campo, orden) {
    let datos = [...obtenerLista("listaHabitaciones")];

    if (orden == "asc") {
        datos.sort((a, b) => {
            if (typeof a[campo] === "string") {
                return a[campo].localeCompare(b[campo]);
            } else {
                return a[campo] - b[campo];
            }
        });
    } else {
        datos.sort((a, b) => {
            if (typeof b[campo] === "string") {
                return b[campo].localeCompare(a[campo]);
            } else {
                return b[campo] - a[campo];
            }
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

function actualizarTabla() {
    let campo = document.getElementById("habitacion").value;
    document.getElementById("lista-habitaciones").innerHTML = "";
    mostrarHabitaciones(campo, orden());

    document.getElementById("pagina-indicador").textContent = `Página ${pagina_actual}`;
}

window.onload = () => {
    let select = document.getElementById("habitacion");
    let ascRadio = document.getElementById("asc");
    let descRadio = document.getElementById("desc");

    actualizarTabla();

    select.addEventListener("change", () =>{
        pagina_actual = 1;
        actualizarTabla();
    });
    ascRadio.addEventListener("change", () =>{
        pagina_actual = 1;
        actualizarTabla();
    });
    descRadio.addEventListener("change", () =>{
        pagina_actual = 1;
        actualizarTabla();
    });
};

document.getElementById("siguiente").addEventListener("click", ()=>{
    let total_habitaciones = obtenerLista("listaHabitaciones").length;
    let max_paginas = Math.ceil(total_habitaciones / habitaciones_pagina);
    if (pagina_actual<max_paginas){
        pagina_actual++;
        actualizarTabla();
    }
});

document.getElementById("anterior").addEventListener("click", ()=>{
    if (pagina_actual>1){
        pagina_actual--;
        actualizarTabla();
    }
});

export { mostrarHabitaciones };

