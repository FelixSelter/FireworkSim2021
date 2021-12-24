var particles = [];

function updateParticles() {
    particles.forEach((particle) => {
        particle.applyForce(gravity);
        particle.update();
        particle.draw();
    });
}

class Particle {
    location;
    velocity;
    acceleration;
    specialEffects = false;
    alpha = 255;
    color;

    constructor(x, y, velocity, specialEffects, color) {
        this.location = createVector(x, y);
        this.velocity = velocity;
        this.acceleration = createVector(0, 0);
        this.specialEffects = specialEffects;
        particles.push(this);
        this.color = color;
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.acceleration.set(0, 0);

        if (this.specialEffects) {
            this.velocity.mult(0.95);
            this.alpha += random(-1, -10);
        }

        if (this.location.y > windowHeight || this.alpha <= 0)
            this.removeParticle();
    }

    draw() {
        stroke(this.color, 255, 255, this.alpha);
        point(this.location.x, this.location.y);
    }

    removeParticle() {
        particles = particles.filter((p) => p !== this);
    }
}