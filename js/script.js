let x = 400;
let v = 4;
let y = 300;
let y1 = 155;
let y2 = 155;
let dy = 3;
let pdy = 11;
let v1 = 4;
let c1 = 0;
let c2 = 0;
let r = 50;
let fair;

function setup() {
  createCanvas(900, 500);
  noStroke();
}

function draw() {
  background("#FFFFFF");
  fill("#080101");
  ellipse(x, y, r, r);
  rect(30, y1, 20, 150); //1
  rect(width - 50, y2, 20, 150); //2

  if (y1 <= y && y1 + 151 >= y && x < 70) {
    v = -v;
  }

  if (y2 < y && y2 + 151 > y && x > width - 70) {
    v = -v;
  }

  if (x > width + 50) {
    c1 = c1 + 1;
    x = 440;
    y = 240;
    y1 = 155;
    y2 = 155;
    delay(1500);
  } //Loses
  if (x < -50) {
    c2 = c2 + 1;
    x = 440;
    y = 240;
    y1 = 155;
    y2 = 155;
    delay(1500);
  }

  if (x > 440) {
    fair = true;
  } else {
    fair = false;
  } //field and fair fight
  rect(440, 0, 5, 500);
  ellipse(443, 240, 30, 30);

  textSize(30);
  text(c1, 100, 50);
  text(c2, 800, 50); //score

  if (y < 22) {
    v1 = -v1;
  } //bouncing
  if (y > height) {
    v1 = -v1;
  }

  x = x + v;
  y = y + v1;
}

function keyPressed() {
  if (keyCode == "83") {
    if (fair == false) {
      y1 = y1 + pdy;
    }
  }
  if (keyCode == "87") {
    if (fair == false) {
      y1 = y1 - pdy;
    }
  }
  if (keyCode == UP_ARROW) {
    if (fair == true) {
      y2 = y2 - pdy;
    }
  }
  if (keyCode == DOWN_ARROW) {
    if (fair == true) {
      y2 = y2 + pdy;
    }
  }
}
