import { obtenerLista } from "./trabajarConListas.js";
import { generarCookie } from "../cookies/cookies.js";

/**
 * Obtenemos las listas con las que trabajaremos
 */
document.querySelector("button[type='button']").addEventListener("click", login);
function login(){
    let listaEmpleados = [...obtenerLista("listaEmpleados")];
    let listaClientes = [...obtenerLista("listaClientes")];
    
    /**
     * Obtenemos lso datos de inicio de sesión
     */
    
    let usuario = document.getElementById("usuario").value;
    let contrasena=document.getElementById("contrasena").value;
    
    const cliente = listaClientes.find(u => u.name === usuario);
    const empleado = listaEmpleados.find(u => u.usuario === usuario);

    if (cliente && cliente.password === contrasena) {
        generarCookie("cliente");
        window.location.href = 'dashboardHabitaciones.html';
    } else if (empleado && empleado.password === contrasena) {
        generarCookie(empleado.puesto);
        window.location.href = 'dashboardHabitaciones.html';
    } else {
        document.getElementsByTagName("p")[0].style="display:block; color:red";
    }
}

export { login };

/**

const usuarios = [
    { nombre: 'Víctor', edad: 25 },
    { nombre: 'Lucía', edad: 30 }
];

const existe = usuarios.some(u => u.nombre === 'Víctor'); // true


 */
