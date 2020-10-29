class dustbin{
    constructor(x,y){
        this.x=x
        this.y=y

        this.dustbinWidth=200
        this.dustbinHeight=100
        this.wallThickness=20
      
        this.image= loadImage("dustbingreen.png")

        this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness, {isStatic:true})

        this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
        

        this.rightWallBody= Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
    

        World.add(world,this.bottomBody)
        World.add(world,this.leftWallBody)
        World.add(world,this.rightWallBody);
   
    }
    display(){
        var posBottom= this.bottomBody.position;
        var posleft= this.leftWallBody.position;
        var posright= this.rightWallBody.position;

        push()
        translate(posleft.x,posleft.y);
        
        angleMode(RADIANS)
        fill(255)
        stroke(255)
        rotate(this.angle)
       
        pop()

     push()
     translate(posright.x,posright.y);
    
     angleMode(RADIANS)
     fill(255)
     stroke(255)
     rotate(-1*this.angle)
      
     pop()

     push()
     translate(posBottom.x,posBottom.y);
     
     stroke(255)
     angleMode(RADIANS)
     fill(255)
     imageMode(CENTER);
    image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight)
     pop()

    }
}