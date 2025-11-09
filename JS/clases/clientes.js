// clientes.js

class Clientes {
    constructor(id, name, city, mail, password) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.mail = mail;
        this.password = password;
    }

    cambiarPassword(newPassword) {
        this.password = newPassword;
    }
}

export { Clientes };
