var starImg,bgImg;
var star, starBody,fairy,fairyImg;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairy.png");
//	fairy=loadImage("images/fairyImage1.png,images/fairyImage1.png");
	fairyVoice=loadSound("sound/JoyMusic.mp3");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
fairyVoice.play();
	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.1;

	fairy=createSprite(100,300);
	fairy.addImage(fairyImg);
	fairy.scale=0.25;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 
 

  console.log(star.y);
  
  //write code to stop star in the hand of fairy
if(fairy.isTouching(star)){
	Matter.Body.setStatic(starBody,true);

}
//fairy.debug=true;
fairy.setCollider("circle",350,-130,30);
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
if (keyCode===RIGHT_ARROW){
	fairy.x=fairy.x+15;
}
	//writw code to move fairy left and right
	if(star.y>470 && starBody.position.y>470){
		Matter.Body.setStatic(starBody,true);
	}
}
