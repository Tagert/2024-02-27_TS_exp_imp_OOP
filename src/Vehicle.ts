"use script";

// Sukurkite klasę WaterVehicle, kuri turėtų savybes: brand: string, model: string, year: number, maxDepth: number

// Sukurkite klasę LandVehicle, kuri turėtų savybes: brand: string, model: string, year: number, tires: string[],

// Sukurkite klasę AirVehicle, kuri turėtų savybes: brand: string, model: string, year: number, maxAltitude: number,

// Sukurkite klasę Vehicle ir padarykite ją tėvine [1.], [2.] ir [3.] punktais sukurtoms klasėms. 4.1 bendras savybes(brand, model, year) aprašykite su 'protected' pasiekiamumo lygiu. 4.2 perrrašykite visų klasių konstruktorius, jog bendros savybės (brand, model, year) būtų perduotos tėviniam konstruktoriui

// Vehicle klasėje aprašykite metodą 'public getString(): string' kuris suformuotų pagindinė informaciją(brand, model, year)

// Vehicle klasėje pakeiskite metodą 'public getString(): string' į 'PROTECTED getString(): string'. Kiekvienoje paveldinčioje klasėje sukurkite metodus 'public toString(): string', kurios naudotų tėvinės klasės metodus metodą 'PROTECTED getString(): string' tam kad suformuoti pilną savosios klasės reprezentaciją

// Tėvinės klasės Vehicle konstruktoriaus parametrus aprašykite objektu, ir perrašykite vaikinių klasių konstruktorius.

// Išskaidykite kodą atskirais failais

type VehicleType = {
  brand: string;
  model: string;
  year: number;
};

type WaterVehicleType = VehicleType & {
  maxDepth: number;
};

type LandVehicleType = VehicleType & {
  tires: string[];
};

type AirVehicleType = VehicleType & {
  maxAltitude: number;
};

class Vehicle {
  protected brand: string;
  protected model: string;
  protected year: number;

  constructor({ brand, model, year }: VehicleType) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  protected getString() {
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
  }
}

class WaterVehicle extends Vehicle {
  maxDepth: number;

  constructor({ brand, model, year, maxDepth }: WaterVehicleType) {
    super({ brand, model, year });
    this.maxDepth = maxDepth;
  }

  toString() {
    return this.getString();
  }
}

class LandVehicle extends Vehicle {
  tires: string[];

  constructor({ brand, model, year, tires }: LandVehicleType) {
    super({ brand, model, year });
    this.tires = tires;
  }

  toString() {
    return this.getString();
  }
}

class AirVehicle extends Vehicle {
  maxAltitude: number;

  constructor({ brand, model, year, maxAltitude }: AirVehicleType) {
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
