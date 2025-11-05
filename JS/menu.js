window.onload = () => {
    let contenido = `<nav>
                    <ul>
                        <li><a href="../HTML/dashboardEmpleados.html">Empleados</a></li>
                        <li><a href="../HTML/dashboardHabitaciones.html">Habitaciones</a></li>
                    </ul>
                </nav>`;

    document.getElementById("menu").insertAdjacentHTML("afterbegin", contenido);
}