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
  textSize(120)
  textAlign(CENTER)

  noFill()
  strokeWeight(3)
  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

}

function draw() {




  let s = second()
  let m = minute()
  let h = hour()

  background(s/60*255,m/60*255,h/24*255)

  let time = h + ':' + m+ ':' + s
  console.log(time)


  text(time,width/2,height/2)



}

