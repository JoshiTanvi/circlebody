class circel {

    constructor(x, y) {
       var options = {
           'restitution':0.2,
           'friction':1.0,
           'density':1.0
       }
     this.body = Bodies.circle(x, y, 50)
     //this.daimeter = d
   
     World.add(world, this.body);
   
    }
   
   display() {
   
       
       push();
      // rectMode(CENTER)
         fill("blue");
         translate(this.body.position.x, this.body.position.y);
         rotate(this.body.angle);
         circle(0,0, 100);
         pop();
       }
   
   }
   
   
