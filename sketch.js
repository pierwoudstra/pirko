
let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;

document.getElementById("demo2").style.color = "red";

function preload() {
  img = loadImage('assets/jedan.png');
  img2 = loadImage('assets/dva.png');
  img3 = loadImage('assets/tri.png');
  img4 = loadImage('assets/jedan2.png');
  img5 = loadImage('assets/dva2.png');
  img6 = loadImage('assets/tri2.png');
  img7 = loadImage('assets/pirko.gif');
}

function setup() {
  createCanvas(300, 400);
  mouseX = 200;
}

function draw() {
  clear();
  // background(255,255,255,180);
  // background(255, 400 - mouseY, 80);

  tint(mouseY, mouseY, 400 - mouseY);

  // line(pmouseX, pmouseY, mouseX, mouseY);
  // strokeWeight(15);

  if (mouseX <= -100) {
   image(img, width/2-150, 10, 300, 400);
  } else if (mouseX >= -100 && mouseX <= 0) {
    image(img2, width/2-150, 10, 300, 400);
  } else if (mouseX >= 0 && mouseX <= width/2) {
    image(img3, width/2-150, 10, 300, 400);
    image(img7, width/2-140, 10, 100, 390);
  } else if (mouseX >= width/2 && mouseX <= width) {
    image(img6, width/2-150, 10, 300, 400);
    image(img7, width/2-140, 10, 100, 390);
  } else if (mouseX >= width && mouseX <= width+100) {
    image(img5, width/2-150, 10, 300, 400);
  } else {
    image(img4, width/2-150, 10, 300, 400);
  }

  filter(POSTERIZE, 2.2);
  // filter(THRESHOLD, 0.7);

  background(255,255,255,50);

  if (mouseIsPressed) {

  }

  // text(mouseX, 0,0, 20, 20);

}