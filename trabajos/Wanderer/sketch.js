let w = [];
let num = 200;

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (let i = 0; i < num; i++) {
    w.push(new Wanderer());
  }
  noStroke();
}

function draw() {
  background(255);
  for (let i = 0; i < w.length; i++) {
    w[i].paint();
    w[i].wander();
  }
}


class Wanderer {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.a = random(TWO_PI);
    this.seed = round(random(-9999999, 9999999));
    this.speed = random(2, 4);
    this.fillColor = randomColor();
  }

  wander() {
    this.x += cos(this.a) * this.speed;
    this.y += sin(this.a) * this.speed;

    noiseSeed(this.seed);
    this.a += noise(millis() / 900) - 0.5;

    // bounce
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.a += PI;
    }
  }

  paint() {
    fill(this.fillColor);
    ellipse(this.x, this.y, 6, 6);
  }
}

function randomColor() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let c = color(r, g, b);
  return c;
}