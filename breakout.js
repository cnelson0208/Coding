/// <reference path="lib/p5.global.d.ts" />

class Game {
  width = 1000;
  height = 600;
  lives = 3;
  points = 0;
  targetRows = 5;
  targetCols = 7;

  draw() {
    textSize(40);
    fill("green");
    textAlign(LEFT);
    text(this.lives, 10, this.height - 40);
  }
}

class Ball {
  constructor() {
    this.x = game.width / 2;
    this.y = game.height - 100;
    this.vx = 3;
    this.vy = -3;
    this.size = 20;
  }
  draw() {
    fill("red");
    square(this.x, this.y, this.size);
    this.x += this.vx;
    this.y += this.vy;
    this.collideWithWalls();
    this.collideWithPaddle();
    this.collideWithTargets();
  }
  collideWithWalls() {
    if (this.x > game.width) {
      this.vx = -3;
    }
    if (this.y > game.height) {
      game.lives--;
    }
  }
  collideWithPaddle() {
    if (this.x > game.width) {
      this.vx = -3;
    }
    if (this.y > game.height) {
      game.lives--;
    }
  }

  collideWithTargets() {
    for (let i = 0; i < targets.length; i++) targets.splice;
  }
}

class Paddle {
  constructor() {
    this.y = game.height - 50;
    this.x = mouseX;
    this.width = 200;
    this.height = 10;
  }
  draw() {
    fill("white");
    noStroke();
    rect(mouseX - this.width / 2, this.y, this.width, this.height);
  }
}

class Target {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.height = 10;
    this.width = game.width / game.targetCols;
    this.x = this.width * this.row;
    this.y = (100 / game.targetRows) * col + 20;
  }
  draw() {
    fill("blue");
    strokeWeight(2);
    stroke("white");
    rect(this.x, this.y, this.width, this.height);
  }
}

/** @type {Game} */
let game;
/** @type {Ball} */
let ball;
/** @type {Paddle} */
let paddle;
/** @type {Array<Target>} */
let targets = [];

var setup = function () {
  game = new Game();
  createCanvas(game.width, game.height);
  ball = new Ball();
  paddle = new Paddle();

  for (let col = 0; col < game.targetCols; col++) {
    for (let down = 0; down < game.targetRows; down++) {
      targets.push(new Target(col, down));
    }
  }
};

var draw = function () {
  background(200);
  game.draw();
  ball.draw();
  paddle.draw();
  for (const target of targets) {
    target.draw();
  }

  if (targets.length === 0) {
    noLoop();
  }
};
