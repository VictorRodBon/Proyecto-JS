import { actualizarLista, obtenerLista, obtenerMaximo } from "./trabajarConListas.js";
import { Empleados } from "../clases/empleados.js";

let lista = obtenerLista('listaEmpleados');
document.querySelector("button[type='button']").addEventListener("click", crearEmpleado);

document.getElementById('spiner').style.display = 'none';


function crearEmpleado() {
    // declaramos las variables
    let contador = 0;
    let id = obtenerMaximo(lista, "id") + 1;
    let puestos = ["director", 'limpiador', 'recepcionista', 'contable', 'rh', 'tecnico'];
    let nombre = document.getElementById("nombre").value.trim();
    let puesto = document.getElementById("puesto").value.trim();
    let usuario = document.getElementById("usuario").value.trim();
    let contrasena = document.getElementById("password").value.trim();
    let edad = document.getElementById("edad").value.trim();
    let salario = document.getElementById("salario").value.trim();

    // Validamos los campos del formulario
    if (!nombre.match(/^[A-Z][a-z]+$/)) {
        contador++;
        console.log('nombre');

    }
    if (!usuario.match(/^[A-Z][a-z]+$/)) { // no meter números
        contador++;
        console.log('usuario');
    }
    if (!contrasena.match(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/)) { // mayuscula, minuscula, numeros, >8 caracteres
        contador++;
        console.log('contraseña');

    }
    if (!puestos.includes(puesto)) {
        contador++;
        console.log('puesto');

    }
    if (edad < 18) {
        contador++;
        console.log('edad');

    }
    if (validarSalario(salario) !== true) {
        contador++;
        console.log('salario');

    }

    console.log(contador);


    //si no tiene errores crea el usuario
    if (contador < 1) {
        document.getElementsByTagName('form')[0].style.display = 'none';
        document.getElementById('spiner').style.display = 'block';
        setTimeout(() => {
            console.log("Cliente creado con éxito");
            let empleado = new Empleados(id, nombre, puesto, usuario, contrasena, edad, salario);
            lista.push(empleado);
            actualizarLista("listaEmpleados", lista);

            window.location.href = 'dashboardEmpleados.html';
        }, 3000);

    } else {
        console.error("error en usuario");
        document.getElementById("error").classList.add("error", "visible");
    }
}
// comprueba si el salario cumple 3 validaciones 
function validarSalario(salarioTexto) {
    const salario = parseFloat(salarioTexto);
    if (isNaN(salario)) return "El salario no es un número válido";
    if (salario <= 0) return "El salario debe ser mayor que cero";
    if (salario > 200000) return "El salario excede el límite permitido";
    return true;
}


export { crearEmpleado };