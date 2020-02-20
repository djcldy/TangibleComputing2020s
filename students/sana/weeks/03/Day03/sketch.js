var gif_loadImg

var gif_loadImg;



function setup() {
  createCanvas(800, 800);
    gif_loadImg = loadImage("https://media.giphy.com/media/3ohfFIJ9M9XCUkE6Na/giphy.gif");
  // gif_createImg = createImg("https://media.giphy.com/media/3ohfFIJ9M9XCUkE6Na/giphy.gif");
  

}


function draw() {

  let sc = second()


  if (sc > 15){

    background(gif_loadImg);
  
  } else { 

    background(255)

  }

  strokeWeight(8);
  
  stroke(55, 125, 100);
  fill(145,47,90,100);
  let end = map(sc, 0, 60, 0, 360);
  arc(400, 200, 300, 300, 0, end,PIE);
  

      
}


