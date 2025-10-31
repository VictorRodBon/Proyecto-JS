import { Habitaciones } from './habitaciones.js';

const listaHabitaciones = [
  new Habitaciones(101, 80, "dobles", false, 1, 2),
  new Habitaciones(102, 65, "simples", true, 1, 1),
  new Habitaciones(103, 75, "dobles", false, 1, 2),
  new Habitaciones(201, 120, "dobles", false, 2, 3),
  new Habitaciones(202, 90, "dobles", true, 2, 2),
  new Habitaciones(203, 85, "simples", false, 2, 1),
  new Habitaciones(301, 150, "dobles", false, 3, 4),
  new Habitaciones(302, 70, "simples", false, 3, 1),
  new Habitaciones(303, 95, "dobles", true, 3, 2),
  new Habitaciones(401, 200, "dobles", true, 4, 5),
  new Habitaciones(402, 180, "dobles", false, 4, 4),
  new Habitaciones(403, 110, "simples", false, 4, 2),
  new Habitaciones(501, 220, "dobles", false, 5, 5),
  new Habitaciones(502, 160, "dobles", true, 5, 3),
  new Habitaciones(503, 100, "simples", false, 5, 2),
];

export { listaHabitaciones };
