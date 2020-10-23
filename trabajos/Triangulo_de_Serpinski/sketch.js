/*

 Triángulo de Serpinski
 
 */

let levels;


function setup() {
  let s = createCanvas(700, 700);
  s.parent("wrap");
  noStroke();
  levels = 1;
}

function draw() {
  background(0);
  trig(width/2, 50, 650, levels);
}

/* función recursiva */
function trig(x, y, a, l) {

  /* triángulo equilátero donde 
   (x,y) es el vértice superior 
   y 'a' es el lado. 'l' es el 
   nivel de la recursión.
   */

  let x2 = x + cos(PI/3) * a;
  let y2 = y + sin(PI/3) * a;

  let x3 = x + cos(2 * PI/3) * a;
  let y3 = y + sin(2 * PI/3) * a;

  // triángulo 'grande' blanco
  fill(255);
  triangle(x, y, x2, y2, x3, y3);

  // triángulo 'chico' negro
  fill(0);
  triangle((x + x2)/2, (y + y2)/2, (x + x3)/2, (y + y3)/2, x, y3);

  if (l > 1) {
    trig(x, y, a/2, l - 1);
    trig((x + x2)/2, (y + y2)/2, a/2, l - 1);
    trig((x + x3)/2, (y + y3)/2, a/2, l - 1);
  }
}

function keyTyped() {

  // you can toggle the levels by hitting keys a-z
  if (key == 'a') {
    levels++;
  }
  if (key == 'z') {
    levels--;
  }

  // so we keep levels reasonable...
  levels = constrain(levels, 0, 9);

  // output to console how many levels do we have at the moment
  print("levels = "+levels);
}