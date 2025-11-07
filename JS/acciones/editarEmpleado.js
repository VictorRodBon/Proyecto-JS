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

    if (!empleado) {
        contenedor.innerHTML = "<p>Empleado no encontrado.</p>";
        return;
    }

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

function validarValores(event) {
    event.preventDefault();

    const camposVisibles = campos.filter(campo => {
        const input = document.getElementById(`input${campo}`);
        return input && window.getComputedStyle(input).display === "block";
    })

    let datos = [...JSON.parse(localStorage.getItem("listaEmpleados"))];

    datos=datos.map(item=>{
        camposVisibles.forEach(campo=>{
            let input = document.getElementById(`input${campo}`)
            let valor=input.value;
            let propiedad=campo.toLocaleLowerCase();
            if(item.id==idEditar){
                if (propiedad === "edad" || propiedad === "salario") {
                    item[propiedad] = parseFloat(valor);
                } else {
                    item[propiedad] = valor;
                }
            }
            
        })
        return item;
    })
    actualizarLista("listaEmpleados", datos);
    usuarioModificado();

}

mostrarEmpleadoEditar();

export { mostrarEmpleadoEditar, validarValores };
