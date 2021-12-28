class Charge {
    particleCount = 100;

    explode(rocket) {
        for (let i = 0; i < this.particleCount; i++) {
            new Particle(
                rocket.location.x,
                rocket.location.y,
                this.getVelocity(rocket, i),
                true,
                this.getColor(rocket, i)
            );
        }
    }

    static velocitys = [
        function(rocket, i) {
            return p5.Vector.random2D().mult(random(2, 10));
        },
        function(rocket, i) {
            let angle = (i / this.particleCount) * 2 * PI;
            return createVector(cos(angle), sin(angle)).mult(5);
        },
        function(rocket, i) {
            let angle = (i / (this.particleCount / 10)) * 2 * PI;
            return createVector(cos(angle), sin(angle)).mult(i / 10);
        },
    ];

    static colors = [
        function(rocket, i) {
            return rocket.color;
        },
        function(rocket, i) {
            return random(255);
        },
    ];

    static getRandom() {
        let c = new Charge();
        c.getColor =
            Charge.colors[Math.floor(Math.random() * Charge.colors.length)];
        c.getVelocity =
            Charge.velocitys[Math.floor(Math.random() * Charge.velocitys.length)];
        return c;
    }
}