/*

Moiré Pattern

inspired by: https://youtu.be/QAja2jp1VjE
*/

let s = 6; // size

let sketch;
let g;
let sel;
let randomGraphics, ortogonalGraphics, triangularGraphics;
let w, h;
let moveXs, moveYs, rots, zooms, x, y, r, z;
let inputs;

function setup() {
  sketch = createCanvas(600, 600);
  sketch.parent("sketch");
  w = width;
  h = height;
  init();
}

function createRandomGraphics() {
  let numPoints = 100000;
  randomGraphics = createGraphics(width, height);
  randomGraphics.strokeWeight(s * 0.2);
  for (let i = 0; i < numPoints; i++) {
    randomGraphics.point(random(width), random(height));
  }
}

function createOrtogonalGraphics() {
  ortogonalGraphics = createGraphics(width, height);
  ortogonalGraphics.noStroke();
  ortogonalGraphics.fill(0);
  for (let y = 0; y < height; y += s) {
    if (y % (2 * s) == 0) {
      for (let x = 0; x < width; x += s * 2) {
        ortogonalGraphics.rect(x, y, s, s);
      }
    } else {
      for (let x = s; x < width; x += s * 2) {
        ortogonalGraphics.rect(x, y, s, s);
      }
    }
  }
}

function createTriangularGraphics() {
  triangularGraphics = createGraphics(width, height);
  triangularGraphics.noStroke();
  triangularGraphics.fill(0);
  let count = 0;
  let th = Math.sqrt(Math.pow(s, 2) - Math.pow(s / 2, 2));
  for (let y = 0; y < height; y += th) {
    if (count % 2 == 0) {
      for (let x = 0; x < width; x += s) {
        triangularGraphics.triangle(x, y, x + s, y, x + s / 2, y - th);
      }
    } else {
      for (let x = s / 2; x < width; x += s) {
        triangularGraphics.triangle(x, y, x + s, y, x + s / 2, y - th);
      }
    }
    count++;
  }
}

function selectChanged() {
  let sv = sel.value();
  switch (sv) {
    case 'random':
      g = randomGraphics;
      break;
    case 'ortogonal':
      g = ortogonalGraphics;
      break;
    case 'triangular':
      g = triangularGraphics;
  }
}

function draw() {
  s = inputs.value();
  x = moveXs.value();
  y = moveYs.value();
  r = rots.value();
  z = zooms.value();
  background(255);
  image(g, 0, 0);
  push();
  translate(width / 2, height / 2);
  rotate(r);
  scale(z);
  image(g, -width / 2 + x, -height / 2 + y);
  pop();
}


function init() {
  createRandomGraphics();
  createOrtogonalGraphics();
  createTriangularGraphics();
  inputs = createInput(s, "number");
  inputs.parent("usize");
  inputs.changed(updateSize);
  moveXs = createSlider(-width / 2, width / 2, 0, 0.1);
  moveXs.parent("moveX");
  moveYs = createSlider(-height / 2, height / 2, 0, 0.1);
  moveYs.parent("moveY");
  rots = createSlider(-QUARTER_PI / 2, QUARTER_PI / 2, 0, 0.001);
  rots.parent("rotation");
  zooms = createSlider(0.8, 2, 1, 0.0001);
  zooms.parent("zoom");
  sel = createSelect();
  sel.parent("type");
  sel.option('random');
  sel.option('ortogonal');
  sel.option('triangular');
  sel.changed(selectChanged);
  g = randomGraphics;
}

function updateSize() {
  console.log("plink! "+s);
  createRandomGraphics();
  createOrtogonalGraphics();
  // createTriangularGraphics();
}