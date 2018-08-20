const Led = require("robotois-led");
const RGBs = require("robotois-rgb-leds");
const DSensor = require("robotois-distance-sensor");
//const sleep = require("sleep");

const led = new Led(1);
const rgb = new RGBs();
const distance = new DSensor(3);

let contador = 7;
let intervaloPlay;
let intervaloFestejo;

function prenderTodos() {
  for (let i = 1; i < 8; i++) {
    rgb.blink(i, `#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }
}

function apagarTodos() {
  led.turnOff();
  for (let i = 1; i < 8; i++) {
    rgb.turnOff(i);
  }
}

function parpadearRGBs() {
  // for (let i = 0; i < 4; i++) {
  prenderTodos();
  //   sleep.msleep(60);
  //  apagarTodos();
  //sleep.msleep(60);
  // }
}

function parpadear(numero) {
  // for (let i = 0; i < 4; i++) {
  rgb.blink(numero, "#FFF00");
  led.blink();
  // sleep.msleep(60);
  // rgb.turnOff(numero);
  // led.turnOff();
  // sleep.msleep(60);
  // }
}

function inicializar() {
  if (intervaloPlay) {
    return;
  }
  intervaloPlay = setInterval(() => {
    if (contador == 7) {
      //parpadear(contador);
      led.blink();
      contador--;
    } else if (contador < 7 && contador > 0) {
      rgb.turnOn(contador, "#0000FF");
      //if (contador == 4) {
      //rgb.turnOff(7);
      //}
      contador--;
    } else {
      rgb.allOff();
      led.turnOff();
      contador = 7;
    }
  }, 100);
}

function monitor() {
  setInterval(() => {
    const dist = distance.getValue();
    console.log(`La distancia es: ${dist}`);

    apagarTodos();

    if (dist < 10) {
      clearInterval(intervaloPlay);
      intervaloPlay = false;
      parpadearRGBs();
    } else {
      inicializar();
    }
  }, 1000);
}

monitor();
