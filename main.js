NoseX = 0
NoseY = 0

function preload() {
    nose = loadImage('https://srv.media.io/v1/matting/download?originId=Aw2JEg2K-5cedbec21ea168608c5c97bf0d508188&type=low')
}

function draw() {
    image(cam, 0, 0, 300, 300)

    image(nose, NoseX, NoseY, 100, 100)
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    cam = createCapture(VIDEO)
    cam.size(300, 300)
    cam.hide()
    posenet = ml5.poseNet(cam, modelLoaded)
    posenet.on('pose', gotposes)
}

function modelLoaded() {
    console.log("modelLoaded")
}

function gotposes(result) {
    console.log(result)
    console.log("nose x =" + result[0].pose.nose.x)
    console.log("nose x =" + result[0].pose.nose.y)
    NoseX = result[0].pose.nose.x - 47
    NoseY = result[0].pose.nose.y - 35
}

function snapshot() {
    save('pic.png')
}