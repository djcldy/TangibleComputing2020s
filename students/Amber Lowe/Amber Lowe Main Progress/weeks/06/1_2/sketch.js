/*
    MuW201: Tangible Computing
    Week 03 Clocks
    Adapted from https://p5js.org/examples/input-clock.html

*/

let particles = []
let capture


function setup() {

  createCanvas(800, 800)
  capture = createCapture(800,800)
  capture.hide()
  noStroke()

  for (var i = 0; i < 60; i++){
    particles.push(createParticle(i/60*width,i,i))
  }

}

function draw() {

  for (var i = 0; i < particles.length; i++){

    let p = particles[i]

    if (i < second()){
      moveParticle(p)
    }

    drawParticle(p)

  }

  let s = second()
  console.log(s)

  if (s > 58) { 
    resetParticles(particles)
  }

  //ellipse(mouseX,mouseY,100,100)

}


function createParticle(positionX, positionY, radius){
   // double curly brackets is shorthand for an object
    let particle = {} // This method creates a new object extending the prototype object passed as a parameter.
    particle.x = positionX
    particle.y = positionY
    particle.r = radius
    let color = capture.get(particle.x*particle.r,particle.x*particle.r)
    particle.col = (color)

    return particle
}

function moveParticle(particle){


  particle.x += random(-5,5)
  particle.y += random(1)
  particle.r += random(0.5)
    


}

function resetParticles(particles){

  background(255)
  console.log('reset particles!')

  for (var i = 0; i < particles.length; i++){

    let particle = particles[i]
    particle.y = i
    particle.x = i/60*width
    particle.r = i
  }


}

function drawParticle(particle){

  fill(particle.col)

  rect(particle.x,particle.y,particle.r,particle.r)

}