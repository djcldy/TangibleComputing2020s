var vid
var poseNet
var leftEyeX = leftEyeY = rightEyeX = rightEyeY = 0


function setup() {
  createCanvas(800, 400);
  vid = createCapture(VIDEO);
  vid.size(800, 400);
  vid.hide()

  poseNet = ml5.poseNet(vid, modelLoaded)

  // Listen to new 'pose' events
  poseNet.on( 'pose', updatePose )

  stroke(255)


}

function draw() {

  image(vid,0,0,width,height)
  filter( 34, 155, 215)
  // drawEye( eyeLeftX, eyeLeftY, 10)
  // drawEye( eyeRightX, eyeRightY, 20)

}

// function drawEye( x, y , radius){


//   push()
//   translate(x,y)
//   fill(255)
//   circle( 0, 0, radius)
//   fill(255)
//   circle( 5, 5, 5)
//   pop()


// }



// // When the model is loaded
// function modelLoaded() {

//   console.log('Model Loaded!')

// }

// function updatePose(results){

//   pose = results[0]

//   if (pose){

//     console.log(JSON.stringify( pose, null, 4 ))
//     // if ( pose.leftEye.confidence > 0.2 ) { 

//     //   leftEyeX = pose.leftEye.x 
//     //   leftEyeY = pose.leftEye.y

//     // }

//     // if ( pose.rightEye.confidence > 0.2 ) { 

//     //   rightEyeX = pose.rightEye.x 
//     //   rightEyeY = pose.rightEye.y

//     // }

//   }

// }