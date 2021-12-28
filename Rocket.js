var particlesPerRocket = 100;

class Rocket extends Particle {
    color = random(255);
    charge;

    constructor(charge) {
        super(
            random(100, windowWidth - 200),
            windowHeight,
            createVector(random(-3, 3), random(-10, -15)),
            false
        );
        this.charge = charge;
    }

    update() {
        super.update();

        if (this.velocity.y >= 0) {
            explode.play();
            this.charge.explode(this);
            this.removeParticle();
        }
    }
}