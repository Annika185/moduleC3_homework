function ElectricalAppliance (name, manufacturer, power, turn ){
  this.name= name,
  this.turn = function(){console.log(`The ${this.name} is switched ${turn}.`)}
  this.power = function(){console.log(`Power Consumption of the ${this.name} is ${power} W.`)}
  this.manufacturer = function(){
    
    console.log(`The ${name} is manufacturied by ${manufacturer}.`)
  }
}

const iron = new ElectricalAppliance('iron', 'Bosch');
const power  = new ElectricalAppliance('iron', '', 700);
const turn = new ElectricalAppliance('iron', '', '', 'on');
iron.manufacturer();
power.power();
turn.turn();


function Lighting (name, manufacturer, power, led){
  this.name= name,
  this.led = function(){console.log(`The ${this.name} is ${led}.`)}
  this.manufacturer = function(){console.log(`The ${this.name} is manufacturied by ${manufacturer}.`)}
  this.power = function(){console.log(`Electricity consumption of the ${this.name} is ${power} W.`)}
}

const lamp = new Lighting('lamp', 'Xiaomi');
const power  = new Lighting('lamp','', 40);
const led = new Lighting('lamp','', '', 'LED');
power.power();
lamp.manufacturer();
led.led();


function PC (name, manufacturer, display, power){
  this.name= name,
  this.display = display,
  this.power = power,
  this.manufacturer = function(){console.log(`The ${this.name} is manufacturied by ${manufacturer}. 
  Display is ${this.display}'. Power is ${this.power} W.`)}
}

const comp = new PC('computer', 'Acer', 19, 220);

comp.manufacturer();