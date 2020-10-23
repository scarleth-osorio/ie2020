/*

NoiseMachine(x, y, width or amplitude (px), length(px), angle)

*/



class NoiseMachine {
  constructor(x, y, w, l, speed, a) {
    this.x = x;
    this.y = y;
    this.amp = w;
    this.l = l;
    this.speed = speed;
    this.a = a; // angle
    this.ns = random(999999999); // noise seed
    this.col = randomColor();
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
      n = noise(i / this.speed + millis() / 3000);
      curveVertex(i, n * this.amp);
    }
    endShape();
    pop();
  }
}