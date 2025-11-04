import { Empleados } from "../clases/empleados.js";

const listaEmpleados = [
  new Empleados(1, "Laura Gómez", "Directora", "lauraG", "pass123", 45, 3500),
  new Empleados(2, "Carlos Ruiz", "Limpiador", "carlosR", "limpia456", 32, 1200),
  new Empleados(3, "Marta Sánchez", "Recepcionista", "martaS", "recep789", 28, 1800),
  new Empleados(4, "Luis Fernández", "Contable", "luisF", "conta321", 39, 2900),
  new Empleados(5, "Ana Torres", "Recursos Humanos", "anaT", "rh654", 41, 3100),
  new Empleados(6, "Javier López", "Técnico", "javiL", "tech987", 35, 2600)
];

export { listaEmpleados };
