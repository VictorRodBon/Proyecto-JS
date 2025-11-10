import { actualizarLista,obtenerLista,obtenerMaximo } from "./trabajarConListas.js";
import { Empleados } from "../clases/empleados.js";

let lista=obtenerLista('listaEmpleados');
document.querySelector("button[type='button']").addEventListener("click", crearEmpleado);


function crearEmpleado(){
    // declaramos las variables
    let contador=0;
    let id=obtenerMaximo(lista, "id")+1;
    let puestos=["director",'limpiador','recepcionista','contable','rh', 'tecnico'];
    let nombre = document.getElementById("nombre").value.trim();
    let puesto = document.getElementById("puesto").value.trim();
    let usuario = document.getElementById("usuario").value.trim();
    let contrasena = document.getElementById("password").value.trim();
    let edad = document.getElementById("edad").value.trim();
    let salario = document.getElementById("salario").value.trim();
    
    
    if (!nombre.match(/^[A-Z][a-z]+$/)){
        contador ++;
    }
    if (!usuario.match(/^[A-Z][a-z]+$/)){
        contador ++;
    }
    if (!contrasena.match(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/)){ // mayuscula, minuscula, numeros, >8 caracteres
        contador ++;
    }
    if (!puestos.includes(puesto)){
        contador ++;
    }
    if (edad<18){
        contador ++;
    }
    if (validarSalario(salario) !== true) {
        contador++;
    }

    
    
    if(contador==0){
        let empleado=new Empleados(id,nombre,puesto,usuario,contrasena,edad,salario);
        lista.push(empleado);
        actualizarLista("listaEmpleados", lista);
    
        window.location.href = 'dashboardEmpleados.html';
    }else{
        document.getElementById("error").classList.add("error", "visible");
    }
}

function validarSalario(salarioTexto) {
  const salario = parseFloat(salarioTexto);
  if (isNaN(salario)) return "El salario no es un número válido";
  if (salario <= 0) return "El salario debe ser mayor que cero";
  if (salario > 200000) return "El salario excede el límite permitido";
  return true;
}


export { crearEmpleado };