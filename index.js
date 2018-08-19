const Led = require("robotois-led");
const RGBs = require("robotois-rgb-leds");
const led = new Led(6);
const rgb = new RGBs(2);

// led
led.blink(true);
setTimeout(() => {
  led.turnOff();
}, 6000);

//rgb
rgb.blink(1, `#FF0000`);
rgb.blink(2, `#00FF00`);
rgb.blink(3, `#0000FF`);
rgb.blink(4, `#0F0F0F`);

setTimeout(() => {
  rgb.release();
}, 8000);
