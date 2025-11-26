import { obtenerLista } from "./trabajarConListas.js";
import { generarCookie,getCookie } from "../cookies/cookies.js";

//obtenemos las lista de empleados y clientes
document.querySelector("button[type='button']").addEventListener("click", login);
function login(){
    let listaEmpleados = [...obtenerLista("listaEmpleados")];
    let listaClientes = [...obtenerLista("listaClientes")];
    
    let usuario = document.getElementById("usuario").value;
    let contrasena=document.getElementById("contrasena").value;
    
    //buscamos si existe el cliente y el empleado
    const cliente = listaClientes.find(u => u.name === usuario);
    const empleado = listaEmpleados.find(u => u.usuario === usuario);

    //validamos credenciales y creamos la cookie de sesion 
    if (cliente && cliente.password === contrasena) {
        generarCookie("cliente");
        window.location.href = 'dashboardHabitaciones.html';
    } else if (empleado && empleado.password === contrasena) {
        generarCookie(empleado.puesto);
        window.location.href = 'dashboardHabitaciones.html';
    } else {
        //si las credenciales no son validas error
        document.getElementsByTagName("p")[0].style="display:block; color:red";
    }
}

export { login };

