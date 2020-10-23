/* Noise Machine */


let nm;
let num = 9;

function setup() {
  createCanvas(displayWidth, displayHeight);
  regen();
}

function draw() {
  blendMode(BLEND);
  background(255);
  blendMode(MULTIPLY);
  for (let i = 0; i < num; i++) {
    nm[i].go();
  }
}


function randomColor() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let c = color(r, g, b);
  return c;
}

function regen() {
  nm = [];
  let x, y, w, l, z, a;

  for (let i = 0; i < num; i++) {
    x = -10;
    y = random(height);
    w = random(0, 200);
    l = width + 20;
    z = random(200, 1000);
    a = 0;
    nm.push(new NoiseMachine(x, y, w, l, z, a));
  }
}

function keyTyped() {
  regen();
}