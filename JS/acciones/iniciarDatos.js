import { almacenarLista } from "./trabajarConListas.js";
import { listaEmpleados } from "../listas/listaEmpleados.js";
import { listaClientes } from "../listas/listaClientes.js";
import { listaHabitaciones } from "../listas/listaHabitaciones.js";

//se almacenan las listas en el localStorage
almacenarLista("listaClientes", listaClientes);
almacenarLista("listaEmpleados", listaEmpleados);
almacenarLista("listaHabitaciones", listaHabitaciones);

