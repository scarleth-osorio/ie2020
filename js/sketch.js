
let sketch;
let nm;

function setup() {
  nm = [];
  regen();
}


function draw() {
  clear();
  for(let i = 0; i < 200; i++){
  // define color aleatorio 
  stroke(random(255), random(255), random(255));
  // defino un grosor aleatorio
  strokeWeight(random(2, 20));
  // dubujo un punto aleatorio
  point(random(10, width-10), random(10, height - 10));
  }
}

function draw() {
  blendMode(BLEND);
  background(255);
  blendMode(MULTIPLY);
  for (let i = 0; i < nm.length; i++) {
    nm[i].go();
  }
}

function regen() {
  let p5holder = document.getElementById("p5");
  let body = document.getElementById("container");
  let sw = p5holder.offsetWidth;
  let sh = body.offsetHeight;
  sketch = createCanvas(sw, sh);
  sketch.parent("p5");

  print("sw = "+sw+"\tsh = "+sh)
  
  if(displayWidth < displayHeight){
    let nm1 = new NoiseMachine(0, -20, sw/2, sh+40, 100, HALF_PI, color("cyan"));
    nm.push(nm1);
  
    let nm2 = new NoiseMachine(sw, -20, sw/2, sh+40, 800, HALF_PI, color("fuchsia"));
    nm.push(nm2);;
  }else{
    let nm1 = new NoiseMachine(-20, 0, sh/2, sw+40, 500, 0, color("cyan"));
    nm.push(nm1);
  
    let nm2 = new NoiseMachine(-20, sh, sh/2, sw+40, 1000, 0, color("fuchsia"));
    nm.push(nm2);;
  }

}

function windowResized(){
  nm = [];
  regen();
}

class NoiseMachine {
  constructor(x, y, w, l, speed, a, col) {
    this.x = x;
    this.y = y;
    this.amp = w;
    this.l = l;
    this.speed = speed;
    this.a = a; // angle
    this.ns = random(999999999); // noise seed
    this.col = col;
  }

  go() {
    noStroke();
    fill(this.col, 100);
    rect(this.x, this.y - this.w / 2, this.l, this.amp);

    noiseSeed(this.ns);
    push();
    translate(this.x, this.y);
    rotate(this.a);

    let step = 4;
    let n;

    beginShape();
    
    vertex(0, 0);
    
    for (let i = 0; i < this.l; i += step) {
      n = noise(i / this.speed + millis() / 10000);
      curveVertex(i, -n * this.amp);
    }
    
    vertex(this.l, 0);
    
    for (let i = this.l - 1; i >= 0; i -= step) {
      n = noise(i / this.speed + millis() / 30000);
      curveVertex(i, n * this.amp);
    }
    endShape();
    pop();
  }
}