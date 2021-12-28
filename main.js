var gravity;
var explode;

function preload() {
    explode = loadSound('rsc/explode.mp3');
}

function setup() {
    gravity = createVector(0, 0.1);

    createCanvas(windowWidth, windowHeight);

    angleMode(RADIANS);
    stroke(256);
    strokeWeight(4);
    background(0);
}

function draw() {
    colorMode(RGB);
    background(0, 25);

    if (random() < 0.05) new Rocket(Charge.getRandom());

    colorMode(HSB);
    updateParticles();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}