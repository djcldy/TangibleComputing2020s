var offset = 0;
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
   background(0);
   translate(400,400);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  let secondAngle = map(sc, 0, 60, 0, 360);
  for (var x = 0; x <= width; x = x + 500) {
    fill(random(255), 0, random(200));
      rect(secondAngle,200,189,79,210.30);
  offset = offset+1;
    strokeWeight(8);
  stroke(55, 10, 110);
   rect(secondAngle,119,80,299,400);
    rect(secondAngle,200,100,67,42);
    rect(secondAngle,150,70,100,69);

    rect(secondAngle,x+ offset, 102, 215, 215);
     rect(secondAngle,x+ offset, 200, 100, 100);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);

  

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
}




