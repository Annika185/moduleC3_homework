class ElectricalAppliance {
    constructor(name, manufacturer) {
        this.name = name;
        this.manufacturer = manufacturer;
    }

    getInfo() {
        return `The ${this.name} is manufacturied by ${this.manufacturer}.`
    }

    getPowerConsumption = function (power) {
        return `Power Consumption of the ${this.name} is ${power} W.`
    }

    getTurn = function (on_off) {
        return `The ${this.name} is switched ${on_off}.`
    }
}


class Lighting extends ElectricalAppliance {
    constructor(name, manufacturer, typeOfLamp) {
        super(name);
        this.manufacturer = manufacturer
        this.typeOfLamp = typeOfLamp;
    }

    getPowerConsumption = function (power) {
        return `Electricity consumption of the ${this.name} is ${power} W.`
    }
}

class PC extends ElectricalAppliance {
    constructor(name, manufacturer, display) {
        super(name);
        this.manufacturer = manufacturer;
        this.display = display;
    }

    getTurn = function (on_off) {
        return `This ${this.name} is switched ${on_off}.`
    }

    getInfo() {
        return `The ${this.name} is manufacturied by ${this.manufacturer}. Display is ${this.display}'.`
    }
}


const iron = new ElectricalAppliance("iron", "Bosch");

console.log(iron.getInfo());  // "The iron is manufacturied by Bosch."
console.log(iron.getPowerConsumption(700));  // "Power Consumption of the iron is 700 W."
console.log(iron.getTurn("on"));  // "The iron is switched on."
// console.log(iron)


const lamp = new Lighting("lamp", "Xiaomi", "LED");

console.log(lamp.getInfo());  // "The lamp is manufacturied by Xiaomi."
console.log(lamp.getPowerConsumption(40));  // "Electricity consumption of the lamp is 40 W."
console.log(lamp.getTurn("off"));  // "The lamp is switched off."


const computer = new PC("computer", "Acer", 19);

console.log(computer.getInfo());  // "The computer is manufacturied by Acer. Display is 19'."
console.log(computer.getPowerConsumption(320));  // "Power Consumption of the computer is 320 W."
console.log(computer.getTurn("on"));  // "This computer is switched on."