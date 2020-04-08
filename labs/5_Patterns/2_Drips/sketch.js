  let drops = []
  let y = 0

  let spacing = 10
function setup(){

  createCanvas(500,500)

  background(0)
  noStroke()
  let x = width/2
  fill(255,0,0)
  let numDrop = 10

  for (var i = 0; i < numDrop; i++){

    let x = i/numDrop*width
    drops.push(createDrop(x,0))

  }



}

function draw(){
  y++
  for (var i = 0; i < drops.length; i++){

      let drip = drops[i]
      drip.x += (noise(drip.t)-0.5)*drip.scl // random
      drip.r = spacing*noise(drip.t)*drip.scl
      drip.t += 0.1
      stroke(drip.col)
      line(drip.x-drip.r,y+drip.r,drip.x+drip.r,y+drip.r)

      // if (random() > 0.95) {

      //   for (var i = 0; i < 30; i++){

      //     push()
      //     console.log('splat!')
      //     translate(drip.x,y)
      //     ellipse(random(-25,25),random(-25,25),2,2)
      //     pop()


      //   }


      // }

    }

    if (y > height){
      background(0)
      y = 0
    }


}

function createDrop(x,y,r){

  let drop = {}
  drop.x = x 
  drop.y = y
  drop.r = r
  drop.col = [random(255),random(255),random(255),150]
  drop.t = random(10)
  drop.scl = random(1,10)

  return drop

}

// let spacing = 10 

// for (var y = 0; y < height; y += spacing/2) {

//     ellipse(x,y,spacing,spacing)

// }
//     }
