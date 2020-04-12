// Example Code
// TRY Incorperating the following variables in your code 
// leftHandX,leftHandY,rightHandX,rightHandY,leftEyeX,leftEyeY,rightEyeX,rightEyeY

function setup() {
    createCanvas(640, 480);
    loadPoseNet()
    background(255);
}

function draw() {
    background(vid.get())
    fill(255,0,255)
    ellipse(noseX, noseY, 20, 20);
    ellipse(rightHandX, rightHandY, 20, 20);
    ellipse(leftHandX, leftHandY, 20, 20);
    ellipse(leftEyeX, leftEyeY, 20, 20);
    ellipse(rightEyeX, rightEyeY, 20, 20);
}

// dont touch this code here 

// poseNet Variables
let vid
let noseX = noseY = rightHandX = rightHandY = leftHandX = leftHandY = leftEyeX = leftEyeY = rightEyeX = rightEyeY = 0
let img;
let poseNet;
let poses = [];


function loadPoseNet() {

    vid = createCapture(640, 480)
        // vid.hide()
    poseNet = ml5.poseNet(vid, modelLoaded);

    // set some options
    let options = {
        imageScaleFactor: 1,
        minConfidence: 0.25
    }

    // Listen to new 'pose' events
    poseNet.on("pose", function(results) {

        poses = results;
        if (!poses[0]) return
        let pose = poses[0].pose

        if (pose) {

            noseX = updateValue('nose', 'x', pose, noseX)
            noseY = updateValue('nose', 'y', pose, noseY)
            rightHandX = updateValue('rightWrist', 'x', pose, rightHandX)
            rightHandY = updateValue('rightWrist', 'y', pose, rightHandY)
            leftHandX = updateValue('leftWrist', 'x', pose, leftHandX)
            leftHandY = updateValue('leftWrist', 'y', pose, leftHandY)
            leftEyeX = updateValue('leftEye', 'x', pose, leftEyeX)
            leftEyeY = updateValue('leftEye', 'y', pose, leftEyeY)
            rightEyeX = updateValue('rightEye', 'x', pose, rightEyeX)
            rightEyeY = updateValue('rightEye', 'y', pose, rightEyeY)

        }


    });

}

function updateValue(key1, key2, kp, curr) {


    if (kp[key1].confidence > 0.2) {
        return (kp[key1][key2]-curr)*0.5+curr
    }



    return curr

}

function modelLoaded() {
    console.log('model is loaded')
}