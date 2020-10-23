let sliderX, sliderY, sliderZ;
let sliderCube, sliderRY, sliderRX;
let sliderSphereSize;
let cubeSize;

function setup() {
  createCanvas(500, 500, WEBGL);
  cursor(CROSS);
  sliderX = createSlider(2, 30, 16, 1);
  sliderY = createSlider(2, 30, 16, 1);
  sliderZ = createSlider(2, 30, 16, 1);
  sliderCube = createSlider(50, 800, 600, 1);
  sliderRY = createSlider(0, PI, 0.68, 0.01);
  sliderRX = createSlider(0, PI, 0.68, 0.01);
  sliderSphereSize = createSlider(1, 50, 3, .1);
  stroke(255);
}

function draw() {
  background(0);

  let numX = sliderX.value(); // número de elementos en X´
  let numY = sliderY.value(); // número de elementos en Y´
  let numZ = sliderZ.value();

  cubeSize = sliderCube.value();
  let ry = sliderRY.value();
  let rx = sliderRX.value();

  // calculo los espaciadores de x e y
  let spx = cubeSize / (numX - 1);
  let spy = cubeSize / (numY - 1);
  let spz = cubeSize / (numZ - 1);

  let sphereSize = sliderSphereSize.value();
  let nx, ny, nz;

  rotateX(-rx);
  rotateY(ry);

  // triple for loop
  for (let y = 0; y < numY; y++) {
    for (let x = 0; x < numX; x++) {
      for (let z = 0; z < numZ; z++) {
        nx = -cubeSize / 2 + x * spx;
        ny = -cubeSize / 2 + y * spy;
        nz = -cubeSize / 2 + z * spz;
        strokeWeight(sphereSize); 
        point(nx, ny, nz); // traslado al punto de la grilla
        
      }
    }
  }
}