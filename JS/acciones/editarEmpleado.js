import {actualizarLista} from "./trabajarConListas.js";

// Mostrar inputs al marcar los checkboxes
const campos = [
    "Nombre", "Puesto", "Usuario", "Password", "Edad", "Salario"
];
// obtener id del empleado
const idEditar = location.search.split("?")[1].split("=")[1];

function mostrarEmpleadoEditar() {
    document.getElementById("botonEnviar").addEventListener("click", validarValores);

    const contenedor = document.getElementById("editar-empleado");

    // Recuperar lista de empleados desde localStorage
    const datos = JSON.parse(localStorage.getItem("listaEmpleados")) || [];

    const empleado = datos.find(e => e.id == idEditar);

    //error por si no encuentra empleado
    if (!empleado) {
        contenedor.innerHTML = "<p>Empleado no encontrado.</p>";
        return;
    }
    //se crea el formulario para editar empleados
    const contenido = `
        <p>
            <b>Nombre:</b> ${empleado.nombre}
            <input type="checkbox" id="checkboxNombre"> 
            <input type="text" id="inputNombre" value="${empleado.nombre}" style="display:none;"><br>

            <b>Puesto:</b> ${empleado.puesto}
            <input type="checkbox" id="checkboxPuesto">
            <input type="text" id="inputPuesto" value="${empleado.puesto}" style="display:none;"><br>

            <b>Usuario:</b> ${empleado.usuario}
            <input type="checkbox" id="checkboxUsuario">
            <input type="text" id="inputUsuario" value="${empleado.usuario}" style="display:none;"><br>

            <b>Password:</b> ${empleado.password}
            <input type="checkbox" id="checkboxPassword">
            <input type="text" id="inputPassword" value="${empleado.password}" style="display:none;"><br>

            <b>Edad:</b> ${empleado.edad}
            <input type="checkbox" id="checkboxEdad">
            <input type="text" id="inputEdad" value="${empleado.edad}" style="display:none;"><br>

            <b>Salario:</b> ${empleado.salario}€
            <input type="checkbox" id="checkboxSalario">
            <input type="text" id="inputSalario" value="${empleado.salario}" style="display:none;"><br>
        </p>
    `;

    contenedor.getElementsByTagName("form")[0].insertAdjacentHTML("afterbegin", contenido);

    
    //mostrar el imput ocultado
    campos.forEach(campo => {
        document.getElementById(`checkbox${campo}`).addEventListener("change", function () {
            const input = document.getElementById(`input${campo}`);
            input.style.display = this.checked ? "block" : "none";
        });
    });
}

function usuarioModificado() {
    // meter timeout (mirar si puedo meter un pizzacolores (asincrono))
    location.href = "../HTML/dashboardEmpleados.html";
}
// creamos una función para validar si los valores introducidos son válidos
function validarValores(event) {
    event.preventDefault();
    // obtenemos los id de los inputs que tengan el id que queremos y el sestilo sea block
    const camposVisibles = campos.filter(campo => {
        const input = document.getElementById(`input${campo}`);
        return input && window.getComputedStyle(input).display === "block";
    })

    // obtenemos los datos desde el localStorage
    let datos = [...JSON.parse(localStorage.getItem("listaEmpleados"))];

    // reescribimos la datos modificando los datos que queremos y que pasamos por el formulario 
    datos=datos.map(item=>{
        // realizamos las siguientes acciones para cada campo visible
        camposVisibles.forEach(campo=>{
            let input = document.getElementById(`input${campo}`)
            let valor=input.value;
            let propiedad=campo.toLocaleLowerCase();
            // comprobamos si el id del empleado es el mismo que el que queremos editar
            if(item.id==idEditar){
                // si el campo es edad o salario lo pasamos a entero
                if (propiedad === "edad" || propiedad === "salario") {
                    item[propiedad] = parseFloat(valor);
                } else {
                    item[propiedad] = valor;
                }
            }
        })
        return item;
    })
    // llamamos a la actualizarLista
    actualizarLista("listaEmpleados", datos);
    usuarioModificado();
}

mostrarEmpleadoEditar();

export { mostrarEmpleadoEditar, validarValores };
