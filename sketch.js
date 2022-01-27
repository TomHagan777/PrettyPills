let randx;
let randy;

let r1;
let r2;
let r3;

let speedX;
let speedY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,200,200);
  frameRate(5);
}

function draw() {
  randx = random(0, windowWidth);
  randy = random(0, windowHeight);

  r1 = random(0,255);
  r2 = random(0,255);
  r3 = random(0,255);

  let shakeX = random(-200, 200);
  let shakeY = random(-200, 200);

  let size = random(0,1) > 0.6;

  if(size){
    strokeWeight(random(100,1000));
  } else {
    strokeWeight(100);
  }
    stroke(r1,r2,r3);
    line(randx+shakeX,randy+shakeY,randx,randy)
}