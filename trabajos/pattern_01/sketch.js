var b;
let blockSlider;
let s;

function setup() {
  createCanvas(displayWidth, displayHeight);
  blockSlider = document.getElementById('slider');
  reset();
  print("width = "+width);
  strokeCap(PROJECT);
}

function reset() {
  b = blockSlider.value;
  let xnum = round(width / b);
  let ynum = round(height / b);
  strokeWeight(b / 5);
  background('FireBrick');
  stroke('DarkOrange');
  
  for (let y = 0; y < ynum; y++) {
    for (let x = 0; x < xnum; x++) {
      drawBlock(x * b, y * b, width/xnum);
    }
  }
}

function drawBlock(x, y, s) {
  if (random(1) > .5) {
    line(x, y, x + s, y + s);
  } else {
    line(x, y + s, x + s, y);
  }
}

function draw() {

}