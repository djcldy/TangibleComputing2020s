/*
    MuW201: Tangible Computing
    Week 03 Clocks
    Adapted from https://p5js.org/examples/input-clock.html

*/

let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {

  createCanvas(800, 800);
  stroke(255);

  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = width / 2;
  cy = height / 2;

}

function draw() {

  background(255)

  // Draw the clock background
  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI

  // Draw the hands of the clock
  stroke(0)
  strokeWeight(1)
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius)
  strokeWeight(2)
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius)
  strokeWeight(4)
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius)

}

