let w = [];
let num = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < num; i++) {
    w.push(new Wanderer());
  }
  background(255);
}

function draw() {
  stroke(0, 50);
  for (let i = 0; i < w.length; i++) {
    //w[i].paint();
    w[i].wander();
  }

  for (let i = 0; i < w.length; i++) {
    for (let j = w.length - 1; j > i; j--) {
      let d = dist(w[i].x, w[i].y, w[j].x, w[j].y);
      mouseX = constrain(mouseX, 30, width);
      if (d < mouseX) {
        line(w[i].x, w[i].y, w[j].x, w[j].y);
      }
    }
  }
  veil();
}

function veil(){
  fill(255, 30);
  noStroke();
  rect(0, 0, width, height);
}

class Wanderer {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.a = random(TWO_PI);
    this.seed = round(random(-9999999, 9999999));
    this.speed = random(2);
  }

  wander() {
    this.x += cos(this.a) * this.speed;
    this.y += sin(this.a) * this.speed;

    noiseSeed(this.seed);
    this.a += noise(millis() / 1900) - 0.5;

    // bounce
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.a += PI;
    }
  }

  paint() {
    ellipse(this.x, this.y, 4, 4);
  }
}