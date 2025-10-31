import { empleados } from '../listas/listaEmpleados.js'

function comprobarCargo(id) {
    const empleado = empleados.find(e => e.id === id);
    return empleado?.cargo === 'jefe'; 
    /*
     * ?. solo hace la asignación si el find devuelve algo
     * devolvemos la comparación de si el cargo es jefe
     */
}

export { comprobarCargo };
