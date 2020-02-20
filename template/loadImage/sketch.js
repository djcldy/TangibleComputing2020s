var img;


function setup() {
  createCanvas(500, 500);
  img = createImg('http://www.petwebsite.com/hamsters/hamsters_images/syrian-hamster_000008437184.jpg');
  img.hide();
  background(100);

}

function draw() {
  image(img, 0,0,width,height); 
  
}

