let posX = [];
let posY = [];
let rot = [];

let m = 15;

function setup() {
  let s = createCanvas(800, 500);
  s.parent("wrap");
  strokeWeight(2);
  stroke(0, 50);

  for (let i = 0; i < 10000; i++) {
    posX.push(random(m, width - m));
    posY.push(random(m, height - m));
    rot.push(random(TWO_PI));
  }
}

function draw() {
  background(250);

  for (let i = 0; i < posX.length; i++) {

    push();
    translate(posX[i], posY[i]);
    rotate(rot[i]);
    line(-m, 0, m, 0);
    pop();

     if(mouseIsPressed){
       meteleRuido();
     }
  }
}

function meteleRuido(){
  for(let i = 0; i < posX.length; i++){
    rot[i] += 0.0001;
  }
}