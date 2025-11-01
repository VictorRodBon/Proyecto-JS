import { Empleados } from "../clases/empleados.js";

function mostrarEmpleadoEditar() {
    document.getElementById("botonEnviar").addEventListener("click", modificarUsuairo);

    const contenedor = document.getElementById("editar-empleado");
    $.getJSON("../JS/listas/listaEmpleados.json", (datos) => {
        const idEditar = parseInt(new URLSearchParams(location.search).get("id"));
        const empleado = datos.find(e => e.id === idEditar);

        if (!empleado) {
            contenedor.innerHTML = "<p>Empleado no encontrado.</p>";
            return;
        }

        // Generar contenido HTML
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


        contenedor.getElementsByTagName("form")[0].insertAdjacentHTML("afterbegin",contenido);

        // mostrar inputs al marcar el checkbox
        // nombre
        document.getElementById("checkboxNombre").addEventListener("change", function () {
            const campo = document.getElementById("inputNombre");
            campo.style.display = this.checked ? "block" : "none";
        });
        // cargo
        document.getElementById("checkboxPuesto").addEventListener("change", function () {
            const campo = document.getElementById("inputPuesto");
            campo.style.display = this.checked ? "block" : "none";
        });
        // usuario
        document.getElementById("checkboxUsuario").addEventListener("change", function () {
            const campo = document.getElementById("inputUsuario");
            campo.style.display = this.checked ? "block" : "none";
        });
        // contraseña
        document.getElementById("checkboxPassword").addEventListener("change", function () {
            const campo = document.getElementById("inputPassword");
            campo.style.display = this.checked ? "block" : "none";
        });
        // edad
        document.getElementById("checkboxEdad").addEventListener("change", function () {
            const campo = document.getElementById("inputEdad");
            campo.style.display = this.checked ? "block" : "none";
        });
        // salario
        document.getElementById("checkboxSalario").addEventListener("change", function () {
            const campo = document.getElementById("inputSalario");
            campo.style.display = this.checked ? "block" : "none";
        });
    });
}

function modificarUsuairo(event) {
    event.preventDefault();
    location.href = "../../HTML/main.html";
}


mostrarEmpleadoEditar();

export { modificarUsuairo };


