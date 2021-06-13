const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var cook, cookImg;
var bg, bgImg;
var banner, bannerImg;
var button;
var gameState = 0;
var customer1, customer1Img;
var customer2, customer2Img;
var ended, endedImg;
var server, serverImg;

function preload() {
  bannerImg = loadImage("Cooking Images/Banner.png");
  cookImg = loadImage("Cooking Images/cooking.jpg");
  customer1Img = loadImage("Cooking Images/customer1.jpg");
  customer2Img = loadImage("Cooking Images/customer2.jpg");
  serverImg = loadImage("Cooking Images/serving.jpg");
  endedImg = loadImage("Cooking Images/game ended.jpg");

}

function setup() {
  createCanvas(1000, 400)
  engine = Engine.create();
  world = engine.world;

  button = new Button;

}
function draw() {
  background(bannerImg);
  drawSprites();
  if (gameState === 1) {
    bannerImg = cookImg;
    button.show();
  }
  button.display();



}
