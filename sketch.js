var person, road, car;
var personImg, roadImg, carImg;
var score = 0;

var gameOver, restart;
var gameOverImg, restartImg;
var gamestate = PLAY;
var PLAY;
var END;


function preload(){

    personImg = loadImage("person.png");
    roadImg = loadImage("road.png");
    carImg = loadImage("car.png");

    gameOverImg = loadImage("gameOver.png");
    restartImg = loadImage("restart.png");


}



function setup() {
    createCanvas(600, 600);

    road = createSprite(300,300,600,600);
    road.scale = 2;
    road.addImage("road", roadImg);
    road.velocityY = 2;
    
    car = createSprite(200, 250, 20, 35);
    car.addImage(carImg);
    car.scale = 0.3;
    
 

}



function draw() {
    background("white");


    drawSprites();
}