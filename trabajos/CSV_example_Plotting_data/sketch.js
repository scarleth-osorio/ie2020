// global width and height
let w, h;

let data;
let g; // separate graphics for the data plotting, calc only once!;

// preload table data
function preload() {
  data = loadTable(
    'PRSA-adapted-aparrish.csv',
    'csv',
    'header');
}

function setup() {
  createCanvas(displayWidth, 500);
  w = width;
  h = height;
  textFont("monospace", 24);
  // how many rows?
  console.log(data.getRowCount());
  // what are the columns?
  console.log(data.columns);
  g = createGraphics(w, h);
  drawGraphic();
  noCursor();
  strokeJoin(BEVEL);
}

function drawGraphic() {
  /* 
  I draw the plot only once since it might take some time 
  which is bad for interactivity
  */
  g.noFill();
  g.strokeWeight(.4);

  // draw Temperature
  g.stroke("orange");
  g.beginShape();
  for (var i = 0; i < data.getRowCount(); i++) {
    let xpos = map(i, 0, data.getRowCount() * 2, 0, w);
    let plotTemp = map(data.getNum(i, "TEMP"), -30, 140, 0, h);
    g.vertex(xpos, plotTemp);
  }
  g.endShape();

  // draw Preassure
  g.stroke("lightblue");
  g.beginShape();
  for (var i = 0; i < data.getRowCount(); i++) {
    let xpos = map(i, 0, data.getRowCount() * 2, 0, w);
    let plotPres = map(data.getNum(i, "PRES"), 950, 1160, 0, h);
    g.vertex(xpos, plotPres);
  }
  g.endShape();
}


function draw() {
  background(50);
  image(g, 0, 0);

  let val = round(map(mouseX, 0, width, 0, data.getRowCount()));
  val = constrain(val, 0, data.getRowCount() - 1);

  let day = data.get(val, "day");
  let month = data.get(val, "month");
  let year = data.get(val, "year");

  fill(240);
  textAlign(LEFT);
  text(n(day) + "/" + n(month) + "/" + year, 20, 40);

  stroke(255, 100);
  line(mouseX, 0, mouseX, h);

  // the the current values

  let currentTemp = data.get(val, "TEMP");
  let currentPres = data.get(val, "PRES");

  // map values to plot
  // please note that I use the same mapping parameters as above

  let plotTemp = map(currentTemp, -30, 140, 0, h);
  let plotPres = map(currentPres, 950, 1160, 0, h);

  strokeWeight(4);
  stroke("black");
  fill("orange");
  ellipse(mouseX, plotTemp * 2, 20, 20);

  fill("lightblue");
  ellipse(mouseX, plotPres * 2, 20, 20);


  let labelposX;
  if (mouseX > 190) {
    labelposX = mouseX - 20;
    textAlign(RIGHT);
  } else {
    labelposX = mouseX + 20;
    textAlign(LEFT);
  }

  stroke(0);
  strokeWeight(8);
  fill(255);
  text(currentTemp + " Fº", labelposX, plotTemp * 2 + textAscent()/3);
  text(currentPres + " inches", labelposX, plotPres * 2 + textAscent()/3);
  
}

  // returns two-digit numbers when smaller than 9
  function n(n) {
    return n > 9 ? "" + n : "0" + n;
  }