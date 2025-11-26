import { obtenerLista, actualizarLista } from "../acciones/trabajarConListas.js";
import { getCookie } from "../cookies/cookies.js";


let datos = [...obtenerLista("listaHabitaciones")];
//se obtiene el numero de habitacion desde la query string de la URL
const numHabitacion = location.search.split("?")[1].split("=")[1];
let contenido = "";
let imagen = "";
let habitacion = datos.find(i => i.numero_habitacion == numHabitacion);

window.onload = ()=> {
    pintarHabitacion();
    document.getElementById("botonEstado").addEventListener("click",cambiarEstado);
    //se comprueba si existe cargo y se configura el menu
    let login=getCookie('cargo');
    if (login != null) {
        login = "logout";
    } else {
        login = "login";
    }
    //se inserta el menu
    document.getElementsByTagName('header')[0].insertAdjacentHTML("afterbegin", "<mi-menu id='menu' login="+login+"></mi-menu>");
}

// crea el html con los datos de la habitacion seleccionada
function pintarHabitacion(){
        contenido = `
                        <h1>Habitación-${habitacion.numero_habitacion}</h1>
                        <h2>Características</h2>
                        <p><strong>Huéspedes:</strong> ${habitacion.numero_huespedes}</p>
                        <p><strong>Camas:</strong> ${habitacion.camas}</p>
                        <h2>Descripción</h2>
                        <p>Una suite de diseño contemporáneo con grandes ventanales, vistas urbanas y zona de estar privada. Perfecta para estancias de lujo.
                        </p>
                        <div class="price-state">
                            <span class="price">${habitacion.precio}€ / noche</span> — <span class="estado-libre" id="textoEstado">Estado: ${habitacion.estado}</span>
                        </div>`;
        if(habitacion.estado == "libre"){
            contenido += `<button id="botonEstado">Ocupar habitacion</button>`
        }
        if(habitacion.camas == 1){
            imagen = `<img src="../imagenes/1cama.png">`;
        }else if (habitacion.camas == 2){
            imagen = `<img src="../imagenes/2cama.png">`;
        }else{
            imagen = `<img src="../imagenes/3cama.png">`;
        }

        document.getElementById("texto").insertAdjacentHTML("beforeend", contenido);
        document.getElementById("imagen").insertAdjacentHTML("beforeend",imagen);
}


// comprueba si estas logeado y cambia el estado de la habitacion
function cambiarEstado(){

    let login=getCookie('cargo');
    if (login != null) {
        habitacion.estado = "ocupada";
    
        // Actualizar localStorage
        actualizarLista("listaHabitaciones", datos);
    
        document.getElementById("texto").innerHTML = "";
        document.getElementById("imagen").innerHTML = "";
        pintarHabitacion();
    } else {
        alert('tienes que loguearte para reservar una habitación');
    }
}
