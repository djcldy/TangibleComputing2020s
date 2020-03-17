let enemies = []


function setup(){

  createCanvas(500,500)

  for (var i = 0; i < 50; i++){

    enemies.push(createEnemy())


  }

  fill(0)

}



function draw(){

  background(255)
  fill(0)

  for (var i =0; i < enemies.length; i++){

    let enemy = enemies[i]

    enemy.x += enemy.vx
    enemy.y += enemy.vy 

    if (enemy.x > width) enemy.x = 0 
    if (enemy.x < 0) enemy.x = width 
    if (enemy.y > height) enemy.x = 0 
    if (enemy.x < 0) enemy.x = height

    if (dist(mouseX,mouseY,enemy.x,enemy.y) < 100 ){

      enemy.vx = (mouseX - enemy.x)/width 
      enemy.vy = (mouseY - enemy.y)/height
  

    }


    ellipse(enemy.x,enemy.y,5,5)



  }

  drawMouse()



}

function drawMouse(){

  fill(255,0,0,50)
  ellipse(mouseX,mouseY,100,100)

}

function createEnemy(){

  // do tutorial 'object' we can use this to make swarms 
  let enemy = {}
  enemy.x =  random(width)
  enemy.y =  random(height)
  enemy.vx = random(-1,1)
  enemy.vy = random(-1,1)


  return enemy 

}

