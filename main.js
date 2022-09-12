function setup(){
video = createCapture(VIDEO);
    video.size(550, 510);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet has been Initialised!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

    }
}

function draw(){
    background('#E8E8E8');
}

