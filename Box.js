class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
      this.visibility = 255;
    }


    display(){
      console.log(this.body.speed);
      if(this.body.speed < 3){
        super.display();
      }
      else{
        World.remove(world, this.body);
        tint(255, this.Visibility);
        this.image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }
    }
  
  };
  