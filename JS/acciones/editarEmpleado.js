import { Empleados } from "../clases/empleados.js";
function editarEmpleado(){
    
    $.getJSON("../JS/listas/listaEmpleados.json", (datos) => {
        let idEditar=location.search.split("?")[1].split("=")[1];
        console.log(idEditar);
        let empleado=datos.find(e=>e.id==idEditar);
        console.log(empleado.nombre);
    });
}
editarEmpleado();