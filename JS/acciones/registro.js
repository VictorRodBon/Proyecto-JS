import { Clientes } from "../clases/clientes.js";
import { listaClientes } from "../listas/listaClientes.js";
import { actualizarLista } from "./trabajarConListas.js";

document.querySelector("button[type='button']").addEventListener("click", registro);


function obtenerMaximo(lista, campo) {
    return Math.max(...lista.map(e => e[campo]));
}


function registro(){
    let contador=0;
    let nombre = document.getElementById("nombre").value.trim();
    let contrasena = document.getElementById("password").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let ciudad = document.getElementById("ciudad").value.trim();


    if (!nombre.match(/^[A-Z][a-z]+$/)){
        contador++;
    }
    if (!contrasena.match(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/)){ // mayuscula, minuscula, numeros, >8 caracteres
        contador ++;
    }
    if (!correo.match(/^[\w.-]+@[\w.-]+\.\w{2,}$/)) {
        contador++;
    }
    if (!ciudad.match(/^[A-Z][a-z]+$/)) {
        contador++;
    }
    

    if(contador==0){

        let id=obtenerMaximo(listaClientes, "id")+1;
        let nuevoCliente = new Clientes(id, nombre, ciudad, correo, contrasena);
        listaClientes.push(nuevoCliente);
        actualizarLista("listaClientes", listaClientes); 
        generarCookie("cliente");
        window.location.href = 'dashboardHabitaciones.html';
    }else{
        document.getElementsByTagName("p")[0].style = "display:block; color:red";
    }
}

export { registro };

