
var ground
var ground2
var slingshot
var box1
var box8
var box9
var box10
var box11
var box12
var box13
var box14
var box15
var box16
var polygon



function setup() {
  createCanvas(800,400);
  createSprite(350, 400, 200, 20);
 ground2 = new Ground(200,400,50,10);
 box8 = new Box(330, 235, 30, 40);
 box9 = new Box(360, 235, 30, 40);
 box10 = new Box(390, 235, 30, 40);
 box11 = new Box(420, 235, 30, 40);
 box12 = new Box(450, 235, 30, 40);
 box13 = new Box(480, 235, 30, 40);
 box14 = new Box(510, 235, 30, 40);
 box15 = new Box(540, 235, 30, 40);
 box16 = new Box(570, 235, 30, 40);

 polygon = Bodies.circle(50,200,20);
 World.add(world,polygon);

 slingshot = new SlingShot(this.polygon,{x:100, y:200});

 imageMode(CENTER)


 image(polygon_img, polygon.position.x, polygon.position.y, 40,40);











 

}

function draw() {
  background(255,255,255);
   
  
  ground2.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();









  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      console.log(" keyPressed");
      slingshot.attach(bird.body);
  }
}