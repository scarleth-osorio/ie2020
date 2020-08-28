/*

un lindo timbre para estmpar <3

*/

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
}

function draw() {}

function stamp(x, y) {
  blendMode(SCREEN);
  noStroke();
  fill(randomColor(), 150);
  let t, r;
  let n = round(random(3, 12)) * 2;
  let s = TWO_PI / n; // incremento angular
  let r1 = random(5, 20);
  let r2 = random(20);
  push();
  translate(x, y);
  rotate(random(TWO_PI));
  beginShape();
  for (let i = 0; i < n; i++) {
    t = i * s;
    if (i % 2 == 0) {
      r = r1;
    } else {
      r = r2;
    }
    x = cos(t) * r;
    y = sin(t) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
}

function mousePressed() {
  stamp(mouseX, mouseY);
}

function randomColor() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let c = color(r, g, b);
  return c;


}