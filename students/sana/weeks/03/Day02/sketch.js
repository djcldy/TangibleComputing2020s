/*

Gradient Array

*/



function setup() {
  createCanvas(800, 800);
  background(55);

}
function draw(time) {
  strokeWeight(2);
  translate(width/2, height/2);
  if (second()>58)
  background(55);
  
  var radius = int(min(width, height) / 2);
  var numPoints = 60;
  var angle = TWO_PI/numPoints;
  
  
  var secondsRadius = radius * 0.72;
  var minutesRadius = radius * 0.60;
  var hoursRadius = radius * 0.50;
  var clockDiameter = radius * 1.8;

  

  var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
  var alpha = time/60*255
 

  strokeWeight(80);
  stroke(50,125,170);
  
  beginShape(POINTS);
  var i = 0;
  while (i < numPoints ) {
      x = cos(angle*i) * secondsRadius; 
      y = sin(angle*i) * secondsRadius;
      vertex(x, y);
      i++;
  }
  endShape(); 
 
  strokeWeight(2);
  line(0, 0, cos(s) * secondsRadius, sin(s) * secondsRadius);
  strokeWeight(3);
  line(0, 0, cos(m) * minutesRadius, sin(m) * minutesRadius);
  strokeWeight(5);  
  line(0, 0, cos(h) * hoursRadius, sin(h) * hoursRadius);
  
  
}