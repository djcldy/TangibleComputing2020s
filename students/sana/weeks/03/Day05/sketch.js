function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(160);
  translate(400,400);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(55, 10, 110);
  let secondAngle = map(sc, 0, 60, 0, 360);
  rect(0, 0, 300, 300, 0, secondAngle);
 strokeWeight(16);
  stroke(20, 70, 125);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  rect(0, 0, 250, 250, 0, minuteAngle);
 strokeWeight(32);
  stroke(95, 30, 70);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  rect(0, 0, 200, 200, 0, hourAngle);

  push();
  rotate(secondAngle);
  strokeWeight(8);
  stroke(45, 10, 100);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
   strokeWeight(16);
 stroke(130, 10, 100);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
   strokeWeight(32);
  stroke(160, 90, 10);
  line(0, 0, 50, 0);
  pop();

  stroke(85,160,10);
  fill(130,10,100,30);
  point(0, 0);

}


