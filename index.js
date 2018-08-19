import * as Led from 'robotois-led';

const led = new Led(1);

led.turnOn();
setTimeout(() => {
  led.turnOff();
}, 2000);