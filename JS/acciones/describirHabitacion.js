import { obtenerLista } from "../acciones/trabajarConListas.js";
let datos = [...obtenerLista("listaHabitaciones")];
const numHabitacion = location.search.split("?")[1].split("=")[1];
let contenido = "";
let imagen = "";
let habitacion = datos.find(i => i.numero_habitacion == numHabitacion);



window.onload = ()=> {
    pintarHabitacion();
    document.getElementById("botonEstado").addEventListener("click",cambiarEstado);
}

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



function cambiarEstado(){
    habitacion.estado = "ocupado";
    document.getElementById("texto").innerHTML = "";
    document.getElementById("imagen").innerHTML = "";
    pintarHabitacion();
}
