// clientes.js

class Clientes {
    constructor(id, name, city, date, password) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.date = date;
        this.password = password;
    }

    cambiarPassword(newPassword) {
        this.password = newPassword;
    }
}

export { Clientes };
