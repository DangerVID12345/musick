HerobrinesLife = "";
Raiders = "";

LeftWristX = "";
LeftWristY = "";

RightWristX = "";
RightWristY = "";

scoreleft = 0;
scoreright = 0;

statusleft = "";
statusright = "";

function preload() {

HerobrinesLife = loadSound("Herobrine.mp3");
Raiders = loadSound("Raiders.mp3");

}

function setup() {

    canvas = createCanvas(500, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {

    console.log("model loaded!");
    
    }

function draw() {

image(video, 0, 0, 500, 500);
fill("8A2BE2");
stroke("8A2BE2");

statusleft = HerobrinesLife.isPlaying();

if(scoreleft > 0.2) {

circle(LeftWristX, LeftWristY, 20);
Raiders.stop();

if(statusleft = false) {

HerobrinesLife.play();
document.getElementById("song_name").value = "Herobrine's Life";

}

}

statusleft = Raiders.isPlaying();

if(scoreright > 0.2) {

circle(RightWristX, RightWristY, 20);
HerobrinesLife.stop();

if(statusright = false) {

Raiders.play();
document.getElementById("song_name").value = "Raiders";
    
}

}

}

function gotPoses(results) {

    console.log(results);
    
    if(results.length > 0) {
    
    scoreleft = results[0].pose.keypoints[9].score;
    scoreleft = results[0].pose.keypoints[10].score;

    RightWristX = results[0].pose.rightWrist.x;
    RightWristY = results[0].pose.rightWrist.y;

    console.log("right wrist x = " + RightWristX + "right wrist y = " + RightWristY);
    
    LeftWristX = results[0].pose.leftWrist.x;
    LeftWristY = results[0].pose.leftWrist.y;
    
    console.log("left wrist x = " + LeftWristX + "left wrist y = " + LeftWristY);
    
    }
    
    }
