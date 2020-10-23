/*
     suma de dos funciones  
*/


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  for (let i = 0; i < width; i++) {
    
    let n = noise(i/30+millis()/1000);
    let s = sin((i / width) * PI);
    strokeWeight(3);
    
    // noise curve
    stroke("white");
    point(i, height - n*height);
    
    // sin curve
    stroke("cyan");
    point(i, height - s * height);
    
    // noise + sin curve
    stroke("red");
    point(i, height - n*s * height);
    
    // ray of light
    strokeWeight(1);
    stroke(255, n*s*255);
    line(i, 0, i, height);
  }
}