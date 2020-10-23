/*

Espiral + Noise

*/

let sliderTurns, sliderRes;
let sliderNoiseAmp, sliderNoiseZoom;
let sliderTime;

function setup() {
  createCanvas(600, 600);
  sliderTurns = createSlider(1, 60, 38, 1);
  sliderRes = createSlider(0.005, HALF_PI, 0.01, 0.001);
  sliderNoiseAmp = createSlider(1, 50, 44.7, 0.1);
  sliderNoiseZoom = createSlider(1, 400, 159, 1);
  sliderTime = createSlider(1, 100000, 11241, 10);
  noFill();
  noiseSeed(round(random(99999)));
  stroke(250);
}

function draw() {
  background("dimgray");
  spiral(width / 2, height / 2, 490);
}

function spiral(x, y, d) {

  let turns = sliderTurns.value();
  let res = sliderRes.value();
  let amp = sliderNoiseAmp.value();
  let zoom = sliderNoiseZoom.value();
  let time = sliderTime.value();

  let r = 0;
  let rInc = (d / 2) / ((TWO_PI * turns) / res);

  push();
  translate(x, y);
  beginShape();
  for (let t = 0; t < TWO_PI * turns; t += res) {

    // circular identity
    let x = cos(t) * r;
    let y = sin(t) * r;

    // noise values
    let nx = noise(x / zoom + millis() / time, -y / zoom - millis() / time) * amp;
    let ny = noise(4000 + x / zoom + millis() / time, -y / zoom + millis() / time) * amp;
    curveVertex(x + nx, y + ny);
    r += rInc;
  }
  endShape();
  pop();

  if (keyIsPressed) {
    print("sliderTurns = createSlider(1, 60, " + turns + ", 1);\nsliderRes = createSlider(0.005, HALF_PI, " + res + ", 0.001);\nsliderNoiseAmp = createSlider(1, 50, " + amp + ", 0.1);\nsliderNoiseZoom = createSlider(1, 400, " + zoom + ", 1);\nsliderTime = createSlider(1, 100000, " + time + ", 10);");
  }
}