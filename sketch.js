
let sketch;

function setup() {
  sketch = createCanvas(800, 400);
  sketch.parent("p5");
  frameRate(4);
}

function draw() {
  background(255);
  for(let i = 0; i < 20; i++){
  // define color aleatorio 
  stroke(random(255), random(255), random(255));
  // defino un grosor aleatorio
  strokeWeight(random(2, 20));
  // dubujo un punto aleatorio
  point(random(10, width-10), random(10, height - 10));
  }
}