
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	g1 = new gr(400, 700);
	b1 = new box(20, 20, 80, 30);
	i1 = new iron(500, 550, 100, 100)
	
	C1 = new circel(300, 20);
	sb1 = new sbox(300, 300, 50, 50);
	sc1 = new scircel(100, 300);
	
	console.log(C1)


}


function draw() {
  rectMode(CENTER);
  background("pink");
  drawSprites();
 	 g1.display();
  b1.display();
  i1.display();
 
  C1.display();
  sb1.display();
  sc1.display();

}
