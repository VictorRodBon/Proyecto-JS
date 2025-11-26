class Habitaciones{
    // constructor
    constructor(id, price, beds, ocuped, floor, maxGest){
        this.id=id;
        this.price=price; 
        this.beds=beds; 
        this.ocuped=ocuped;
        this.floor=floor; 
        this.maxGest=maxGest;
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