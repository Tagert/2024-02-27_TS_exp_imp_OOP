"use strict";
"use script";
class Vehicle {
    constructor({ brand, model, year }) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getString() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    }
}
class WaterVehicle extends Vehicle {
    constructor({ brand, model, year, maxDepth }) {
        super({ brand, model, year });
        this.maxDepth = maxDepth;
    }
    toString() {
        return this.getString();
    }
}
class LandVehicle extends Vehicle {
    constructor({ brand, model, year, tires }) {
        super({ brand, model, year });
        this.tires = tires;
    }
    toString() {
        return this.getString();
    }
}
class AirVehicle extends Vehicle {
    constructor({ brand, model, year, maxAltitude }) {
        super({ brand, model, year });
        this.maxAltitude = maxAltitude;
    }
    toString() {
        return this.getString();
    }
}
const vehicleNo1 = new Vehicle({
    brand: "Skoda",
    model: "Octavia",
    year: 2004,
});
const waterVehicleNo1 = new WaterVehicle({
    brand: "Boat Brand",
    model: "Boat Model",
    year: 2022,
    maxDepth: 100,
});
console.log(waterVehicleNo1.toString());
const landVehicleNo1 = new LandVehicle({
    brand: "Car Brand",
    model: "Car Model",
    year: 2022,
    tires: ["Tire1", "Tire2", "Tire3", "Tire4"],
});
const airVehicleNo1 = new AirVehicle({
    brand: "Airplane Brand",
    model: "Airplane Model",
    year: 2022,
    maxAltitude: 40000,
});
