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
  for (let l = 1; l < 8; l++) {
    rgb.turnOn(v, `#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }
}

function apagarTodos() {
  for (let l = 1; l < 8; l++) {
    rgb.turnOff(v);
  }
}

function parpadearRGBs() {
  for (let i = 0; i < 4; i++) {
    prenderTodos();
    sleep.msleep(60);
    apagarTodos();
    sleep.msleep(60);
  }
}

function monitor() {
  intervaloFestejo = setInterval(() => {
    const dist = distance.getValue();
    console.log(`La distancia es: ${dist}`);

    if (dist < 10) {
      parpadearRGBs();
    } else {
      apagarTodos();
    }
  });
}

monitor();

/*let contador = 7;
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

function inicializar() {
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
        inicializar();
        break;
    }
  }, 1000);
}

inicializar();
*/
