const Led = require("robotois-led");
const RGBs = require("robotois-rgb-leds");
const DSensor = require("robotois-distance-sensor");
const sleep = require("sleep");

const led = new Led(1);
const rgb = new RGBs();
const distance = new DSensor(2);

let contador = 7;
let intervalo;
let intervalo2;

function parpadear(numero) {
  for (let i = 0; i < 4; i++) {
    rgb.turnOn(numero, "#FFF00");
    led.turnOn();
    sleep.msleep(60);
    rgb.turnOff(numero);
    led.turnOff();
    sleep.msleep(60);
  }
}

function inicilizar() {
  intervalo = setInterval(() => {
    if (contador == 7) {
      parpadear(contador);
      contador--;
    } else if (contador < 7 && contador > 0) {
      rgb.turnOn(contador, "#0000FF");
      if (contador == 4) {
        rgb.turnOff(7);
      }
      contador--;
    } else {
      rgb.allOff();
      contador = 7;
    }
  }, 100);
}

function festejo() {
  intervalo2 = setInterval(() => {
    const dist = Number(distance.getValue());
    console.log(dist);

    switch (dist) {
      case dist < 10:
        clearInterval(intervalo);
        rgb.allOff();
        led.turnOff();
        rgb.blinkAll("#00FF00");
        break;
      default:
        clearInterval(intervalo2);
        inicilizar();
        break;
    }
  }, 1000);
}

inicilizar();
festejo();
