class Habitaciones{
    // constructor
    constructor(id, price, beds, ocuped, floor, maxGest){
        this.id=id; // id
        this.price=price; // precio
        this.beds=beds; // simples/dobles
        this.ocuped=ocuped; // bool
        this.floor=floor; //planta
        this.maxGest=maxGest; // num huesped
    }
    // metodos
    setDisponible(displonible){
        this.ocuped=displonible;
    }
    updatePrice(newPrice){
        this.price=newPrice;
    }
}

export { Habitaciones };