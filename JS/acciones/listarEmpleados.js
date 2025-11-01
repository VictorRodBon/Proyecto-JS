function mostrarEmpleados() {
    $.getJSON("../JS/listas/listaEmpleados.json", (datos) => {

        let contenido = "";

        datos.forEach(empleado => {
            contenido += `
        <div class="card">
            <h2>${empleado.nombre}</h2>
            <p>ID: ${empleado.id}</p>
            <p>Cargo: ${empleado.puesto}</p>
            <p>Edad: ${empleado.edad}</p>
            <p>Salario: ${empleado.salario} €</p>
            <button class="boton" onclick="window.location.href='editarEmpleado.html?id=${empleado.id}'">
                Editar empleado
            </button>

        </div>
    `;
        });

        document.getElementById("lista-empleados").innerHTML = contenido;
    });

}

mostrarEmpleados();

export { mostrarEmpleados };
