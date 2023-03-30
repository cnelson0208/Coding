/// <reference path="lib/p5.global.d.ts" />

var setup = function () {
  createCanvas(2000, 800);
  frameRate(5);
};
var draw = function () {
  background(200);

  for (let y = 0; y < 2000; y += 60) {
    for (let x = 0; x < 2000; x += 60) {
      fill(color(50, 100, 150, 210));
      circle(x, y, random(50, 159, 255));
    }
  }
};
