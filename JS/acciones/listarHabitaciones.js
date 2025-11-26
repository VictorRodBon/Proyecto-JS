import { obtenerLista } from "../acciones/trabajarConListas.js";
import { getCookie } from "../cookies/cookies.js";

let pagina_actual = 1;
let habitaciones_pagina = 15;
let campoSeleccionado = "numero_habitacion";
let boton_ordenar = document.querySelectorAll(".boton-ordenar");
let boton_quitar_filtro = false;
let boton_buscar = false;


//crea la tabla de las habitaciones
function mostrarHabitaciones(campo, orden) {
    let datos = [...obtenerLista("listaHabitaciones")];

    //ordena los datos de forma ascendente
    if (orden == "asc") {
        datos.sort((a, b) => {
            let resultado;
            if (typeof a[campo] === "string") {
                resultado = a[campo].localeCompare(b[campo]);
            } else {
                resultado = a[campo] - b[campo];
            }
            //ordena tambien por numero de habitacion
            if (resultado === 0) {
                resultado = a["numero_habitacion"] - b["numero_habitacion"];
            }

            return resultado;
        });

    //ordenar los datos de forma descendente
    } else {
        datos.sort((a, b) => {
            let resultado;
            if (typeof a[campo] === "string") {
                resultado = b[campo].localeCompare(a[campo]);
            } else {
                resultado = b[campo] - a[campo];
            }
            //ordena tambien por numero de habitacion
            if (resultado === 0) {
                resultado = a["numero_habitacion"] - b["numero_habitacion"];
            }

            return resultado;
        });
    }

    // calcular rango de habitaciones a mostrar
    const inicio = (pagina_actual - 1) * habitaciones_pagina;
    const fin = inicio + habitaciones_pagina;
    const paginaDatos = datos.slice(inicio, fin);

    let contenido = "";

    // crea la tabla con las habitaciones
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

//indica en que orden vas a ordenar la tabla
function orden() {
    if (document.getElementById("asc").checked) {
        return "asc"
    } else {
        return "desc"
    }
}

// actualiza la tabla con las habitaciones que correspondan
function actualizarTabla(campo) {
    if (boton_quitar_filtro == true){
        document.getElementById("quitar-filtro").remove();
        boton_quitar_filtro = false;
    }
    
    document.getElementById("lista-habitaciones").innerHTML = "";
    mostrarHabitaciones(campo, orden());

    document.getElementById("pagina-indicador").textContent = `Página ${pagina_actual}`;
}

//
window.onload = () => {
    //marca por defecto orden ascendente
    document.getElementById("asc").checked=true;
    actualizarTabla(campoSeleccionado);

     //se comprueba si existe cargo y se configura el menu
    let login=getCookie('cargo');
    if (login != null) {
        login = "logout";
    } else {
        login = "login";
    }
    //se inserta el menu
    document.getElementsByTagName('header')[0].insertAdjacentHTML("afterbegin", "<mi-menu id='menu' login="+login+"></mi-menu>");
};



//for para poder sacar el valor por el que quieres ordenar la tabla
boton_ordenar.forEach((boton)=>{
    boton.addEventListener("click",()=>{
        campoSeleccionado = boton.value;
        actualizarTabla(campoSeleccionado);
    })
})
//pulsando en el boton de buscar crea la tabla con los datos que ha encontrado
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
    //compruebas que el boton para eleminar el filtro no esta puesto en el HTML
    if (boton_quitar_filtro == false){

        document.getElementById("asc-desc").insertAdjacentHTML("afterend", '<button id="quitar-filtro">Quitar filtro de busqueda</button>');
        boton_quitar_filtro = true;

        document.getElementById("quitar-filtro").addEventListener("click", ()=>{
            actualizarTabla(campoSeleccionado);
            //se vuelve a mostrar los elementos de paginacion
            document.getElementById("paginacion").style.display = "inline-block";
        });
    }
    //se quita los elementos de paginacion cuando se buscar
    document.getElementById("paginacion").style.display = "none";
 
})

//al pulsar en el boton de siguiente te muestra la pagina siguiente con las habitaciones
document.getElementById("siguiente").addEventListener("click", ()=>{
    let total_habitaciones = obtenerLista("listaHabitaciones").length;
    let max_paginas = Math.ceil(total_habitaciones / habitaciones_pagina);
    if (pagina_actual<max_paginas){
        pagina_actual++;
        actualizarTabla(campoSeleccionado);
    }
});

// al pulsar el boton de anterior te muestra la la pagina anterior con las habitaciones
document.getElementById("anterior").addEventListener("click", ()=>{
    if (pagina_actual>1){
        pagina_actual--;
        actualizarTabla(campoSeleccionado);
    }
});


//export { mostrarHabitaciones };