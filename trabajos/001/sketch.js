let c1, c2, c3, c4;
let color1, color2, color3, color4;
let s, slider;

let w; // width of sketch calculated from container

function preload(){
    let s = select("#sketch");
    w = s.width;
}

function setup(){
    let sketch = createCanvas(w, windowHeight - 300);
    sketch.parent("sketch"); 
    
    slider = select("#control");
    c1 = select("#c1");
    c2 = select("#c2");
    c3 = select("#c3");
    c4 = select("#c4");
    noLoop();
    noStroke();
}

function updateHTML(){
    color1 = color(c1.value());
    color2 = color(c2.value());
    color3 = color(c3.value());
    color4 = color(c4.value());
    s = slider.value();
}

function draw(){
    updateHTML();
    for(let y = 0; y < height; y += s){
        for(let x = 0; x < width; x += s){
            let colorLeft = lerpColor(color1, color3, y/height);
            let colorRight = lerpColor(color2, color4, y/height);
        let currentColor = lerpColor(colorLeft, colorRight, x/width);
            fill(currentColor);
            rect(x, y, s, s);
        }
    }
}