var gravity;

function setup() {
    gravity = createVector(0, 0.1);

    createCanvas(windowWidth, windowHeight);

    stroke(256);
    strokeWeight(4);
    background(0);
}

function draw() {
    colorMode(RGB);
    background(0, 25);

    if (random() < 0.1) new Rocket();

    colorMode(HSB);
    updateParticles();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}