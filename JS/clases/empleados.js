// empleados.js

class Empleados {
    constructor(id, name, cargo, age, password, sueldo) {
        this.id = id;
        this.name = name;
        this.cargo = cargo; // [director, limpiador, cocinero] si director -> modifica sueldo
        this.age = age; // edad
        this.sueldo=sueldo;
        this.password = password;
    }

    cambiarPassword(newPassword) {
        this.password = newPassword;
    }
}

export { Empleados };
