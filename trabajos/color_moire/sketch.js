

let points = [];
let num = 99999;
let sw = 1.5;
let p1, p2;
let moveXs, moveYs, rots, zooms, x, y, r, z;

let body;

function setup() {
  body = document.getElementById("body");
 let bodyWidth = body.offsetWidth;
  createCanvas(bodyWidth, 700);
  for (let i = 0; i < num; i++) {
    points.push(createVector(random(width), random(height)));
  }
  p1 = createGraphics(width, height);
  p2 = createGraphics(width, height);

  for (let i = 0; i < num; i++) {
    p1.stroke("orange");
    p1.strokeWeight(sw);
    p1.point(points[i].x, points[i].y);
    p2.stroke("blue");
    p2.strokeWeight(sw);
    p2.point(points[i].x, points[i].y);
  }

  moveXs = createSlider(-width / 2, width / 2, 0, 0.1);
  moveYs = createSlider(-height / 2, height / 2, 0, 0.1);
  rots = createSlider(-QUARTER_PI / 2, QUARTER_PI / 2, 0, 0.001);
  zooms = createSlider(0.8, 2, 1, 0.0001);
}

function draw() {
  blendMode(BLEND);
  background(255);
  x = moveXs.value();
  y = moveYs.value();
  r = rots.value();
  z = zooms.value();
  blendMode(MULTIPLY);
  image(p1, 0, 0);
  push();
  translate(width / 2, height / 2);
  rotate(r);
  scale(z);
  image(p2, -width / 2 + x, -height / 2 + y);
  pop();
}