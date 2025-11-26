import { actualizarLista,obtenerLista } from "./trabajarConListas.js";
import { getCookie } from "../cookies/cookies.js";

let datos=[...obtenerLista("listaEmpleados")];

onload=()=>{
    //se comprueba si existe cargo y se configura el menu
    let login=getCookie('cargo');
    if (login != null) {
        login = "logout";
    } else {
        login = "login";
    }
    //se inserta el menu
    document.getElementsByTagName('header')[0].insertAdjacentHTML("afterbegin", "<mi-menu id='menu' login="+login+"></mi-menu>");
}

//se crea el html para mostrar los empleados
function mostrarEmpleados() {
    let contenido = "";
    let cargo = getCookie('cargo');
    datos.forEach(empleado =>{
        contenido += `
            <div class="card">
                <h2>${empleado.nombre}</h2>
                <p>ID: ${empleado.id}</p>
                <p>Cargo: ${empleado.puesto}</p>
                <p>Edad: ${empleado.edad}</p>
            `;
        if(cargo.toLowerCase()==='director'){
            contenido += `
                <p>Salario: ${empleado.salario} €</p>
                <button class="boton" onclick="window.location.href='editarEmpleado.html?id=${empleado.id}'">
                    Editar empleado
                </button>
                <button class="boton" onclick="borrarEmpleado(${empleado.id})">
                    Borrar empleado
                </button>
            `;
        }
        contenido += `
            </div>
        `;
    })
    document.getElementById("lista-empleados").insertAdjacentHTML("beforeend",contenido);
    //si el cargo es director apareceran los botones
    if (cargo.toLowerCase() === 'director'){
        if (!document.querySelector(".boton-anadir")) {
            let anadir = document.createElement("button");
            anadir.textContent = "Añadir empleado";
            anadir.classList.add("boton", "boton-anadir");
            anadir.addEventListener("click", () => {
                window.location.href = `crearEmpleado.html`;
            });
            document.getElementsByTagName("main")[0].appendChild(anadir);
        }
    }



}

mostrarEmpleados();


function borrarEmpleado(id){
    // comprobamos que el empleado existe
    const indiceAEliminar = datos.findIndex(item => item.id === id);

    // si devuelve -1 no existe
    if (indiceAEliminar !== -1) {
        // eliminamos un único objeto
        datos.splice(indiceAEliminar, 1);
        // actualizamos la lista
        actualizarLista("listaEmpleados", datos);
        
        // volvemos a cargar la lista
        document.getElementById("lista-empleados").innerHTML = "";
        mostrarEmpleados();
    }
}
window.borrarEmpleado = borrarEmpleado;


export { mostrarEmpleados };
