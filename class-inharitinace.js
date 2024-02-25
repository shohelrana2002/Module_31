class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log("gari chole na chole na ");
  }
}
class Bus extends Vehicle {
  constructor(name, price, seat, priceTicket) {
    super(name, price);
    this.seat = seat;
    this.priceTicket = priceTicket;
  }
}

class Truck extends Bus {
  constructor(name, price, load) {
    super(name, price);
    this.load = load;
  }
}
new Vehicle().move();
