var particlesPerRocket = 100;

class Rocket extends Particle {
    color = random(255);

    constructor() {
        super(
            random(windowWidth),
            windowHeight,
            createVector(0, random(-10, -15)),
            false
        );
    }

    update() {
        super.update();

        if (this.velocity.y >= 0) {
            for (let i = 0; i < particlesPerRocket; i++) {
                new Particle(
                    this.location.x,
                    this.location.y,
                    p5.Vector.random2D().mult(random(2, 10)),
                    true,
                    this.color
                );
            }
            this.removeParticle();
        }
    }
}