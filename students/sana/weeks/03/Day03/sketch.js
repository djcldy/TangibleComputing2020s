
function setup() {
  createCanvas(800, 800);

  
}

function draw() {
  background(0);
 

  let sc = second();
var gif_createImg;

 strokeWeight(8);
  
  stroke(55, 125, 100);
  fill(145,47,90,100);
  let end = map(sc, 0, 60, 0, 360);
  arc(400, 200, 300, 300, 0, end,PIE);
  
  	if (second()>58){
      gif_createImg = createImg("https://media.giphy.com/media/3ohfFIJ9M9XCUkE6Na/giphy.gif");
   image(gif_createImg, 50, 50);

}
}