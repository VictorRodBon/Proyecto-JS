import { listaClientes } from "../listas/listaClientes.js";

window.onload = () => {
  listaClientes.forEach(cliente => {
    console.log(cliente.name);
  });
};
