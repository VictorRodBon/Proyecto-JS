import { Habitaciones } from '../clases/habitaciones.js';

const listaHabitaciones = [
    {
        "numero_habitacion": "301",
        "planta": 3,
        "camas": 2,
        "numero_huespedes": 2,
        "precio": 80.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "101",
        "planta": 1,
        "camas": 1,
        "numero_huespedes": 1,
        "precio": 50.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "501",
        "planta": 5,
        "camas": 3,
        "numero_huespedes": 3,
        "precio": 110.0,
        "estado": "ocupada"
    },
    {
        "numero_habitacion": "201",
        "planta": 2,
        "camas": 1,
        "numero_huespedes": 1,
        "precio": 55.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "502",
        "planta": 5,
        "camas": 1,
        "numero_huespedes": 1,
        "precio": 65.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "102",
        "planta": 1,
        "camas": 2,
        "numero_huespedes": 2,
        "precio": 75.0,
        "estado": "ocupada"
    },
    {
        "numero_habitacion": "302",
        "planta": 3,
        "camas": 3,
        "numero_huespedes": 4,
        "precio": 120.0,
        "estado": "ocupada"
    },
    {
        "numero_habitacion": "401",
        "planta": 4,
        "camas": 1,
        "numero_huespedes": 1,
        "precio": 60.0,
        "estado": "ocupada"
    },
    {
        "numero_habitacion": "202",
        "planta": 2,
        "camas": 2,
        "numero_huespedes": 3,
        "precio": 85.0,
        "estado": "ocupada"
    },
    {
        "numero_habitacion": "402",
        "planta": 4,
        "camas": 2,
        "numero_huespedes": 2,
        "precio": 90.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "105",
        "planta": 1,
        "camas": 1,
        "numero_huespedes": 1,
        "precio": 55.0,
        "estado": "ocupada"
    },
    {
        "numero_habitacion": "301",
        "planta": 3,
        "camas": 2,
        "numero_huespedes": 2,
        "precio": 85.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "210",
        "planta": 2,
        "camas": 3,
        "numero_huespedes": 4,
        "precio": 120.0,
        "estado": "reservada"
    },
    {
        "numero_habitacion": "503",
        "planta": 5,
        "camas": 1,
        "numero_huespedes": 1,
        "precio": 60.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "112",
        "planta": 1,
        "camas": 2,
        "numero_huespedes": 2,
        "precio": 70.0,
        "estado": "ocupada"
    },
    {
        "numero_habitacion": "407",
        "planta": 4,
        "camas": 3,
        "numero_huespedes": 3,
        "precio": 110.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "208",
        "planta": 2,
        "camas": 1,
        "numero_huespedes": 1,
        "precio": 50.0,
        "estado": "reservada"
    },
    {
        "numero_habitacion": "306",
        "planta": 3,
        "camas": 2,
        "numero_huespedes": 2,
        "precio": 80.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "604",
        "planta": 6,
        "camas": 2,
        "numero_huespedes": 2,
        "precio": 95.0,
        "estado": "ocupada"
    },
    {
        "numero_habitacion": "104",
        "planta": 1,
        "camas": 1,
        "numero_huespedes": 1,
        "precio": 45.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "309",
        "planta": 3,
        "camas": 3,
        "numero_huespedes": 4,
        "precio": 130.0,
        "estado": "reservada"
    },
    {
        "numero_habitacion": "501",
        "planta": 5,
        "camas": 2,
        "numero_huespedes": 2,
        "precio": 90.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "204",
        "planta": 2,
        "camas": 1,
        "numero_huespedes": 1,
        "precio": 55.0,
        "estado": "ocupada"
    },
    {
        "numero_habitacion": "410",
        "planta": 4,
        "camas": 2,
        "numero_huespedes": 2,
        "precio": 85.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "307",
        "planta": 3,
        "camas": 1,
        "numero_huespedes": 1,
        "precio": 60.0,
        "estado": "reservada"
    },
    {
        "numero_habitacion": "601",
        "planta": 6,
        "camas": 2,
        "numero_huespedes": 2,
        "precio": 100.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "103",
        "planta": 1,
        "camas": 2,
        "numero_huespedes": 2,
        "precio": 75.0,
        "estado": "ocupada"
    },
    {
        "numero_habitacion": "212",
        "planta": 2,
        "camas": 3,
        "numero_huespedes": 3,
        "precio": 115.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "405",
        "planta": 4,
        "camas": 1,
        "numero_huespedes": 1,
        "precio": 50.0,
        "estado": "reservada"
    },
    {
        "numero_habitacion": "308",
        "planta": 3,
        "camas": 2,
        "numero_huespedes": 2,
        "precio": 85.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "502",
        "planta": 5,
        "camas": 3,
        "numero_huespedes": 4,
        "precio": 125.0,
        "estado": "ocupada"
    },
    {
        "numero_habitacion": "106",
        "planta": 1,
        "camas": 1,
        "numero_huespedes": 1,
        "precio": 48.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "211",
        "planta": 2,
        "camas": 2,
        "numero_huespedes": 2,
        "precio": 90.0,
        "estado": "reservada"
    },
    {
        "numero_habitacion": "406",
        "planta": 4,
        "camas": 2,
        "numero_huespedes": 2,
        "precio": 88.0,
        "estado": "libre"
    },
    {
        "numero_habitacion": "305",
        "planta": 3,
        "camas": 1,
        "numero_huespedes": 1,
        "precio": 52.0,
        "estado": "ocupada"
    }
];

export { listaHabitaciones };
